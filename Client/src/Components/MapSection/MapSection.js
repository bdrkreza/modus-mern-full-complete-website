import React from 'react';
import imageUrl from '../../assets/images/image/map3.png'
const MapSection = () => {
    return (
        <div className="h-72 mb-5 rounded-lg border-4 border-gray-800 border-opacity-25 " style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 ml-96 sm:max-w-sm sm:w-full">
                <div className="bg-white px-1 pt-1 pb-1 sm:p-3 sm:pb-2">
                    <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        </div>

                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Tejgaon-Farmgate, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <a
                        className="hover:text-yellow-400 text-white"
                        href="https://goo.gl/maps/wg1AiwWsheaNBorb6"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in google map
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MapSection;