import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userOrdersPost } from '../../../Redux/userReducer/action';
import { useAuth } from '../../../Users/lib/Auth';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Shipping = () => {
    const { user } = useAuth();
    const [shipping, setShippingData] = useState(null);
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setShippingData(data)
    };

    const handlePaymentSuccess = (paymentId) => {

        const orderDetails = {
            shipment: shipping,
            price: totalPrice,
            image: user.photoUrl,
            cartItems: product,
            paymentId
        };
        dispatch(userOrdersPost(orderDetails));
    }


    const product = useSelector((state) => {
        return state.users.cartItems
    })

    let total = product.reduce(function (acc, curr) {
        return acc + curr.qty * curr.price;
    }, 0);

    const tax = (total / 10).toFixed(2);
    const totalPrice = (total + Number(tax));


    return (
        <>
            <div class="px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 bg-gradient-to-r from-gray-700 via-blue-300 to-gray-700 ">
                <div class="leading-loose" style={{ display: shipping ? 'none' : 'block' }} >
                    <form onSubmit={handleSubmit(onSubmit)} class="max-w-xl m-4 p-10 bg-gradient-to-r from-gray-700 via-blue-300 to-gray-700 rounded shadow-xl text-black">
                        <p class="font-medium">Customer information</p>
                        <div>
                            <label class="block text-md">Name</label>
                            <input  {...register("name", { required: true })} class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Enter Your Name" aria-label="Name" defaultValue={user.name}
                            />

                            {errors.name && <span class="text-red-500">This field is required</span>}
                        </div>
                        <div class="mt-1">
                            <label class="block text-md">Email</label>
                            <input  {...register("email", { required: true })} class="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded" type="email" placeholder="Enter Your Email" aria-label="Email" defaultValue={user.email} />

                            {errors.email && <span class="text-red-500">This field is required</span>}
                        </div>
                        <div class="mt-1">
                            <label class=" block text-md">Address</label>
                            <input  {...register("address", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Street" aria-label="Email" />

                            {errors.address && <span class="text-red-500">This field is required</span>}
                        </div>
                        <div class="mt-2">
                            <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
                            <input  {...register("city", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="City" aria-label="Email" />

                            {errors.city && <span class="text-red-500">This field is required</span>}
                        </div>

                        <div class="inline-block mt-2 w-1/2 pr-1">
                            <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                            <input  {...register("country", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Country" aria-label="Email" />

                            {errors.country && <span class="text-red-500">This field is required</span>}
                        </div>
                        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label class="hidden block text-sm text-gray-600">
                                Zip
                            </label>
                            <input  {...register("zip", { required: true })} class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Zip" aria-label="Email" />

                            {errors.zip && <span class="text-red-500">This field is required</span>}
                        </div>
                        <div class="mt-4 flex justify-center mt-10">
                            <button class="px-4 py-1 w-36 h-12 text-white font-semibold  tracking-wider rounded bg-gradient-to-r from-blue-700 via-blue-900 to-gray-900" type="submit">submit</button>
                        </div>
                    </form>
                </div>

                <div style={{ display: shipping ? 'block' : 'none' }} class="col-md-6">
                    <PaymentProcess handlePaymentSuccess={handlePaymentSuccess} shippingData={shipping} />
                </div>
            </div>
        </>
    );
};

export default Shipping;