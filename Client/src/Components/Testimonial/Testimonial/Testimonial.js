import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { testimonialData } from "../../../assets/Data/testimonialData";
import Subscribe from "../../Subscribe/Subscribe";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonial.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Testimonial = () => {
  return (
    <div>
      <div class="container  mb-10 flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
        <div class="lg:w-1/2">
          <Subscribe />
        </div>
        <div className="lg:w-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="swiper-slide_status"
          >
            {testimonialData.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard status={testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
