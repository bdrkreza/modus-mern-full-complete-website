import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmButton from '../DeleteConfirmButton/DeleteConfirmButton';
const FutureProductCart = ({ data }) => {

    const [showModal, setShowModal] = useState(false);
    const { name, image, _id, email } = data;

    return (
        <>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img className="rounded-full" src={image} width="40" height="40" alt={name} />
                    </div>
                    {/* <div className="font-medium text-gray-400">{name}</div> */}
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{name}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-gray-300">admin</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <td>
                    <div class="flex item-center justify-center">
                        {/* View Button */}
                        <div class="w-5 mr-3 transform  hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        {/* edit button */}
                        <Link to={`/editProduct/${_id}`} class="w-5 mr-3 text-blue-800 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </Link>
                        {/* Delete Button */}
                        <button onClick={() => setShowModal(true)} class="w-6  transform text-red-800 hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                        {
                            showModal ? <DeleteConfirmButton id={_id} setShowModal={setShowModal} /> : null
                        }
                    </div>
                </td>
            </td>
        </>
    );
};

export default FutureProductCart;