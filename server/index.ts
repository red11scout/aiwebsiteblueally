import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chatRouter from "./routes/chat.js";
import contactRouter from "./routes/contact.js";
import signupRouter from "./routes/signup.js";

// Top-level crash handlers
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
  process.exit(1);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
console.log(`Index HTML size: ${Buffer.byteLength(indexHtml)} bytes`);

// ---------- Express app ----------
const app = express();

// Health check FIRST — before any middleware that could interfere
app.get("/", (_req, res) => {
  console.log(`[${new Date().toISOString()}] GET / — serving index.html`);
  res.status(200).type("html").send(indexHtml);
});

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

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

app.use("/api", apiLimiter);

app.use("/api/chat", chatRouter);
app.use("/api/contact", contactRouter);
app.use("/api/signup", signupRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

app.use(express.static(staticPath));

// SPA fallback for non-root routes
app.get("*", (_req, res) => {
  res.status(200).type("html").send(indexHtml);
});

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

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}/`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  console.error(`Server listen error: ${err.code} — ${err.message}`);
  process.exit(1);
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
