import React from 'react';
import delivery from '../../assets/icons/delivery-van.svg'
import moneyBack from '../../assets/icons/money-back.svg'
import service from '../../assets/icons/service-hours.svg'
const FeatureSection = () => {
    return (
        <div>
            <div class="container mt-5 py-16">
                <div class="w-10/12 grid lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1 gap-6 mx-auto justify-center">

                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={delivery} class="w-12 h-12 object-contain" alt="delivery" />
                        <div>
                            <h4 class="font-medium capitalize text-lg">Free shopping</h4>
                            <p class="text-gray-500 text-sm">order over $200</p>
                        </div>
                    </div>

                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={moneyBack} class="w-12 h-12 object-contain" alt="money_back" />
                        <div>
                            <h4 class="font-medium capitalize text-lg">Money returns</h4>
                            <p class="text-gray-500 text-sm">30 Days money return</p>
                        </div>
                    </div>

                    <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <img src={service} class="w-12 h-12 object-contain" alt="service" />
                        <div>
                            <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                            <p class="text-gray-500 text-sm">Customer support</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureSection;