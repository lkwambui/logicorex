import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userAuthRoutes from "./routes/userAuthRoutes.js";

dotenv.config();

// Validate environment variables
if (!process.env.JWT_SECRET) {
  console.error("❌ FATAL: JWT_SECRET is not set in .env file");
  process.exit(1);
}

connectDB(); // 🔗 Connect to MongoDB

const app = express();

// CORS configuration
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Logicorex API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});


// Serve uploaded images
import path from "path";
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/user", userAuthRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/payments", paymentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
