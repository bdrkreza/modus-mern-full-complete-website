import React from 'react';
import { products } from '../../assets/Data/productData';
import imgs from '../../assets/images/slider/banner-bg.jpg'

const HeroSectionCard = ({ product }) => {
    const { img } = product;
    return (
        <>
            <div class="bg-cover bg-no-repeat bg-center overflow-visible  py-28" style={{ backgroundImage: `url(${img})` }}>
                <div class="container ml-40">
                    <h1 class="text-6xl text-yellow-500 font-medium mb-4 capitalize">
                        Special <br />Furniture Collection
                    </h1>
                    <p className="text-white text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa <br />
                        assumenda aliquid inventore nihil laboriosam odio
                    </p>
                    <div class="mt-12">
                        <a href="#"
                            class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-yellow-500 hover:text-red-800 transition duration-500 ease-in-out transform ">
                            Shop Now</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSectionCard;