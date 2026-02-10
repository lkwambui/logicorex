import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import BlogSection from "../components/Blog/BlogSection";
import LandingSlideshow from "../components/Home/LandingSlideshow";
import ServicesSection from "../components/Home/ServicesSection";
import TrustBar from "../components/Home/TrustBar";
import StatsSection from "../components/Home/StatsSection";
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/Home/CTASection";

function Home() {
    useEffect(() => {
        document.title = "LogicoreX | Digital Solutions & Creative Studio";
        const description =
            "LogicoreX delivers web development, UI/UX design, mobile apps, and branding to help teams build, launch, and scale.";
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", description);
    }, []);

    return (
        <div>
            <HeroSection />
            <TrustBar />
            <StatsSection />
            <ServicesSection />
            <LandingSlideshow />
            <CaseStudiesSection />
            <TestimonialsSection />
            <CTASection />
            <BlogSection />
        </div>
    );
}

export default Home;
