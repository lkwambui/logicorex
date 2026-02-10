import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const normalizedEmail = email?.toLowerCase().trim();

    // Validate required fields
    if (!name || !normalizedEmail || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists with this email" });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email: normalizedEmail,
      passwordHash,
      phone,
    });

    await user.save();

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email, type: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email?.toLowerCase().trim();

    // Validate input
    if (!normalizedEmail || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(403).json({ message: "Account has been deactivated" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email, type: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        enrolledCourses: user.enrolledCourses,
      },
    });
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

// Get current user profile
router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id)
      .select("-passwordHash")
      .populate("enrolledCourses");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
});

export default router;
