import React from 'react';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import MapSection from '../../Components/MapSection/MapSection';


const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactSection />
            <MapSection />
            <Footer />
        </div>
    );
};

export default Contact;