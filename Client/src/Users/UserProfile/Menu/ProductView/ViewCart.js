import React from 'react';



const ViewCart = ({ data }) => {
    const { name, image, price } = data;
    console.log(data);
    return (
        <>
            <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                <div class="relative pt-10 px-10 flex items-center justify-center">
                    <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-gradient-to-r from-blue-100 via-sky-100"></div>
                    < img class="relative w-40" src={image} alt="" />
                </div>
                <div class="relative text-black px-6 pb-6 mt-6">
                    <span class="block opacity-75 -mb-1">{name}</span>
                    <div class="flex justify-between">
                        <span class="block font-semibold text-xl">price</span>
                        <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${price}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewCart;