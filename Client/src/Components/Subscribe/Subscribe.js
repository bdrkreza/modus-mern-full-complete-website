import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import imageUrl from '../../assets/images/image/blog-1.jpg'
const Subscribe = () => {
    return (
        <>
            <div class="bg-cover bg-no-repeat bg-center border rounded py-40" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div class="grid justify-top">
                    <div className="ml-44">
                        <p>Get latest news & update from Modus</p>
                        <h1 class="text-2xl text-gray-800 font-medium mb-4 capitalize">
                            SUBSCRIBE EMAIL
                        </h1>
                    </div>
                    <div class="flex w-full justify-center items-end">
                        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full">

                            <input type="text" id="hero-field" name="hero-field" class=" relative w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder="Subscribe Email" />
                        </div>
                        <button class=" absolute inline-block ml-64 items-center text-black  bg-yellow-700 border-0 py-0 text-center px-3 focus:outline-none hover:bg-gray-500 rounded text-lg transition duration-500 ease-in-out transform ">
                            <FontAwesomeIcon size="2x" icon={faEnvelope} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Subscribe;