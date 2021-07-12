import React from 'react';
import image1 from '../../assets/images/history/blog-2.jpg'
import image2 from '../../assets/images/history/blog-3.jpg'
import image3 from '../../assets/images/history/blog-4.jpg'

const ProductCart = () => {
    return (
        <div>
            <section class="container mx-auto px-24 p-10 ">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-8 uppercase">design of Interiors</h2>
                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2 pr-10">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">This is It's began</h4>
                        <p class="text-gray-600 mb-8">Their primary target will be the power generators. Prepare to open the shield. Sir, Rebel ships are coming into our sector. Good. Our first catch of the day. Stand by, ion control....Fire! The first transport is away.</p>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img class="rounded-lg" src={image1} alt="Vortex" />
                    </div>
                </div>
                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2">
                        <img class="rounded-lg" src={image2} alt="use the force" />
                    </div>
                    <div class="w-full md:w-1/2 pl-10">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">Love at the first sight</h4>
                        <p class="text-gray-600 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
                    </div>
                </div>
                <div class="flex items-center flex-wrap mb-20">
                    <div class="w-full md:w-1/2 pr-10">
                        <h4 class="text-3xl text-gray-800 font-bold mb-3">there are designers out there</h4>
                        <p class="text-gray-600 mb-8">There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
                    </div>
                    <div class="w-full md:w-1/2">
                        <img class="rounded-lg" src={image3} alt="Syncing" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCart;