import { Router, type Request, type Response } from "express";

const router = Router();

interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  journeyStage?: string;
  interests?: string[];
  message?: string;
  submittedAt: string;
  ip: string;
}

// In-memory store for MVP
const submissions: ContactSubmission[] = [];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

router.post("/", (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, company, journeyStage, interests, message } = req.body;

    // Validate required fields
    const errors: string[] = [];

    if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
      errors.push("First name is required");
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0) {
      errors.push("Last name is required");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.push("Email is required");
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.push("A valid email address is required");
    }

    if (!company || typeof company !== "string" || company.trim().length === 0) {
      errors.push("Company is required");
    }

    if (errors.length > 0) {
      res.status(400).json({ success: false, errors });
      return;
    }

    // Validate optional fields
    if (journeyStage && typeof journeyStage !== "string") {
      res.status(400).json({
        success: false,
        errors: ["Journey stage must be a string"],
      });
      return;
    }

    if (interests && !Array.isArray(interests)) {
      res.status(400).json({
        success: false,
        errors: ["Interests must be an array"],
      });
      return;
    }

    if (message && typeof message !== "string") {
      res.status(400).json({
        success: false,
        errors: ["Message must be a string"],
      });
      return;
    }

    const submission: ContactSubmission = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      journeyStage: journeyStage?.trim(),
      interests: interests?.map((i: string) => (typeof i === "string" ? i.trim() : String(i))),
      message: message?.trim(),
      submittedAt: new Date().toISOString(),
      ip: req.ip || req.socket.remoteAddress || "unknown",
    };

    submissions.push(submission);

    console.log(
      `[Contact] New submission from ${submission.firstName} ${submission.lastName} (${submission.email}) at ${submission.company}`
    );

    res.status(200).json({
      success: true,
      message:
        "Thank you for your interest in BlueAlly's AI services. Our team will review your information and reach out within one business day to discuss how we can help accelerate your AI journey.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      errors: ["An unexpected error occurred. Please try again later."],
    });
  }
});

export default router;
