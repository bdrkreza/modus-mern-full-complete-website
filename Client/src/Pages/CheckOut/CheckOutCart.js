import React from 'react';

import { useSelector } from 'react-redux';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Shipping from '../../Components/CheckOutSection/Shipping/Shipping';
import CheckProduct from '../../Components/CheckOutSection/CheckProduct/CheckProduct';
import TotalAmountInfo from '../../Components/CheckOutSection/TotalAmoutInfo/TotalAmoutInfo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const CheckOutCart = () => {
    const product = useSelector(state => {
        return state.users.cartItems
    })

    return (
        <>
            <Navbar />
            <div class="h-screen h-80 bg-gray-00">
                <div class="py-12">
                    <div class="max-w-md mx-auto bg-gray-200 shadow-lg rounded-lg md:max-w-7xl">
                        <div class="md:flex ">
                            <div class="w-full  px-3 py-2">
                                <div class="md:grid md:grid-cols-2 gap-2 ">
                                    <div class="col-span-1 p-1">
                                        <h1 class="text-xl font-medium mb-2">Shopping Cart</h1>

                                        <div className="flex flex-col overflow-auto w-full" style={{ height: "62vh" }}>
                                            {
                                                product?.map((data) => <CheckProduct product={data} />)
                                            }
                                        </div>

                                        <hr class="border-0 bg-gray-300 h-px" />
                                        <TotalAmountInfo product={product} />

                                        <div class="justify-center mt-3 md:flex">
                                            <form action="" method="POST">
                                                <div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                                                    <input type="coupon" name="code" id="coupon" placeholder="Apply coupon" value="90off"
                                                        class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />
                                                    <button type="submit" class="text-sm flex items-center px-3 py-1 text-white bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                                                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>
                                                        <span class="font-medium">Apply coupon</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <Link to="/home" class="flex justify-between items-center mt-1 pt-6 border-t">
                                            <div class="flex items-center">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                                <span class="text-md font-medium text-blue-500 ml-2">Continue Shopping</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="mt-8">
                                        <Shipping />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutCart;