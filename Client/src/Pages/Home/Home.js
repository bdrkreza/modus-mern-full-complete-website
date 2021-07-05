import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BlogSection from '../../Components/BlogSection/BlogSection';
import Clients from '../../Components/Client/Clients/Clients';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header/Header/Header';
import Navbar from '../../Components/Header/Navbar/Navbar';
import FeatureProducts from '../../Components/Product/FeatureProduct/FeatureProduct';
import Product from '../../Components/Product/Product/Product';
import SingleProductView from '../../Components/Product/SingleProductView/SingleProductView';
import Testimonial from '../../Components/Testimonial/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Product />

            <Banner />
            <FeatureProducts />
            <BlogSection />
            <Clients />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;