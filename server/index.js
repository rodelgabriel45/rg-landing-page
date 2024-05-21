import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Middleware for handing errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
