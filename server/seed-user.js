import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const email = "user@logicorex.com";
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("⚠️  User already exists with email: user@logicorex.com");
      process.exit(0);
    }

    const passwordHash = await bcrypt.hash("user123", 10);
    const user = await User.create({
      name: "LogicoreX User",
      email,
      passwordHash,
      phone: "+254700000000",
      isActive: true,
    });

    console.log("✅ User created successfully!");
    console.log("📧 Email: user@logicorex.com");
    console.log("🔑 Password: user123");
    console.log("⚠️  Please change this password after first login!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    process.exit(1);
  }
};

seedUser();
