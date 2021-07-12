import React from 'react';
import Navbar from '../../Components/Header/Navbar/Navbar';
import img from '../../assets/images/slider/banner-bg.jpg'
import { Link, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import GoogleSignInButton from '../Button/GoogleSignInButton/GoogleSignInButton';
import FacebookSignInButton from '../Button/FacebookSignInButton/FacebookSignInButton';
import { login } from '../../Redux/userAuth/action';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = () => {



    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const loginData = {
            email: data.email,
            password: data.password
        }
        dispatch(login(loginData))
    };


    return (
        <div>
            <Navbar />
            <div className="container h-screen bg-no-repeat mt-6" style={{ backgroundImage: `url(${img})` }}>
                <div>

                    <div class="max-w-sm m-auto">
                        <div class="border-t-4 border-teal-100 overflow-hidden rounded shadow-md">
                            <h3 class="text-xl text-center">Welcome back!</h3>
                            <div class="flex justify-center pt-3">
                                <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col items-center">
                                    <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                                        Email
                                        {errors.email &&
                                            <text className="text-red-500 ml-1">
                                                This is required.
                                            </text>}
                                    </label>
                                    <input {...register("email", { required: true })} type="email"
                                        placeholder="john.doe@blockhauscode.com"
                                        class="border-2 border-pink-600 -mt-8 -ml-8 mb-8 w-64 h-16 text-center text-sm text-gray-800 " />


                                    <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                                        Password
                                        {errors.password &&
                                            <text className="text-red-500 ml-1">
                                                This is required.
                                            </text>}
                                    </label>
                                    <input {...register("password", { required: true })} type="password" placeholder="password"
                                        class="border-2 border-pink-600 -mt-8 -ml-8 mb-5 w-64 h-16 text-center text-sm text-gray-800 " />


                                    <div class="px-0 mb-4 flex">
                                        <div class="w-1/2">
                                            <input type="checkbox" class="align-middle cursor-pointer -mt-1" id="remember-me" />
                                            <label for="remember-me" class="align-middle text-grey-dark text-md cursor-pointer">Remember me</label>
                                        </div>
                                        <div class="w-1/2 text-right">
                                            <a href="/" class="font-semibold no-underline text-black">Forgot your password?</a>
                                        </div>
                                    </div>
                                    <div class="px-4  mb-0">
                                        <button type='submit' class="text-gray-900 bg-transparent border border-solid border-purple-500 hover:bg-purple-100 hover:text-black active:bg-purple-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-48">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div class="bg-grey-lighter text-center text-grey-dark py-4">
                                Don't have an account? <Link to="/signup" class="font-semibold text-lg no-underline text-yellow-800">SignUp</Link>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-xl text-gray-900 py-4">Sign in with</div>
                    <div class="flex justify-center flex-wrap mb-10">
                        <GoogleSignInButton />
                        <FacebookSignInButton />
                    </div>

                </div>

            </div>

        </div>
    );
};




export default SignIn;



