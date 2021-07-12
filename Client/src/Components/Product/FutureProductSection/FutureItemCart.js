import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureItemCart = ({ Item }) => {
    const { image, name, price } = Item;
    return (
        <>
            <div className="text-center">
                <div class="relative group rounded-2xl overflow-hidden inner single-blog">
                    <img src={image} class="w-full rounded-2xl" alt="featureImg" />
                    <div class="single-blog-img-overlay"></div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="/">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{name}</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                        <p class="text-xl text-primary font-semibold">${price}</p>
                        {/* <p class="text-sm text-gray-400 line-through">$55.00</p> */}
                    </div>
                    <div class="flex items-center">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <FontAwesomeIcon size="2x" icon={faStar} />
                            </span>
                            <span><FontAwesomeIcon size="2x" icon={faStar} /></span>
                            <span><FontAwesomeIcon size="2x" icon={faStar} /></span>
                            <span><FontAwesomeIcon size="2x" icon={faStar} /></span>
                            <span><FontAwesomeIcon size="2x" icon={faStar} /></span>
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureItemCart;