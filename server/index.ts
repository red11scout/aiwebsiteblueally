import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chatRouter from "./routes/chat.js";
import contactRouter from "./routes/contact.js";
import signupRouter from "./routes/signup.js";

// Top-level crash handlers — catches import/module errors before startServer()
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
  process.exit(1);
});

console.log("=== Server module loaded ===");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // ---------- Pre-load index.html into memory ----------
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  const indexPath = path.join(staticPath, "index.html");
  const indexExists = fs.existsSync(indexPath);
  const indexHtml = indexExists
    ? fs.readFileSync(indexPath, "utf8")
    : "<!DOCTYPE html><html><body>OK</body></html>";

  console.log(`Static path: ${staticPath}`);
  console.log(`Index exists: ${indexExists} (${indexPath})`);
  console.log(`Index HTML size: ${indexHtml.length} bytes`);

  // ---------- Root health check — BEFORE all middleware ----------
  // Replit health checks hit GET /  — respond from memory, zero I/O
  app.get("/", (_req, res) => {
    res.status(200).type("html").send(indexHtml);
  });

  // API health check (also before middleware)
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: Date.now() });
  });

  // ---------- Middleware ----------
  app.use(
    cors({
      origin:
        process.env.NODE_ENV === "production"
          ? false
          : ["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:3000"],
      credentials: true,
    })
  );

  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  app.use(express.json({ limit: "1mb" }));

  // API rate limiter: 100 requests per 15 minutes per IP
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again later." },
  });

  app.use("/api", apiLimiter);

  // ---------- API routes ----------
  app.use("/api/chat", chatRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/signup", signupRouter);

  // ---------- Static assets (JS, CSS, images) ----------
  app.use(express.static(staticPath));

  // ---------- SPA fallback — serve pre-loaded HTML for all other routes ----------
  app.get("*", (_req, res) => {
    res.status(200).type("html").send(indexHtml);
  });

  // Global error handler
  app.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      console.error("Unhandled error:", err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  );

  // ---------- Listen ----------
  const port = parseInt(process.env.PORT || "5000", 10);
  console.log(`Attempting to listen on 0.0.0.0:${port}...`);

  server.on("error", (err: NodeJS.ErrnoException) => {
    console.error(`Server listen error: ${err.code} — ${err.message}`);
    process.exit(1);
  });

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });

  // Graceful shutdown
  const shutdown = () => {
    console.log("\nShutting down gracefully...");
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });

    setTimeout(() => {
      console.error("Forced shutdown after timeout");
      process.exit(1);
    }, 10000);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
