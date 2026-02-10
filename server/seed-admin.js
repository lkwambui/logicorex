import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Admin from "./models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@logicorex.com" });
    
    if (existingAdmin) {
      console.log("⚠️  Admin already exists with email: admin@logicorex.com");
      process.exit(0);
    }

    // Create admin
    const passwordHash = await bcrypt.hash("admin123", 10);
    const admin = await Admin.create({
      name: "Admin",
      email: "admin@logicorex.com",
      passwordHash,
      role: "admin",
      isActive: true,
    });

    console.log("✅ Admin created successfully!");
    console.log("📧 Email: admin@logicorex.com");
    console.log("🔑 Password: admin123");
    console.log("⚠️  Please change this password after first login!");
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
