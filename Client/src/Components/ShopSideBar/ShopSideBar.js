import React from 'react';
import Product from '../Product/Product/Product';

const ShopSideBar = () => {
    return (
        <>
            <div class="container px-10 flex-col mb-10 w-full md:flex md:flex-row md:min-h-screen bg-gray-100  ">
                <div class="flex flex-col flex-shrink-0 w-full bg-white shadow-xl text-gray-700 bg-white md:w-64 ">
                    <div class="col-span-1 bg-gray-100 px-4 pb-6 shadow rounded overflow-hidden ">
                        <div class="divide-y divide-gray-200 space-y-5">

                            <div>
                                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">categories</h3>
                                <div class="space-y-2">

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Bedroom"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Bedroom" class="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                        <div class="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Sofa"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Sofa" class="text-gray-600 ml-3 cursor-pointer">Sofa</label>
                                        <div class="ml-auto text-gray-600 text-sm">(05)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Office"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Office" class="text-gray-600 ml-3 cursor-pointer">Office</label>
                                        <div class="ml-auto text-gray-600 text-sm">(09)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Outdoor"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Outdoor" class="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
                                        <div class="ml-auto text-gray-600 text-sm">(19)</div>
                                    </div>

                                </div>
                            </div>

                            <div class="pt-4">
                                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                                <div class="space-y-2">

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Dominik"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Dominik" class="text-gray-600 ml-3 cursor-pointer">Dominik</label>
                                        <div class="ml-auto text-gray-600 text-sm">(15)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Karl"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Karl" class="text-gray-600 ml-3 cursor-pointer">Karl</label>
                                        <div class="ml-auto text-gray-600 text-sm">(18)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Maxing"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Maxing" class="text-gray-600 ml-3 cursor-pointer">Maxing</label>
                                        <div class="ml-auto text-gray-600 text-sm">(09)</div>
                                    </div>

                                    <div class="flex items-center">
                                        <input type="checkbox" id="Ernest"
                                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Ernest</label>
                                        <div class="ml-auto text-gray-600 text-sm">(12)</div>
                                    </div>

                                </div>
                            </div>

                            <div class="pt-4">
                                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                                <div class="mt-4 flex items-center">
                                    <input type="text" class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />
                                    <span class="mx-3 text-gray-500">-</span>
                                    <input type="text" class="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" placeholder="max" />
                                </div>
                            </div>

                            <div class="pt-4">
                                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                                <div class="flex items-center gap-2">

                                    <div class="size-selector">
                                        <input type="radio" name="size" class="hidden" id="size-xs" />
                                        <label for="size-xs" class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XS
                                        </label>
                                    </div>

                                    <div class="size-selector">
                                        <input type="radio" name="size" class="hidden" id="size-s" />
                                        <label for="size-s"
                                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            S
                                        </label>
                                    </div>

                                    <div class="size-selector">
                                        <input type="radio" name="size" class="hidden" id="size-m" checked />
                                        <label for="size-m"
                                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            M
                                        </label>
                                    </div>

                                    <div class="size-selector">
                                        <input type="radio" name="size" class="hidden" id="size-l" />
                                        <label for="size-l"
                                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            L
                                        </label>
                                    </div>

                                    <div class="size-selector">
                                        <input type="radio" name="size" class="hidden" id="size-xl" />
                                        <label for="size-xl"
                                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                            XL
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="pt-4">
                                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                                <div class="flex items-center gap-2">

                                    <div class="color-selector">
                                        <input type="radio" name="color" class="hidden" id="color-red" />
                                        <label for="color-red" class="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block" style={{ backgroundColor: "#fc3d57" }}>
                                        </label>
                                    </div>

                                    <div class="color-selector">
                                        <input type="radio" name="color" class="hidden" id="color-white" />
                                        <label for="color-white" style={{ backgroundColor: "#fff" }}
                                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                        </label>
                                    </div>

                                    <div class="color-selector">
                                        <input type="radio" name="color" class="hidden" id="color-black" />
                                        <label for="color-black" style={{ backgroundColor: "#000" }}
                                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                        </label>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Product />
            </div>
        </>
    );
};

export default ShopSideBar;