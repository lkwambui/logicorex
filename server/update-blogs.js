import dotenv from "dotenv";
import mongoose from "mongoose";
import BlogPost from "./models/BlogPost.js";

dotenv.config();

const extraParagraphs = `

Key takeaways:
- Start with a clear problem statement and measurable outcomes.
- Keep your stack lean early, then optimize for scale later.
- Measure impact with analytics and user feedback loops.

Action steps:
1) Audit your current flow and identify the top friction points.
2) Prioritize quick wins that reduce time-to-value for users.
3) Document decisions so teams can iterate faster next time.
`;

const keywordMap = {
  ai: "artificial-intelligence",
  automation: "automation",
  api: "api",
  backend: "server",
  architecture: "software-architecture",
  microservices: "microservices",
  security: "cybersecurity",
  auth: "authentication",
  react: "reactjs",
  frontend: "frontend",
  mobile: "mobile-app",
  ux: "user-experience",
  uiux: "ui-ux",
  design: "product-design",
  database: "database",
  performance: "performance",
  serverless: "serverless",
  graphql: "graphql",
  rest: "rest-api",
  cloud: "cloud-computing",
  devops: "devops",
  cicd: "ci-cd",
  accessibility: "accessibility",
  privacy: "data-privacy",
  product: "product-management",
  startup: "startup",
  edge: "edge-computing",
  caching: "caching",
  monitoring: "monitoring",
  messaging: "notification",
};

const buildCoverUrl = (keyword) =>
  `https://source.unsplash.com/featured/1200x700?${encodeURIComponent(keyword)}`;

const getKeyword = (post) => {
  const tags = (post.tags || []).map((t) => t.toLowerCase());
  for (const tag of tags) {
    if (keywordMap[tag]) return keywordMap[tag];
  }

  const title = (post.title || "").toLowerCase();
  for (const [key, value] of Object.entries(keywordMap)) {
    if (title.includes(key)) return value;
  }

  return "technology";
};

const updateBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const posts = await BlogPost.find();

    for (const post of posts) {
      let updated = false;

      const shouldReplaceImage =
        !post.coverImage || post.coverImage.includes("picsum.photos");

      if (shouldReplaceImage) {
        const keyword = getKeyword(post);
        post.coverImage = buildCoverUrl(keyword);
        updated = true;
      }

      if (!post.content || post.content.length < 700) {
        post.content = `${post.content || ""}${extraParagraphs}`.trim();
        updated = true;
      }

      if (updated) {
        await post.save();
      }
    }

    console.log(`✅ Updated ${posts.length} blog posts`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating blogs:", error);
    process.exit(1);
  }
};

updateBlogs();
