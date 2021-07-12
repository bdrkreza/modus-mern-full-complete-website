import React from 'react';
import imageUrl from '../../assets/images/slider/slider5.jpg'
const HeroSection = () => {
    return (
        <>
            <div class="py-40  bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div class="container m-auto text-center px-6 opacity-100">
                    <h2 class="text-4xl font-bold mb-2 text-white">Echo Base...I've got something!</h2>
                    <h3 class="text-2xl mb-8 text-gray-200">Not much, but it could be a life form. This is Rouge Two. this is Rouge Two. Captain Solo, so you copy?</h3>
                    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">Commander Skywalker, do you copy?</button>
                </div>
            </div>
        </>
    );
};

export default HeroSection;