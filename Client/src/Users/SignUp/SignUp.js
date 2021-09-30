import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/images/slider/banner-bg.jpg";
import Navbar from "../../Components/Header/Navbar/Navbar";
import { userCreatePost } from "../../Redux/userAuth/action";
import FacebookSignInButton from "../Button/FacebookSignInButton/FacebookSignInButton";
import GoogleSignInButton from "../Button/GoogleSignInButton/GoogleSignInButton";
import ReviewErrors from "../UserProfile/Menu/Review/ReviewErrors";

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    dispatch(userCreatePost(userData));
    console.log(userData);
    reset();
  };

  const success = useSelector((state) => {
    return state.user.success;
  });

  const loading = useSelector((state) => {
    return state.user.loading;
  });
  const error = useSelector((state) => {
    return state.user.errors;
  });

  return (
    <>
      <Navbar />
      {success ? <h1>success</h1> : null}

      {error ? <ReviewErrors error={error} /> : null}
      <div
        className="container w-full mx-auto bg-no-repeat mt-6"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div>
          <div class="max-w-sm m-auto">
            <div class="border-t-4 border-teal-100 overflow-hidden rounded shadow-md">
              <div class="flex justify-center pt-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  class="flex flex-col items-center"
                >
                  {/* Name Input field */}
                  <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                    User Name
                    {errors.name && (
                      <text className="text-red-500 ml-1">
                        This is required.
                      </text>
                    )}
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Your Name"
                    class="border-2 border-pink-600 -mt-8 -ml-8 mb-8 w-64 h-16 text-center text-sm text-gray-800 "
                  />

                  {/* Email field */}
                  <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                    Email
                    {errors.email && (
                      <text className="text-red-500 ml-1">
                        This is required.
                      </text>
                    )}
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="john.doe@blockhauscode.com"
                    class="border-2 border-pink-600 -mt-8 -ml-8 mb-8 w-64 h-16 text-center text-sm text-gray-800 "
                  />

                  {/* Password Input field */}
                  <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                    Password
                    {errors.password && (
                      <text className="text-red-500 ml-1">
                        This is required.
                      </text>
                    )}
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter your password"
                    class="border-2 border-pink-600 -mt-8 -ml-8 mb-5 w-64 h-16 text-center text-sm text-gray-800 "
                  />

                  {/* Confirm Password Input field */}
                  <label class="border-2 border-gray-700 w-64 h-16 text-center text-md text-gray-600 pt-1">
                    Password
                    {errors.confirmPassword && (
                      <text className="text-red-500 ml-1">
                        This is required.
                      </text>
                    )}
                  </label>
                  <input
                    {...register("confirmPassword", { required: true })}
                    type="password"
                    placeholder="Enter your password"
                    class="border-2 border-pink-600 -mt-8 -ml-8 mb-5 w-64 h-16 text-center text-sm text-gray-800 "
                  />

                  {/* Team Condition field */}
                  <div class="px-0 mb-4 flex">
                    <div class="w-1/1">
                      <input
                        type="checkbox"
                        class="align-middle cursor-pointer -mt-1"
                        id="remember-me"
                      />
                      <label
                        for="remember-me"
                        class="align-middle text-grey-dark text-md cursor-pointer "
                      >
                        {" "}
                        I accept the
                        <a href="/" className="text-green-600">
                          {" "}
                          Terms of User
                          <abbr className="text-black ml-1 mr-1">&</abbr>
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  {/* SignUp Button */}
                  <div class="px-4  mb-0">
                    <button
                      class="text-gray-900 bg-transparent border border-solid border-purple-500 hover:bg-purple-100 hover:text-black active:bg-purple-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-48"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div class="bg-grey-lighter text-center text-grey-dark py-4 mt-3">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  class="font-semibold text-lg no-underline text-yellow-800"
                >
                  Login here
                </Link>
              </div>
            </div>
          </div>

          {/* Sign in  with media */}
          <div class="text-center text-xl text-gray-900 py-4">Sign in with</div>
          <div class="flex justify-center flex-wrap mb-10">
            <GoogleSignInButton />
            <FacebookSignInButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
