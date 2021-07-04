import React from 'react';
import { arrivalProduct } from '../../../assets/Data/productData';

const LoadingSpinner = () => {

    return (
        <div className="grid grid-cols-3 gap-6 px-28">
            {
                arrivalProduct.map(() =>
                    <>
                        {/* <!-- card --> */}
                        <div class="w-90 bg-white rounded shadow">
                            {/* <!-- image --> */}
                            <div class="h-72 bg-gray-400 rounded-tr rounded-tl animate-pulse"></div>

                            <div class="p-5">
                                {/* <!-- content --> */}
                                <div class="grid grid-cols-4 gap-1">
                                    <div class="col-span-3 h-4 rounded-sm bg-gray-300 animate-pulse"></div>
                                    <div class="col-span-2 w-16 h-4 rounded-sm bg-gray-300 animate-pulse"></div>
                                    <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div class="col-span-2 w-24 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                            {/* <!-- button --> */}
                            <div class="h-8 mt-3 rounded-sm bg-yellow-100 animate-pulse"></div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default LoadingSpinner;