import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetail from './components/Blog/BlogDetail';
import Home from './pages/Home'; 
import ContactPage from "./pages/ContactPage";
import BlogPage from './pages/BlogPage';
import AboutUs from './pages/AboutUs';
// Services
import Web from "./pages/services/Web";
import Uiux from "./pages/services/Uiux";
import Graphics from "./pages/services/Graphics";
import Mobile from "./pages/services/Mobile";
import Consultancy from "./pages/services/Consultancy";
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Services */}
        <Route path="/services/web" element={<Web />} />
        <Route path="/services/uiux" element={<Uiux />} />
        <Route path="/services/graphics" element={<Graphics />} />
        <Route path="/services/mobile" element={<Mobile />} />
        <Route path="/services/consultancy" element={<Consultancy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
