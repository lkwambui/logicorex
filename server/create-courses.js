import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from './models/Course.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const courses = [
  // Web Design Courses (6)
  {
    title: 'Web Design Fundamentals',
    slug: 'web-design-fundamentals',
    description: 'Learn the essentials of modern web design including color theory, typography, layout principles, and responsive design. Perfect for beginners looking to create beautiful, user-friendly websites.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 4500,
    duration: '6 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    published: true
  },
  {
    title: 'Responsive Web Design Mastery',
    slug: 'responsive-web-design-mastery',
    description: 'Master responsive design techniques that work on all devices. Learn mobile-first approach, CSS media queries, flexible grids, and adaptive images.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 5500,
    duration: '7 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-adf4e565db91?w=800',
    published: true
  },
  {
    title: 'Web Typography & Visual Hierarchy',
    slug: 'web-typography-visual-hierarchy',
    description: 'Discover the art of typography on the web. Learn font selection, size, spacing, and how to create visual hierarchy that guides user attention.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 3800,
    duration: '4 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },
  {
    title: 'Web Design for E-commerce',
    slug: 'web-design-ecommerce',
    description: 'Create stunning e-commerce websites. Learn product showcase, conversion optimization, checkout design, and user trust elements.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800',
    published: true
  },
  {
    title: 'Web Design Psychology & UX Principles',
    slug: 'web-design-psychology-ux',
    description: 'Understand how psychology impacts web design. Learn color psychology, persuasion principles, user behavior, and conversion rate optimization.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 5200,
    duration: '6 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    published: true
  },
  {
    title: 'Advanced Web Design with Figma',
    slug: 'advanced-web-design-figma',
    description: 'Design professional websites using Figma. Learn components, design systems, prototyping, and collaboration tools for modern web design.',
    category: 'web-design',
    instructor: 'LogicoreX Team',
    price: 6800,
    duration: '8 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },

  // UI/UX Design Courses (6)
  {
    title: 'UI/UX Design Masterclass',
    slug: 'uiux-design-masterclass',
    description: 'Master user interface and user experience design with hands-on projects. Learn design thinking, wireframing, prototyping in Figma, and user research techniques.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 7500,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },
  {
    title: 'User Research & Personas',
    slug: 'user-research-personas',
    description: 'Learn how to conduct effective user research, create accurate personas, and use research insights to inform design decisions.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 4800,
    duration: '5 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    published: true
  },
  {
    title: 'Wireframing & Prototyping',
    slug: 'wireframing-prototyping',
    description: 'Master the art of wireframing and interactive prototyping. Learn low and high fidelity prototypes, user testing, and iteration cycles.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 5500,
    duration: '6 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },
  {
    title: 'Mobile App UX Design',
    slug: 'mobile-app-ux-design',
    description: 'Design beautiful and intuitive mobile applications. Learn iOS and Android design patterns, navigation, gestures, and mobile-first thinking.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '7 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    published: true
  },
  {
    title: 'Design Systems & Component Libraries',
    slug: 'design-systems-components',
    description: 'Create scalable design systems and component libraries. Learn consistency, documentation, and building reusable design patterns.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 7800,
    duration: '8 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },
  {
    title: 'Accessibility in UX Design',
    slug: 'accessibility-ux-design',
    description: 'Design inclusive digital experiences. Learn WCAG standards, accessibility testing, color contrast, and designing for diverse users.',
    category: 'uiux',
    instructor: 'LogicoreX Team',
    price: 5000,
    duration: '5 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    published: true
  },

  // Frontend Web Development Courses (6)
  {
    title: 'Advanced Frontend Development',
    slug: 'advanced-frontend-development',
    description: 'Take your frontend skills to the next level. Master TypeScript, Next.js, advanced React patterns, performance optimization, testing, and deployment strategies.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 9500,
    duration: '12 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    published: true
  },
  {
    title: 'HTML & CSS Essentials',
    slug: 'html-css-essentials',
    description: 'Master the foundations of web development. Learn semantic HTML, modern CSS techniques, flexbox, grid, and responsive design.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 3500,
    duration: '4 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    published: true
  },
  {
    title: 'JavaScript Fundamentals to Advanced',
    slug: 'javascript-fundamentals-advanced',
    description: 'Learn JavaScript from basics to advanced concepts. Covers ES6+, async programming, DOM manipulation, and modern JavaScript patterns.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 6000,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },
  {
    title: 'CSS Grid & Flexbox Mastery',
    slug: 'css-grid-flexbox-mastery',
    description: 'Master modern CSS layout techniques. Learn flexbox and CSS Grid in depth, create complex layouts, and responsive design patterns.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 4500,
    duration: '5 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1503944583220-79cd5b164b39?w=800',
    published: true
  },
  {
    title: 'Web Performance & Optimization',
    slug: 'web-performance-optimization',
    description: 'Optimize frontend performance. Learn image optimization, code splitting, lazy loading, caching strategies, and performance monitoring.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 7000,
    duration: '7 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-adf4e565db91?w=800',
    published: true
  },
  {
    title: 'Frontend Testing & Debugging',
    slug: 'frontend-testing-debugging',
    description: 'Write reliable frontend code. Learn unit testing, integration testing, debugging techniques, and testing best practices.',
    category: 'frontend',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '6 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    published: true
  },

  // React Courses (6)
  {
    title: 'React for Beginners',
    slug: 'react-for-beginners',
    description: 'Start your journey into modern web development with React. Learn components, hooks, state management, routing, and build real-world applications from scratch.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 6000,
    duration: '10 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },
  {
    title: 'React Hooks Deep Dive',
    slug: 'react-hooks-deep-dive',
    description: 'Master React Hooks. Learn useState, useEffect, useContext, useReducer, custom hooks, and optimize your React applications.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 5800,
    duration: '7 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },
  {
    title: 'State Management with Redux',
    slug: 'state-management-redux',
    description: 'Master Redux for complex state management. Learn actions, reducers, middleware, selectors, and building scalable React applications.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },
  {
    title: 'Next.js Full-Stack Development',
    slug: 'nextjs-full-stack-development',
    description: 'Build full-stack applications with Next.js. Learn API routes, server-side rendering, static generation, and modern React patterns.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 8500,
    duration: '10 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    published: true
  },
  {
    title: 'React Forms & Validation',
    slug: 'react-forms-validation',
    description: 'Build complex forms with React. Learn form libraries, validation techniques, error handling, and creating great form UX.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 5200,
    duration: '6 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },
  {
    title: 'React Testing Best Practices',
    slug: 'react-testing-best-practices',
    description: 'Write testable React code. Learn React Testing Library, Jest, unit testing, integration testing, and testing best practices.',
    category: 'react',
    instructor: 'LogicoreX Team',
    price: 6200,
    duration: '7 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    published: true
  },

  // Graphics Design Courses (6)
  {
    title: 'Graphics Design with Adobe Creative Suite',
    slug: 'graphics-design-adobe',
    description: 'Comprehensive course on Adobe Photoshop, Illustrator, and InDesign. Create stunning graphics, logos, posters, and marketing materials for print and digital media.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 8000,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },
  {
    title: 'Logo Design & Brand Identity',
    slug: 'logo-design-brand-identity',
    description: 'Create professional logos and brand identities. Learn design principles, vector design, color theory, and creating memorable brand visuals.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 5500,
    duration: '6 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },
  {
    title: 'Digital Illustration Techniques',
    slug: 'digital-illustration-techniques',
    description: 'Master digital illustration. Learn drawing, coloring, shading, and creating beautiful digital artwork using Adobe and Procreate.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },
  {
    title: 'Print Design Fundamentals',
    slug: 'print-design-fundamentals',
    description: 'Learn print design essentials. Covers layout, typography, color modes, bleeds, and preparing files for professional printing.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 4800,
    duration: '5 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },
  {
    title: 'Social Media Graphics Design',
    slug: 'social-media-graphics-design',
    description: 'Design eye-catching social media content. Learn dimensions, best practices, and creating graphics for Instagram, Facebook, and TikTok.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 4200,
    duration: '4 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },
  {
    title: 'Advanced Motion Graphics & Animation',
    slug: 'motion-graphics-animation',
    description: 'Create stunning animations and motion graphics. Learn After Effects, animation principles, transitions, and video design.',
    category: 'graphics',
    instructor: 'LogicoreX Team',
    price: 8500,
    duration: '9 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    published: true
  },

  // Full Stack Web Development Courses (6)
  {
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    description: 'Become a complete web developer. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deploy full-stack applications to production.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 12000,
    duration: '16 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  },
  {
    title: 'Backend Development with Node.js & Express',
    slug: 'backend-nodejs-express',
    description: 'Master backend development. Learn Node.js, Express, RESTful APIs, middleware, error handling, and server-side best practices.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 7500,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  },
  {
    title: 'Database Design with MongoDB',
    slug: 'database-design-mongodb',
    description: 'Design and optimize databases with MongoDB. Learn document structure, indexing, aggregation, and NoSQL best practices.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 6500,
    duration: '7 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  },
  {
    title: 'Authentication & Security',
    slug: 'authentication-security',
    description: 'Secure your applications. Learn JWT, OAuth, password hashing, HTTPS, CORS, SQL injection prevention, and security best practices.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 6800,
    duration: '7 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  },
  {
    title: 'API Development & REST',
    slug: 'api-development-rest',
    description: 'Build robust APIs. Learn RESTful design, request handling, response formatting, versioning, documentation, and API testing.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 7000,
    duration: '8 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  },
  {
    title: 'Deployment & DevOps Essentials',
    slug: 'deployment-devops-essentials',
    description: 'Deploy applications to production. Learn Git, Docker, CI/CD pipelines, cloud platforms (AWS, Heroku), and DevOps basics.',
    category: 'full-stack',
    instructor: 'LogicoreX Team',
    price: 8000,
    duration: '8 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published: true
  }
];

async function createCourses() {
  try {
    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert new courses
    const createdCourses = await Course.insertMany(courses);
    console.log(`✓ Created ${createdCourses.length} courses successfully!`);
    
    createdCourses.forEach(course => {
      console.log(`  - ${course.title} (${course.level}) - KES ${course.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error creating courses:', error);
    process.exit(1);
  }
}

createCourses();
