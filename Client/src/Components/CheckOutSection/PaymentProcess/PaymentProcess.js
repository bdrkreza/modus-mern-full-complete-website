import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentInfo from '../Payment/PaymentInfo';
import SplitCartForm from '../SplitCartForm/SplitCartForm';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_51IeCtgImkxV9DawVFBMNpm2dLoC7s8dMfvev1EJZTN85joEUoXua99KMbY0cOlcljaQGyiPTfkhEVomIkPZChmfQ001GN9Y5Ei');

const PaymentProcess = ({ handlePaymentSuccess, shipping }) => {
    const cartItems = useSelector(state => {
        return state.users.cartItems
    })
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentInfo handlePaymentSuccess={handlePaymentSuccess} />
            </Elements>
        </div>
    );
};

export default PaymentProcess;