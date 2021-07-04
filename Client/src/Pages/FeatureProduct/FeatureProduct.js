import React from 'react';
import FeatureProducts from '../../Components/Product/FeatureProduct/FeatureProduct';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
const FeatureProduct = () => {
    return (
        <div>
            <Navbar />
            <FeatureProducts />
            <Footer />
        </div>
    );
};

export default FeatureProduct;