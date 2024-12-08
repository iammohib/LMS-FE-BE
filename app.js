import cookieParser from "cookie-parser";
config();
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get the current file path and directory (ESM doesn't support __dirname directly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

// Middleware to set Content-Security-Policy
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; script-src 'self';"
  );
  next();
});

// Server Status Check Route
app.get("/ping", (_req, res) => {
  res.send("Pong");
});

// Import all routes
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import miscRoutes from "./routes/miscellaneous.routes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1", miscRoutes);

// Default catch all route - 404
app.all("*", (_req, res) => {
  res.status(404).send("OOPS!!! 404 Page Not Found");
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
