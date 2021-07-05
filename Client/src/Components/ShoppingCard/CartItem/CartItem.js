import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { removeFromCart, addItemQty, removeItemQty } from '../../../Redux/Action/Action';

const CartItem = ({ product }) => {
    const { price, name, image, qty } = product;
    const dispatch = useDispatch();
    return (
        <>
            <div class="flex justify-between mt-6">
                <div class="flex">
                    <img class="h-20 w-20 object-cover rounded" src={image} alt="product_image" />
                    <div class="mx-3">
                        <h3 class="text-sm text-gray-600">{name}</h3>
                        <div class="flex items-center mt-2">


                            <button disabled={qty === 1} onClick={() => dispatch(removeItemQty(product))}
                                class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </button>

                            <span class="text-gray-700 mx-2">{qty}</span>

                            <button onClick={() => dispatch(addItemQty(product))} class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>


                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span class="text-gray-600">${price}</span>
                    <FontAwesomeIcon onClick={() => dispatch(removeFromCart(product))} className="ml-2 mt-2 text-red-800 cursor-pointer" icon={faTrashAlt} />
                </div>
            </div>
        </ >
    );
};

export default CartItem;