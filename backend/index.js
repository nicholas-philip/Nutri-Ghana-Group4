import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic test route
app.get("/", (req, res) => {
  res.send("Server is running with MongoDB...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
