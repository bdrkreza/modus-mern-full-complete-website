import React from 'react';
import { faSearch, faHeart, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/Action/Action';

const ProductView = ({ product, setViewModal }) => {
    const { image, id, name, price } = product;
    const dispatch = useDispatch();

    return (
        <div className="min-w-screen h-screen animated  fixed  flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-center bg-cover overflow-y-auto ">
            <div class="absolute h-screen bg-gray-800 opacity-60 inset-0 z-0">
                <FontAwesomeIcon onClick={() => setViewModal(false)} className="text-red-400 mt-16 cursor-pointer text-2xl" icon={faTimes} />
            </div>
            <div class="backgroundColor rounded shadow-lg border flex flex-col px-10 py-10 relative">

                <div class="bg-white shadow rounded overflow-hidden group z-50">

                    <div class="relative flex justify-center">
                        <img src={image} class="h-72 w-auto items-center" alt="product_img" />
                        <div
                            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <Link to={`/productView/${id}`}
                                class="text-white text-lg w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon size="2x" icon={faSearch} />
                            </Link>
                            <a href="/"
                                class="text-white text-lg w-12 h-12 rounded-full ml-3 bg-primary flex items-center justify-center hover:bg-gray-800 transition">
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
            </div>
        </div >
    );
};

export default ProductView;