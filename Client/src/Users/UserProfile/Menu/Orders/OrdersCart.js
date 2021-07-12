import { faClone, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import ModelViewCart from '../ProductView/ModelViewCart';

const OrdersCart = ({ product }) => {
    const { totalPrice, userEmail } = product;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <tr class="bg-gradient-to-r from-gray-700 via-blue-500 to-gray-700">
                <td class="p-3">
                    <div class="flex align-items-center">
                        <img class="rounded-full h-12 w-12   object-cover" src={product.products[0].image} alt="unsplashImage" />
                        <div class="ml-3">
                            <div class="">{product.products[0].name}</div>
                            <div class="text-gray-500">{userEmail}</div>
                        </div>
                    </div>
                </td>
                <td class="p-3">
                    {product.products.length}
                </td>
                <td class="p-3 font-bold text-white">
                    ${totalPrice}
                </td>
                <td class="p-3">
                    <span class="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
                </td>
                <td class="p-3">
                    <button onClick={() => setShowModal(true)} class="text-gray-400 hover:text-gray-100 mr-2">
                        <FontAwesomeIcon size="2x" icon={faEye} />
                    </button>
                </td>
                {showModal ? (
                    <>
                        <ModelViewCart setShowModal={setShowModal} product={product} />
                    </>
                ) : null}
            </tr>
        </>
    );
};

export default OrdersCart;