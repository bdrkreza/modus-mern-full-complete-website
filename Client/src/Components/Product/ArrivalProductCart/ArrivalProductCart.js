import React from 'react';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/Action/Action';
import { useState } from 'react';
import SingleProductView from '../SingleProductView/SingleProductView';



const ArrivalProductCart = ({ product }) => {
    const { price, name, image, _id } = product;
    const [singleProductView, setProductView] = useState(false);
    const dispatch = useDispatch();
    return (
        <>
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative flex justify-center">
                    <img src={image} class="h-72 w-auto items-center" alt="product_img" />
                    <div
                        class="absolute  bg-black bg-opacity-40 right-0 items-center justify-center flex-col  gap-2 opacity-0 group-hover:opacity-100 transition  ease-in duration-700  transition">
                        <div
                            class="text-white text-lg w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <button onClick={() => setProductView(true)}>
                                <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                        {
                            singleProductView ? <SingleProductView id={_id} data={product} setProductView={setProductView} /> : null
                        }

                        <a href="/"
                            class="text-white text-lg w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <i class="far fa-heart"></i>
                            <FontAwesomeIcon size="2x" icon={faHeart} />
                        </a>
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="/">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{name}</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2 font-roboto">
                        <p class="text-xl text-primary font-semibold">${price}</p>
                        <p class="text-sm text-gray-400 line-through">$55.00</p>
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
                <button onClick={() => dispatch(addToCart(product))} class="block w-full py-1 text-center text-white bg-yellow-700 border border-primary rounded-b hover:bg-yellow-200 hover:text-red-800 transition duration-500  ease-in-out transform ">
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ArrivalProductCart;