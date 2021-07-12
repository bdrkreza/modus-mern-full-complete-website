import React from 'react';
import HeroSection from '../../Components/AboutSection/HeroSection';
import OurTeam from '../../Components/AboutSection/OurTeam';
import ProductCart from '../../Components/AboutSection/ProductCart';
import ProductCartSection from '../../Components/AboutSection/ProductCartSection';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
const About = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <OurTeam />
            <ProductCart />
            <ProductCartSection />
            <Footer />
        </>
    );
};

export default About;