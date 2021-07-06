import React from 'react';
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { useState } from 'react';

const cardStyle = {
    style: {
        base: {
            color: "#000",
            fontFamily: 'Roboto, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#606060",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

const PaymentInfo = ({ handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [Success, setSuccess] = useState(null)
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement
        });
        console.log("[PaymentMethod]", paymentMethod);

        if (error) {
            setProcessing(true);
            setSuccess(null)
        } else {
            setSuccess(paymentMethod.id);
            handlePaymentSuccess(paymentMethod.id)
            setProcessing(false);
        }
    };

    const cardHandleChange = event => {
        const { error } = event;
        setError(error ? error.message : '');
        setProcessing(error ? error.message : '');
    }

    return (
        <div>
            {
                Success ? <PaymentSuccess /> : null
            }
            <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 bg-gradient-to-r from-sky-700 via-blue-900 to-sky-900" style={{ maxWidth: "600px" }}>
                <div class="overflow-visible flex justify-between items-center mt-2">
                    <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg">
                        <div className="flex">
                            <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                            <div className="ml-24" >
                                <svg

                                    xmlns="http://www.w3.org/2000/svg"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                                    <circle cx="14.5" cy="14.5" r="5.5" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-4 "> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> </div>
                        <div class="flex justify-between items-center mt-3"> <span class="text-xs text-gray-200">Md Rezaul Karim</span> <span class="text-xs text-gray-200">12/18</span> </div>
                    </div>
                    <div class="flex justify-center items-center flex-col">
                        <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" class="relative h-20 right-5" alt="img" />
                        <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>
                    </div>
                </div>

                <div class="mb-4 pt-2">
                    <h1 class="text-center text-black font-bold text-xl uppercase">Secure payment info</h1>
                </div>

                <div class="mb-3 flex -mx-2">
                    <div class="px-2">
                        <label for="type1" class="flex items-center cursor-pointer">
                            <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" alt="img" />
                        </label>
                    </div>
                    <div class="px-2">
                        <label for="type2" class="flex items-center cursor-pointer">
                            <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3" alt="img" />
                        </label>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="text-black">
                    <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
                        <div>
                            <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors card-element" placeholder="John Smith" type="text" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">Card number</label>

                        <div className='stripe-card'>
                            <CardNumberElement
                                className='card-element transition-colors focus:border-indigo-500'
                                options={cardStyle}
                                onChange={cardHandleChange}
                            />
                        </div>
                    </div>
                    <div class="mb-3 -mx-2 flex items-end">
                        <div class="px-2 w-1/2">
                            <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>


                            <div className='stripe-card'>
                                <CardExpiryElement
                                    className='card-element'
                                    options={cardStyle}
                                    onChange={cardHandleChange}
                                />
                            </div>

                        </div>

                        <div class="px-2 w-1/2">
                            <label class="font-bold text-sm mb-2 ml-1">CVC code</label>

                            <div className='stripe-card'>
                                <CardCvcElement
                                    className='card-element'
                                    options={cardStyle}
                                    onChange={cardHandleChange}
                                />
                            </div>
                        </div>

                    </div>
                    {
                        error ? <ErrorMsg error={error} /> : null
                    }
                    <div>
                        <button
                            disabled={processing}
                            type="submit" class="block w-full max-w-xs mx-auto hover:bg-yellow-700  text-white  px-3 py-3 font-semibold bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg">
                            {processing && <div className="flex text-blue-300 items-center justify-center">
                                <span class="animate-spin rounded-full  h-4 w-4 border-t-2 border-b-2 border-gray-100 mt-1 mr-2">
                                </span>
                                processing..
                            </div>}

                            <div className="flex items-center justify-center">
                                {
                                    Success && <>
                                        <svg
                                            class="w-6 h-6 mr-2 text-green-500 fill-current"
                                            viewBox="0 0 40 40"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                                            />
                                        </svg>
                                    </>
                                }

                                {!processing && <span>Pay</span>}
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default PaymentInfo;