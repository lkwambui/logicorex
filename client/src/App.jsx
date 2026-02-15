import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetail from './components/Blog/BlogDetail';
import Home from './pages/Home'; 
import ContactPage from "./pages/ContactPage";
import BlogPage from './pages/BlogPage';
import AboutUs from './pages/AboutUs';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRegister from './pages/AdminRegister';
import CreateBlogPage from './pages/CreateBlogPage';
import CreateCoursePage from './pages/CreateCoursePage';
import PaymentPage from './pages/PaymentPage';
import AcademyPage from './pages/AcademyPage';
import CourseDetailPage from './pages/CourseDetailPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
// import ProtectedRoute from './components/ProtectedRoute';
import Products from './pages/Products';
// Services
import Web from "./pages/services/Web";
import Uiux from "./pages/services/Uiux";
import Graphics from "./pages/services/Graphics";
import Mobile from "./pages/services/Mobile";
import Consultancy from "./pages/services/Consultancy";
import Portfolio from './pages/Portfolio';
import ToastProvider from './components/ToastProvider';
import ThemeProvider from './components/ThemeProvider';

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const candidates = document.querySelectorAll(
      'section, article, [class*="shadow"], [class*="card"], [data-reveal]'
    );

    candidates.forEach((el) => {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', '');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname, location.search]);

  return null;
}


function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteEffects />
        <Navbar />
        <ToastProvider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/academy/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/create-blog" element={<CreateBlogPage />} />
          <Route path="/admin/create-course" element={<CreateCoursePage />} />
          {/* Services */}
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/uiux" element={<Uiux />} />
          <Route path="/services/graphics" element={<Graphics />} />
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          {/* Products (Public) */}
          <Route path="/products" element={<Products />} />
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
