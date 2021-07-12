import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrdersCart = ({ product }) => {
    const { userName, userEmail, totalPrice, date, userImage, paymentId } = product;
    return (
        <>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        {
                            product.userImage ? <img className="h-10 w-10 rounded-full" src={userImage} alt="" /> : <FontAwesomeIcon size="2x" icon={faUser} />
                        }
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium">{userName}</div>
                        <div className="text-sm text-gray-500">{userEmail}</div>
                    </div>
                </div>
            </td>

            {/* product */}
            <td class="px-5 py-5 border-b border-gray-200  text-sm">
                <div class="flex">
                    <div class="ml-3">
                        <p class="whitespace-no-wrap">
                            {product.products.length}
                        </p>
                    </div>
                </div>
            </td>

            {/* amount */}
            <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p class="whitespace-no-wrap">${totalPrice}</p>
                <p class="text-gray-200 whitespace-no-wrap">USD</p>
            </td>

            {/* amount */}
            <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p class="text-gray-200 whitespace-no-wrap">PaymentID</p>
                <p class="whitespace-no-wrap">{paymentId}</p>
            </td>

            <td class="px-5 py-5 border-b border-gray-200  text-sm">
                <p class="whitespace-no-wrap">{date}</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>

            {/* action */}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex item-center justify-center">
                    <div class="w-6 mr-3 text-green-200 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <div class="w-6  transform  text-red-400 hover:text-purple-500 hover:scale-110 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </div>
            </td>

        </>
    );
};

export default OrdersCart;