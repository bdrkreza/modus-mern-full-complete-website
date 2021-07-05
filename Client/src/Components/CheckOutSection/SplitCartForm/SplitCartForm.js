import '../../../App.css'
import React, { useMemo } from "react";
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { useState } from 'react';



const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};


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

const SplitCartForm = () => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
    };

    const cardHandleChange = event => {
        const { error } = event;
        setError(error ? error.message : '');
    }

    return (
        <form onSubmit={handleSubmit}>



            <br />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default SplitCartForm;
