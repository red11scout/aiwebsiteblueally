/**
 * Sign-Up API Route
 * Handles industry report sign-up form submissions.
 * Stores submission and (future) triggers Clerk org creation + Resend welcome email.
 */

import { Router, type Request, type Response } from "express";

const router = Router();

interface SignupSubmission {
  companyName: string;
  name: string;
  email: string;
  title: string;
  industry: string;
  submittedAt: string;
  ip: string;
}

// In-memory store for MVP — will be replaced with Neon DB
const signups: SignupSubmission[] = [];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Block common free email domains for B2B sign-ups
const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "aol.com", "icloud.com", "mail.com", "protonmail.com",
];

router.post("/", (req: Request, res: Response) => {
  try {
    const { companyName, name, email, title, industry } = req.body;

    const errors: string[] = [];

    if (!companyName || typeof companyName !== "string" || companyName.trim().length === 0) {
      errors.push("Company name is required");
    }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.push("Work email is required");
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.push("A valid email address is required");
    } else {
      const domain = email.trim().toLowerCase().split("@")[1];
      if (FREE_EMAIL_DOMAINS.includes(domain)) {
        errors.push("Please use your work email address");
      }
    }

    if (!industry || typeof industry !== "string") {
      errors.push("Industry is required");
    }

    if (errors.length > 0) {
      res.status(400).json({ success: false, errors });
      return;
    }

    // Check for duplicate email
    const existing = signups.find(
      (s) => s.email === email.trim().toLowerCase()
    );
    if (existing) {
      res.status(200).json({
        success: true,
        message: "You're already signed up! Check your email for access to your personalized AI Hub.",
      });
      return;
    }

    const submission: SignupSubmission = {
      companyName: companyName.trim(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      title: title?.trim() || "",
      industry: industry.trim(),
      submittedAt: new Date().toISOString(),
      ip: req.ip || req.socket.remoteAddress || "unknown",
    };

    signups.push(submission);

    console.log(
      `[Signup] New sign-up: ${submission.name} (${submission.email}) at ${submission.companyName} — Industry: ${submission.industry}`
    );

    // TODO: Phase 2 — Create Clerk organization
    // TODO: Phase 2 — Send welcome email via Resend
    // TODO: Phase 4 — Trigger Discover API for initial report

    res.status(200).json({
      success: true,
      message: "Your customized AI assessment is being generated. You'll receive access to your personalized BlueAlly AI Hub within 24 hours.",
    });
  } catch (error) {
    console.error("Signup form error:", error);
    res.status(500).json({
      success: false,
      errors: ["An unexpected error occurred. Please try again later."],
    });
  }
});

export default router;
