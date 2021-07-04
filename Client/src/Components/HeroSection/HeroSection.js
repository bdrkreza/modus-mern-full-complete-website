import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import { sliderImg } from '../../assets/Data/sliderImg';
import HeroSectionCard from './HeroSectionCard';


SwiperCore.use([Autoplay, Pagination, Navigation]);
const HeroSection = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="swiper-slide"
            >
                {sliderImg.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <HeroSectionCard product={product} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default HeroSection;