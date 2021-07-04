import React from 'react';
import bannerImg from '../../assets/images/collection/sofa1.jpg'


const imgStyle = {
    backgroundImage: `url(${bannerImg})`
};
const Banner = () => {
    return (
        <div className="container">
            <div class="bg-cover border-4 bg-fixed bg-no-repeat bg-center py-20 mt-12" style={imgStyle}>
                <div class="ml-10">
                    <h1 class="text-6xl text-yellow-800 font-medium mb-4 capitalize">
                        best collection for <br /> home decoration
                    </h1>
                    <p className="text-gray-700 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa <br />
                        assumenda aliquid inventore nihil laboriosam odio
                    </p>
                    <div class="mt-12">
                        <a href="/"
                            class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-yellow-500 hover:text-red-800 transition duration-500 ease-in-out transform ">
                            Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;