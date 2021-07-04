import React from 'react';
import './clients.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import { client } from '../../../assets/Data/ClientData';
import ClientCard from '../ClientCard/ClientCard';

SwiperCore.use([Navigation]);

const Clients = () => {
    return (
        <div>
            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                navigation
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 4,
                    },
                }} className="bg-yellow-200"
            >
                {client.map((client, index) => {
                    if (index >= 5) return;
                    return (
                        <div >
                            <SwiperSlide key={client.id}>
                                <ClientCard data={client} />
                            </SwiperSlide>
                        </div>

                    );
                })}
            </Swiper>
        </div>
    );
};

export default Clients;