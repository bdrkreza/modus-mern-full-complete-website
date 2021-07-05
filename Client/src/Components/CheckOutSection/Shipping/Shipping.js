import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Shipping = () => {

    const [shipping, setShippingData] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setShippingData(data)
    };


    const handlePaymentSuccess = paymentId => {

        const orderDetails = {
            shipment: shipping,
            orderTime: new Date(),
            paymentId
        };

        // fetch('https://quiet-atoll-99945.herokuapp.com/addOrder', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(orderDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data) {

        //             alert('your order Placed successfully')
        //         }
        //     })
    }

    return (
        <>
            <div class="leading-loose" style={{ display: shipping ? 'none' : 'block' }} >
                <form onSubmit={handleSubmit(onSubmit)} class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                    <p class="text-gray-800 font-medium">Customer information</p>
                    <div class="">
                        <label class="block text-sm text-gray-00" for="cus_name">Name</label>
                        <input  {...register("name", { required: true })} class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Your Name" aria-label="Name" />

                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div class="mt-2">
                        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input  {...register("email", { required: true })} class="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" type="email" placeholder="Your Email" aria-label="Email" />

                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div class="mt-2">
                        <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
                        <input  {...register("address", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Street" aria-label="Email" />

                        {errors.address && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div class="mt-2">
                        <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                        <input  {...register("city", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="City" aria-label="Email" />

                        {errors.city && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div class="inline-block mt-2 w-1/2 pr-1">
                        <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                        <input  {...register("country", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Country" aria-label="Email" />

                        {errors.country && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                        <input  {...register("zip", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Zip" aria-label="Email" />

                        {errors.zip && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div class="mt-4 flex justify-center mt-10">
                        <button class="px-4 py-1 w-36 h-12 text-white font-semibold  tracking-wider rounded bg-gradient-to-r from-blue-700 via-blue-900 to-gray-900" type="submit">submit</button>
                    </div>
                </form>
            </div>
            <div style={{ display: shipping ? 'block' : 'none' }} className="col-md-6">
                <PaymentProcess handlePaymentSuccess={handlePaymentSuccess} shippingData={shipping} ></PaymentProcess>
            </div>
        </>
    );
};

export default Shipping;