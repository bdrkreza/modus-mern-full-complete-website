
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
const ShoppingCard = ({ setShowCart }) => {
    const product = useSelector(state => {
        return state.users.cartItems
    })

    return (
        <div className="relative z-50  ">
            <div class="fixed right-0 top-0 max-w-sm w-full h-full px-6 py-4 transition duration-300 transform overflow-y-visible bg-gray-200 border-l-2 border-gray-300 ">

                <div onClick={() => setShowCart(false)} className="h-10 w-10 bg-gray-600 absolute right-80 mr-16 flex items-center shadow rounded-l justify-center cursor-pointer">
                    <svg class="h-5 w-5 text-red-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>

                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-medium text-gray-700">Your select product</h3>
                    <li class="font-sans block mt-1 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                        <button class="relative flex">
                            <svg class="flex-1 w-12 h-10 fill-current" viewbox="0 0 24 24">
                                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                            </svg>
                            <span class="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 mr-3 text-white font-mono text-sm  leading-tight text-center">{product.length}
                            </span>
                        </button>
                    </li>
                </div>

                <hr class="my-1" />
                <div className="flex flex-col overflow-auto w-full" style={{ height: "62vh" }}>
                    {
                        product?.map((data) => <CartItem key={data._id} product={data} />)
                    }
                </div>

                <div className="fixed
             bottom-0 px-2">
                    <div class="mb-5">
                        <div className="flex justify-between">
                            <p className="text-muted">Temporary Amount</p>
                            <p className="text-muted">${product.reduce((acc, { price, qty }) => {
                                let product_qty = parseInt(qty)
                                let item = parseFloat(price).toFixed(2)
                                let accumulator = parseFloat(acc).toFixed(2)
                                let res = parseFloat(item) * product_qty + parseFloat(accumulator)
                                return parseFloat(res).toFixed(2)
                            }, 0)}</p>
                        </div>
                        <div className="flex mb-3 justify-between">
                            <p className="text-muted">Shipping</p>
                            <p className="text-muted">Free</p>
                        </div>
                        <div className='flex justify-between'>
                            <strong>Total price + (VAT)</strong>
                            <strong>
                                ${product.length > 0 ? parseFloat(product.reduce((acc, { price, qty }) => {
                                    let product_qty = parseInt(qty)
                                    let item = parseFloat(price).toFixed(2)
                                    let accumulator = parseFloat(acc).toFixed(2)
                                    let res = parseFloat(item) * product_qty + parseFloat(accumulator)
                                    return parseFloat(res).toFixed(2)
                                }, 0)) + 2 : 0}
                            </strong>
                        </div>
                    </div>

                    <div class="bg-white rounded shadow border mb-3 position  p-3 px-4 w-80">
                        <Link to="/checkout" class="flex items-center justify-center mt-4 px-3 py-2 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Chechout</span>
                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};





export default ShoppingCard;