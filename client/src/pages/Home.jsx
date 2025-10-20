import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import BlogSection from '../components/Blog/BlogSection';
import LandingSlideshow from '../components/Home/LandingSlideshow';
import ServicesSection from '../components/Home/ServicesSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <LandingSlideshow />
            <BlogSection />
        </div>
    );
}

export default Home;
