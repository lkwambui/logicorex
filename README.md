# LogicoreX Platform

A full-stack web platform for LogicoreX, featuring a learning academy, blog, consultation services, and payment integration.

## Features

- 🎓 **Academy System** - Course management with categories and enrollments
- 📝 **Blog Platform** - Publishing and content management
- 💳 **Payment Integration** - M-Pesa and Bank Transfer support
- 🔐 **Dual Authentication** - Separate systems for users and admins
- 📊 **Admin Dashboard** - Manage courses, blogs, and consultations
- 👤 **User Profiles** - Track enrollments and account details

## Tech Stack

**Frontend:**
- React 18 + Vite
- TailwindCSS for styling
- React Router v6
- Lucide React icons

**Backend:**
- Node.js + Express 5
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd logicorex
```

2. **Set up the backend**
```bash
cd server
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env and update values (especially JWT_SECRET)
```

4. **Seed admin account** (optional but recommended)
```bash
npm run seed:admin
# Default credentials:
# Email: admin@logicorex.com
# Password: admin123
```

5. **Start the backend server**
```bash
npm run dev
# Server runs on http://localhost:5000
```

6. **Set up the frontend** (new terminal)
```bash
cd client
npm install
cp .env.example .env
npm run dev
# Client runs on http://localhost:5173
```

### Seed Courses (Optional)

If you want sample courses in your database:
```bash
cd server
node create-courses.js
```

## Default Credentials

**Admin Account** (after running `npm run seed:admin`):
- Email: `admin@logicorex.com`
- Password: `admin123`
- ⚠️ **Change this password immediately after first login**

**User Account**:
- Register at `/signup` with your own credentials

## Project Structure

```
logicorex/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images and static files
│   │   └── App.jsx       # Main app component
│   └── package.json
│
└── server/                # Node.js backend
    ├── models/           # MongoDB schemas
    ├── routes/           # API endpoints
    ├── config/           # Configuration files
    ├── middleware/       # Auth middleware
    ├── seed-admin.js     # Admin seed script
    └── index.js          # Server entry point
```

## Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed:admin` - Create default admin account

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

### Authentication
- `POST /api/auth/register` - Admin registration
- `POST /api/auth/login` - Admin login
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile (protected)

### Courses
- `GET /api/courses` - List courses (supports ?category=web-design)
- `GET /api/courses/:slug` - Get course details
- `POST /api/courses` - Create course (admin only)

### Blogs
- `GET /api/blogs` - List blogs
- `GET /api/blogs/:slug` - Get blog details
- `POST /api/blogs` - Create blog (admin only)

### Enrollments
- `GET /api/enrollments` - User enrollments (protected)
- `POST /api/enrollments` - Enroll in course (protected)

### Consultations
- `GET /api/consultations` - List consultation requests (admin)
- `POST /api/consultations` - Submit consultation request

### Payments
- `POST /api/payments` - Process payment
- `GET /api/payments/:id` - Get payment details

## Environment Variables

### Server (.env)
```env
MONGO_URI=mongodb://localhost:27017/logicorex
JWT_SECRET=your_super_secret_jwt_key_change_this
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs
- ✅ CORS configuration
- ✅ Input validation on all forms
- ✅ Protected routes for authenticated users
- ✅ Separate admin and user authentication
- ✅ Environment variable validation on startup

## Course Categories

- Web Design & Development
- UI/UX Design
- Frontend Web Development
- React for Beginners
- Graphics Design
- Full Stack Web Development

## Troubleshooting

**"Invalid credentials" error:**
- Make sure you've created an admin account using `npm run seed:admin`
- Or register a new admin at `/admin/register`

**Can't connect to MongoDB:**
- Ensure MongoDB is running locally: `mongod`
- Or update MONGO_URI in .env with your MongoDB connection string

**Port already in use:**
- Change PORT in server/.env (default: 5000)
- Change port in client .env VITE_API_URL accordingly

**CORS errors:**
- Ensure CLIENT_URL in server/.env matches your frontend URL

## License

MIT

## Support

For issues or questions, contact support through the Contact page or open an issue.
