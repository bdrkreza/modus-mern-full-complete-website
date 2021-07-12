import React from 'react';
import imageUrl from '../../assets/images/history/square-1.jpg'
import image1 from '../../assets/images/history/blog-2.jpg'
import image2 from '../../assets/images/history/blog-3.jpg'
import image3 from '../../assets/images/history/blog-4.jpg'
import image4 from '../../assets/images/history/blog-5.jpg'
import image5 from '../../assets/images/history/offer.png'
const ProductCartSection = () => {
    return (
        <div>
            <body class="bg-gray-100 relative font-sans">

                <div class="container w-full mx-auto media-container">
                    <section class="py-8 px-24">
                        <div class="flex flex-wrap -mx-4">
                            <div class="hidden md:block md:w-1/2 px-10">
                                <div class="h-full w-full bg-no-repeat bg-cover  rounded shadow-md" style={{ backgroundImage: `url(${imageUrl})` }} >

                                </div>
                            </div>
                            <div class="md:w-1/2 h-auto px-10">
                                <div class="mb-8">
                                    <img class="rounded shadow-md" src={image1} alt="" />

                                </div>
                                <div>
                                    <img class="rounded shadow-md" src={image2} alt="" />

                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="py-8 px-24">
                        <div class="flex flex-wrap -mx-4">
                            <div class="md:w-1/2 px-10 mb-8 md:mb-0">
                                <img class="rounded shadow-md" src={image3} alt="" />

                            </div>
                            <div class="md:w-1/2 px-10 mb-8 md:mb-0">
                                <img class="rounded shadow-md" src={image4} alt="" />

                            </div>
                        </div>
                    </section>
                </div>


                <div class="w-full relative mb-20">
                    <div class="flex flex-wrap pt-10 px-4 pb-0">
                        <div class="md:w-1/2 w-full px-2 z-10 my-auto">
                            <h2 class="text-3xl leading-tight mb-8 relative">
                                Watch Thousands of Shows and  Anytime, Anywhere
                            </h2>
                            <div class="">
                                <button
                                    class="uppercase bg-gray-900 text-white px-4 py-4 shadow text-sm z-30 hover:shadow-lg"

                                >
                                    Start Your Free Trial
                                </button>
                            </div>
                        </div>
                        <div class="md:w-1/2 w-full px-2 flex justify-end z-10">
                            <img
                                class="h-auto"

                                alt="Watch Thousands of shows and movies anytime, anywhere"
                                src={image5}
                            />
                        </div>
                    </div>
                    <div class="block absolute w-full left-0 bg-white z-0">
                    </div>
                </div>

            </body>
        </div>
    );
};

export default ProductCartSection;