import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userReviewPost } from '../../../../Redux/userReducer/action';
import { useAuth } from '../../../lib/Auth';
import Rating, { StarRating } from './Rating';
import ReviewErrors from './ReviewErrors';
import ReviewSuccess from './ReviewSuccess';


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const feedback = {
            rating: rating,
            name: data.name,
            email: data.email,
            massage: data.massage,
            image: user.photoUrl
        };
        console.log(feedback);
        dispatch(userReviewPost(feedback));
        reset();
    };

    const dispatch = useDispatch()
    const [rating, setRating] = useState(0);
    const [hoveRating, setHoverRating] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = (value) => {
        setRating(value)
    }

    const handleMouseOver = (HoverRating) => {
        setHoverRating(HoverRating)
    };

    const handleMouseLeave = () => {
        setHoverRating(undefined)
    }

    const success = useSelector((state) => {
        return state.orders.success
    });

    const loading = useSelector((state) => {
        return state.orders.loading
    });
    const error = useSelector((state) => {
        return state.orders.errors
    })

    return (
        <>
            {
                error ? <ReviewErrors error={error} /> : null
            }
            {
                success ? <ReviewSuccess /> : null
            }

            <StarRating
                count={5}
                size={60}
                value={3}
                activeColor={'#FFBF00'}
                inactiveColor={'#ddd'}
            />
            <section>
                <div class="bg-gradient-to-r from-gray-700 via-blue-300 to-gray-800 text-white py-20 mt-3">
                    <div class="">
                        <div class="flex flex-col w-full lg:w-1/1 justify-center">
                            <div class="container w-full">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div
                                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gradient-to-r from-gray-700 via-blue-300 to-gray-800">
                                            <div class="flex-auto p-5 lg:p-10">
                                                <h4 class="text-2xl mb-4 text-black font-semibold">Add a new review!</h4>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div >
                                                        {stars.map((star, index) => {
                                                            return (
                                                                <FontAwesomeIcon icon={faStar}
                                                                    key={index}
                                                                    size='2x'
                                                                    onClick={() => handleClick(index + 1)}
                                                                    onMouseOver={() => handleMouseOver(index + 1)}
                                                                    onMouseLeave={handleMouseLeave}
                                                                    color={(hoveRating || rating) > index ? colors.orange : colors.grey}
                                                                    style={{
                                                                        marginRight: 10,
                                                                        cursor: "pointer"
                                                                    }}
                                                                />
                                                            )
                                                        })}


                                                    </div>
                                                    <div class="relative w-full mb-3 mt-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                            Name
                                                            {errors.name && <span class='text-red-300 ml-1'> field is required</span>}
                                                        </label>
                                                        <input {...register("name", { required: true })} type="text" class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" defaultValue={user?.name} placeholder="Enter your Name"
                                                            style={{ transition: "all 0.15s ease 0s" }} />

                                                    </div>

                                                    <div class="relative w-full mb-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                            Email
                                                            {errors.email && <span class='text-red-300 ml-1'> field is required</span>}
                                                        </label>
                                                        <input {...register("email", { required: true })} type="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" defaultValue={user?.email} placeholder="Enter your email"
                                                            style={{ transition: "all 0.15s ease 0s" }} />
                                                    </div>
                                                    <div class="relative w-full mb-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                            Message
                                                            {errors.massage && <span class='text-red-300 ml-1'> field is required</span>}
                                                        </label>
                                                        <textarea {...register("massage", { required: true })} maxlength="300" rows="4"
                                                            cols="80"
                                                            class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                            placeholder="Enter your Message" >
                                                        </textarea>
                                                    </div>
                                                    <div class="text-center mt-6">
                                                        <button
                                                            disabled={loading}
                                                            class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                            type="submit" style={{ transition: "all 0.15s ease 0s" }}>
                                                            {loading && <div className="flex text-blue-300 items-center justify-center">
                                                                <span class="animate-spin rounded-full  h-4 w-4 border-t-2 border-b-2 border-gray-100 mt-1 mr-2">
                                                                </span>
                                                                processing..
                                                            </div>}
                                                            {!loading && <span>Submit</span>}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;