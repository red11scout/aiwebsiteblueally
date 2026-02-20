import { Router, type Request, type Response } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

// Module-level Anthropic client (reused across requests)
const anthropicClient = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

// Session tracking for rate limiting
const sessionMessageCounts = new Map<string, { count: number; resetAt: number }>();
const ipHourlyCounts = new Map<string, { count: number; resetAt: number }>();

const SESSION_LIMIT = 10;
const IP_HOURLY_LIMIT = 60;
const HOUR_MS = 60 * 60 * 1000;

function getSessionCount(sessionId: string): number {
  const entry = sessionMessageCounts.get(sessionId);
  if (!entry || Date.now() > entry.resetAt) {
    return 0;
  }
  return entry.count;
}

function incrementSessionCount(sessionId: string): void {
  const entry = sessionMessageCounts.get(sessionId);
  if (!entry || Date.now() > entry.resetAt) {
    sessionMessageCounts.set(sessionId, {
      count: 1,
      resetAt: Date.now() + HOUR_MS,
    });
  } else {
    entry.count++;
  }
}

function getIpCount(ip: string): number {
  const entry = ipHourlyCounts.get(ip);
  if (!entry || Date.now() > entry.resetAt) {
    return 0;
  }
  return entry.count;
}

function incrementIpCount(ip: string): void {
  const entry = ipHourlyCounts.get(ip);
  if (!entry || Date.now() > entry.resetAt) {
    ipHourlyCounts.set(ip, {
      count: 1,
      resetAt: Date.now() + HOUR_MS,
    });
  } else {
    entry.count++;
  }
}

// Clean up stale entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  const staleSessionKeys: string[] = [];
  const staleIpKeys: string[] = [];

  sessionMessageCounts.forEach((entry, key) => {
    if (now > entry.resetAt) staleSessionKeys.push(key);
  });
  staleSessionKeys.forEach((key) => sessionMessageCounts.delete(key));

  ipHourlyCounts.forEach((entry, key) => {
    if (now > entry.resetAt) staleIpKeys.push(key);
  });
  staleIpKeys.forEach((key) => ipHourlyCounts.delete(key));
}, 30 * 60 * 1000);

const SYSTEM_PROMPT = `You are BlueAlly's AI assistant, an expert on BlueAlly's comprehensive AI services and solutions. You are professional, knowledgeable, and consultative in tone.

## About BlueAlly
BlueAlly is a trusted technology partner that helps organizations accelerate their AI transformation with a structured, proven approach. We combine deep technical expertise with strategic consulting to deliver measurable business outcomes.

## BlueAlly's 8-Part AI Framework
1. **Educate** — AI readiness workshops and executive education to align leadership on AI opportunities and strategy.
2. **Discover** — Use case identification and prioritization using structured discovery workshops with stakeholders.
3. **Design** — Solution architecture and AI workflow design tailored to the organization's specific needs.
4. **Assess** — Readiness assessment across skills, data, infrastructure, and governance dimensions.
5. **Build** — Rapid prototyping and development of AI-powered applications and workflows.
6. **Deploy** — Production deployment with enterprise security, compliance, and integration.
7. **Manage** — Ongoing monitoring, optimization, and support for deployed AI solutions.
8. **Scale** — Expanding AI capabilities across the organization with governance and best practices.

## 7-Step Use Case Process
1. Identify business challenges and opportunities
2. Map processes to AI capabilities
3. Evaluate feasibility and impact
4. Prioritize use cases with a 2x2 matrix (Impact vs. Feasibility)
5. Design solution architecture
6. Build rapid prototypes
7. Measure ROI and iterate

## Services
- **AI Strategy & Consulting** — Executive alignment, roadmap development, and AI governance frameworks.
- **AI Application Development** — Custom AI applications, chatbots, workflow automation, and intelligent document processing.
- **Data Engineering** — Data pipeline design, data quality assessment, and analytics infrastructure.
- **Security & Compliance** — AI security frameworks, responsible AI practices, and regulatory compliance.

## Certifications & Trust
- SOC 1 Type II
- SOC 2 Type II
- ISO 27001 (Information Security Management)
- ISO 42001 (AI Management System)
- CMMI (Capability Maturity Model Integration)

## Industries Served
- **Healthcare** — Clinical decision support, patient engagement, medical records automation.
- **Manufacturing** — Predictive maintenance, quality control, supply chain optimization.
- **Construction** — Project estimation, safety monitoring, resource planning.
- **Life Sciences** — Drug discovery support, clinical trial optimization, regulatory compliance.
- **Financial Services** — Risk assessment, fraud detection, customer insights, compliance automation.

## Contact Information
- Phone: (800) 886-5369
- Email: ai@blueally.com
- Website: blueally.com

## Guidelines
- Be helpful, concise, and professional in all responses.
- When discussing services, relate them to the customer's potential needs.
- Always guide conversations toward scheduling a consultation to discuss specific requirements.
- If asked about pricing, explain that BlueAlly provides tailored solutions and encourage scheduling a consultation for a detailed proposal.
- Keep responses focused and under 200 words when possible.
- Do not make claims about specific results unless referencing the framework or process.
- If you don't know something specific about BlueAlly, say so honestly and suggest contacting the team directly.`;

router.post("/", async (req: Request, res: Response) => {
  try {
    const { message, sessionId } = req.body;

    // Validate request body
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    if (message.length > 2000) {
      res.status(400).json({ error: "Message must be under 2000 characters" });
      return;
    }

    // Check API key availability
    if (!anthropicClient) {
      res.status(503).json({
        error: "AI assistant is currently unavailable",
      });
      return;
    }

    // Rate limiting: per-session
    const sid = sessionId || "anonymous";
    if (getSessionCount(sid) >= SESSION_LIMIT) {
      res.status(429).json({
        error:
          "You've reached the message limit for this session. Please contact us at (800) 886-5369 or ai@blueally.com for further assistance.",
      });
      return;
    }

    // Rate limiting: per-IP
    const clientIp = req.ip || req.socket.remoteAddress || "unknown";
    if (getIpCount(clientIp) >= IP_HOURLY_LIMIT) {
      res.status(429).json({
        error: "Rate limit exceeded. Please try again later.",
      });
      return;
    }

    // Increment counters
    incrementSessionCount(sid);
    incrementIpCount(clientIp);

    // Set SSE headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    const stream = anthropicClient.messages.stream({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      temperature: 0.7,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: message.trim(),
        },
      ],
    });

    stream.on("text", (text) => {
      res.write(`data: ${text}\n\n`);
    });

    stream.on("error", (error) => {
      console.error("Anthropic stream error:", error);
      res.write(`data: [ERROR]\n\n`);
      res.end();
    });

    stream.on("end", () => {
      res.write(`data: [DONE]\n\n`);
      res.end();
    });

    // Handle client disconnect
    req.on("close", () => {
      stream.abort();
    });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "An internal error occurred" });
    } else {
      res.write(`data: [ERROR]\n\n`);
      res.end();
    }
  }
});

export default router;
