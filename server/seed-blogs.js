import dotenv from "dotenv";
import mongoose from "mongoose";
import BlogPost from "./models/BlogPost.js";

dotenv.config();

const blogSeeds = [
  {
    title: "AI for Small Businesses: 5 Practical Automations",
    slug: "ai-for-small-business-automations",
    excerpt:
      "From customer support to reporting, AI can save time without huge budgets.",
    content:
      "Start with low-risk automations: email sorting, FAQ chatbots, report summaries, lead scoring, and meeting notes. Choose tools with clear ROI, integrate gradually, and measure time saved. The goal is to free your team for high-value work.",
    tags: ["ai", "automation", "business"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "API Design Principles That Scale",
    slug: "api-design-principles-that-scale",
    excerpt:
      "Consistency, versioning, and error handling are the backbone of great APIs.",
    content:
      "A scalable API uses predictable resources, consistent naming, and stable pagination. Return clear errors, document rate limits, and plan versioning early. Backward compatibility keeps client integrations stable and reduces support burden.",
    tags: ["api", "backend", "architecture"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Microservices vs Monolith: What to Choose in 2026",
    slug: "microservices-vs-monolith-2026",
    excerpt:
      "Start simple, scale intentionally, and avoid unnecessary complexity.",
    content:
      "Monoliths enable faster delivery early on. Microservices are best when teams, traffic, and deployment needs justify the overhead. Evaluate your org size, release cadence, and system boundaries before splitting services.",
    tags: ["architecture", "microservices", "scaling"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Building a Secure Login Flow",
    slug: "building-a-secure-login-flow",
    excerpt:
      "Protect accounts with strong policies, not just strong passwords.",
    content:
      "Use hashed passwords, rate limiting, and account lockout policies. Add multi-factor authentication for sensitive actions, rotate tokens regularly, and monitor unusual access patterns. Security is a process, not a one-time task.",
    tags: ["security", "auth", "backend"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Top Performance Bottlenecks in React Apps",
    slug: "performance-bottlenecks-react",
    excerpt:
      "Avoid unnecessary re-renders and heavy bundles for faster UI.",
    content:
      "Common issues include large bundle sizes, excessive state updates, and expensive list rendering. Use memoization wisely, split bundles, and virtualize long lists. Measure first, then optimize based on real data.",
    tags: ["react", "performance", "frontend"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Designing a Mobile-First Product Strategy",
    slug: "mobile-first-product-strategy",
    excerpt:
      "Prioritize the core flow for smaller screens to reach more users.",
    content:
      "Start with the smallest screen and most important tasks. Focus on speed, clarity, and touch-friendly UI. Build up to tablet and desktop experiences with progressive enhancements.",
    tags: ["mobile", "product", "ux"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Database Indexing: What Most Apps Get Wrong",
    slug: "database-indexing-mistakes",
    excerpt:
      "Indexes can speed up queries—or slow everything down if misused.",
    content:
      "Index only what you query, avoid over-indexing, and watch write performance. Use compound indexes for common filters and sort patterns. Always test query plans to validate improvements.",
    tags: ["database", "performance", "backend"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "The Rise of Serverless: Pros and Cons",
    slug: "rise-of-serverless-pros-cons",
    excerpt:
      "Serverless can reduce ops work but introduces new tradeoffs.",
    content:
      "Serverless offers auto-scaling and pay-per-use. Downsides include cold starts and tighter vendor lock-in. It’s ideal for bursty workloads, background jobs, and event-driven systems.",
    tags: ["serverless", "cloud", "architecture"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Choosing Between REST and GraphQL",
    slug: "rest-vs-graphql",
    excerpt:
      "Pick the API style that fits your product complexity and team skillset.",
    content:
      "REST is simpler for many teams, while GraphQL shines when clients need flexible data shapes. Consider caching, tooling, and monitoring before switching. Start with REST, move to GraphQL only when needed.",
    tags: ["api", "graphql", "rest"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "How to Build a Design System That Scales",
    slug: "design-system-that-scales",
    excerpt:
      "Design systems reduce UI inconsistency and speed up product delivery.",
    content:
      "Start with core components, tokens, and documentation. Keep accessibility in focus and align developers with designers. A good design system evolves with product needs and feedback.",
    tags: ["design", "uiux", "systems"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Cloud Cost Optimization: Quick Wins",
    slug: "cloud-cost-optimization-quick-wins",
    excerpt:
      "Reduce cloud spend without sacrificing performance.",
    content:
      "Start by right-sizing instances, using reserved capacity where possible, and turning off idle resources. Enable budget alerts and monitor storage usage. Regular reviews keep costs in control.",
    tags: ["cloud", "costs", "devops"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "What Makes a Great Product Roadmap",
    slug: "great-product-roadmap",
    excerpt:
      "A roadmap should align business goals with real user value.",
    content:
      "Define clear themes, prioritize user outcomes, and communicate timelines responsibly. Use feedback loops from analytics and customer interviews to refine priorities. A roadmap is a living plan, not a fixed contract.",
    tags: ["product", "strategy", "planning"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "CI/CD Basics for Faster Releases",
    slug: "cicd-basics-for-faster-releases",
    excerpt:
      "Automate tests and deployments to ship with confidence.",
    content:
      "A strong CI/CD pipeline runs tests, builds artifacts, and deploys to staging automatically. Use environment separation and approvals for production. Small, frequent releases reduce risk and speed up feedback.",
    tags: ["devops", "cicd", "automation"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Accessibility Checklist for Modern Websites",
    slug: "accessibility-checklist-modern-websites",
    excerpt:
      "Build inclusive products with practical accessibility standards.",
    content:
      "Use semantic HTML, proper color contrast, keyboard navigation, and alt text. Provide focus indicators and test with screen readers. Accessibility improves UX for everyone and reduces legal risk.",
    tags: ["accessibility", "web", "ux"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Data Privacy: What Your App Must Handle",
    slug: "data-privacy-app-requirements",
    excerpt:
      "User trust depends on transparent data practices.",
    content:
      "Collect only necessary data, secure it in transit and at rest, and document retention policies. Offer user controls for deleting data. Privacy is a core product responsibility, not an afterthought.",
    tags: ["privacy", "security", "compliance"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "How to Validate Your Startup Idea with MVPs",
    slug: "validate-startup-idea-with-mvps",
    excerpt:
      "MVPs help you test demand before building the full product.",
    content:
      "Focus on the smallest set of features that prove the core value. Launch fast, measure engagement, and iterate based on user feedback. The best MVPs prioritize learning over perfection.",
    tags: ["startup", "mvp", "product"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Edge Computing: When Latency Matters",
    slug: "edge-computing-when-latency-matters",
    excerpt:
      "Move workloads closer to users for faster experiences.",
    content:
      "Edge computing reduces latency by processing data near the source. It’s useful for real-time apps, IoT, and personalization. Choose edge services based on global coverage and developer tooling.",
    tags: ["edge", "cloud", "performance"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Building a Reliable Notification System",
    slug: "reliable-notification-system",
    excerpt:
      "Deliver the right messages at the right time without spam.",
    content:
      "Use queues for delivery, keep templates consistent, and allow user preferences. Track delivery rates and retries, and avoid sending too frequently. Reliability builds trust and engagement.",
    tags: ["systems", "backend", "messaging"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Observability 101: Logs, Metrics, and Traces",
    slug: "observability-logs-metrics-traces",
    excerpt:
      "Understand your system health with the right signals.",
    content:
      "Logs tell stories, metrics show trends, and traces reveal bottlenecks. Start with structured logs, basic dashboards, and distributed tracing for critical paths. Observability reduces downtime and speeds up debugging.",
    tags: ["observability", "devops", "monitoring"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Building for Scale: Caching Strategies That Work",
    slug: "caching-strategies-that-work",
    excerpt:
      "Caching reduces load and improves response times across the stack.",
    content:
      "Use in-memory caches for hot data, CDN caching for assets, and database query caching for repeated reads. Define cache invalidation rules early to avoid stale data. Measure hit rates and tune for impact.",
    tags: ["caching", "performance", "backend"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "Modern Web Security: Top 10 Threats",
    slug: "modern-web-security-top-10-threats",
    excerpt:
      "Prevent common attacks with practical safeguards.",
    content:
      "Mitigate XSS, CSRF, injection, and credential stuffing with defense-in-depth. Use secure headers, input validation, rate limits, and MFA. Security reviews should be part of every release cycle.",
    tags: ["security", "web", "best-practices"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
  {
    title: "How to Choose the Right Database",
    slug: "choose-the-right-database",
    excerpt:
      "Select between SQL and NoSQL based on data needs and growth.",
    content:
      "SQL works best for relational data and strong consistency. NoSQL is great for flexible schemas and horizontal scaling. Consider query patterns, transactions, and team expertise before choosing.",
    tags: ["database", "architecture", "backend"],
    author: "LogicoreX Team",
    published: true,
    publishedAt: new Date(),
  },
];

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const existing = await BlogPost.find({
      slug: { $in: blogSeeds.map((b) => b.slug) },
    }).select("slug");

    const existingSlugs = new Set(existing.map((b) => b.slug));
    const toInsert = blogSeeds.filter((b) => !existingSlugs.has(b.slug));

    if (toInsert.length === 0) {
      console.log("⚠️  All seed blogs already exist. No changes made.");
      process.exit(0);
    }

    await BlogPost.insertMany(toInsert);
    console.log(`✅ Seeded ${toInsert.length} blog posts`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding blogs:", error);
    process.exit(1);
  }
};

seedBlogs();
