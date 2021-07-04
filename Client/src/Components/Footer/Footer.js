import React from 'react';
import logo from '../../assets/icons/logo-white.png'
import brandIcon from '../../assets/icons/methods.png'
const Footer = () => {
    return (
        <div>
            <div class="container items-center ">
                <footer class="text-gray-100 w-full transition duration-500 ease-in-out transform bg-gray-900 border rounded-lg ">
                    <div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
                        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                            <div class="pr-2 lg:pr-8 lg:px-6">
                                <a href="/" class=" focus:outline-none">
                                    <div class="inline-flex items-center">
                                        <img className="mb-8 w-72 text-white" src={logo} alt="" />
                                    </div>
                                </a>
                                <p class="mb-10 text-xs font-semibold tracking-widest text-white uppercase title-font ">No, no, George, look, it's just an act, right?</p>
                                <span class="inline-flex justify-start sm:mb-12">
                                    <a class="text-blue-500 hover:text-black">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-blue-500 hover:text-black">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                            </path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-blue-500 hover:text-black">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-3 text-blue-500 hover:text-black">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                            </path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h1 class="mb-8 text-x font-semibold tracking-widest text-yellow-400 uppercase title-font"> Product </h1>
                                <nav class="mb-10 space-y-4 list-none">
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Email Templates</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Web Templates</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Figma Files</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sketch Files</a>
                                    </li>
                                </nav>
                            </div>
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h1 class="mb-8 text-x font-semibold tracking-widest text-yellow-400 uppercase title-font"> Company </h1>
                                <nav class="mb-10 space-y-4 list-none">
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Home</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">About</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Carriers</a>
                                    </li>
                                    <li>
                                        <a class=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Pricing</a>
                                    </li>
                                </nav>
                            </div>
                            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                                <h1 class="mb-8 text-x font-semibold tracking-widest text-yellow-400 uppercase title-font"> Get updates </h1>
                                <nav class="mb-10">
                                    <div class="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
                                        <div class="relative w-40 mr-2 sm:w-auto">
                                            <label for="email" class="text-sm leading-7 text-yellow-400">Subscribe to mailing list & get latest Products arrivals, discounts & special offers!</label>
                                            <input type="text" id="email" name="email" placeholder="Email Address" class="w-full px-3 py-1 leading-8 text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                                        </div>
                                        <button class="px-6 py-2 font-medium text-white transition duration-500 ease-in-out transform bg-gray-600 border-blue-600 rounded-md ext-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-yellow-800">Subscribe</button>
                                    </div>
                                    <p class="mt-2 text-xs font-semibold tracking-widest text-white uppercase title-font md:text-left"> NO, NO, GEORGE, LOOK, IT'S JUST AN ACT, RIGHT? </p>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-8 mt-4 rounded-b-lg bg-gray-800">
                        <div class="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
                            <p class="mx-auto text-sm  text-white sm:text-left "> © 2021 </p>
                            <img className="w-1/5" src={brandIcon} alt="" />
                        </div>

                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;