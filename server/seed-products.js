import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import fs from "fs";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const products = JSON.parse(fs.readFileSync("./server/products-seed.json", "utf-8"));
    let created = 0;
    for (const prod of products) {
      const exists = await Product.findOne({ title: prod.title });
      if (!exists) {
        await Product.create(prod);
        created++;
      }
    }
    console.log(`✅ Seeded ${created} new products!`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
