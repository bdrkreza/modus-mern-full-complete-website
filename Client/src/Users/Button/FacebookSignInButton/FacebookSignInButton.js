import React from 'react';

const FacebookSignInButton = () => {
    return (
        <div>
            <button
                class="mr-3 text-gray-900 bg-transparent border border-solid border-purple-500 hover:bg-purple-100 hover:text-black active:bg-purple-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex"
                type="button">
                <svg class="mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216">
                    <g fill="#3b5998">
                        <path fill="" d="
                                                M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
                                                11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
                                                11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
                                                15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
                                                11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z">
                        </path>
                    </g>
                </svg>
                Sign in with Facebook
            </button>
        </div>
    );
};

export default FacebookSignInButton;