import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { movieRoute } from "./api.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", movieRoute);

// Serve static files from public folder
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "public", "static", "index.html")
  );
});

// MongoDB Connection + Server Start
async function start() {
  try {
    // Local MongoDB connection
    const MONGO_URI = "mongodb://127.0.0.1:27017/mern-workshop";

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected");

    const port = 3080;

    app.listen(port, () => {
      console.log(
        `Movies API started on http://localhost:${port}`
      );
    });

  } catch (err) {
    console.log("MongoDB Connection Error:");
    console.log(err);
  }
}

// Start server
start();