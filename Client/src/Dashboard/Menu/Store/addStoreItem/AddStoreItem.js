import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../../assets/images/populer-products/fff.png'
import { createPost } from '../../../../Redux/storeReducer/StoreAction';



const AddStoreItem = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const [picture, setPicture] = useState(null);
    const [imaLoading, setImaLoading] = useState(null)
    // const [imgData, setImgData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (data) => {
        // setLoading(true);
        // setIsError(false);
        console.log(data);
        const formData = new FormData()
        formData.append('catagories', data.catagories);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('id', data.id);
        formData.append('qty', data.qty);
        formData.append('size', data.size);
        formData.append('describe', data.describe);
        formData.append('image', imageUrl);
        dispatch(createPost(formData));

        // axios.post('http://localhost:5000/CreateStore', formData)
        //     .then(res => {
        //         setIsSuccess(res);
        //         setLoading(false);
        //     }).catch(err => {
        //         setLoading(false);
        //         setIsError(true);
        //     });
        reset();
    }


    // const onChangePicture = e => {
    //     if (e.target.files[0]) {
    //         console.log("picture: ", e.target.files);
    //         setPicture(e.target.files[0]);
    //         const reader = new FileReader();
    //         reader.addEventListener("load", () => {
    //             setImgData(reader.result);
    //         });
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    // };


    const handleImageUpload = (event) => {
        setImaLoading(true)
        const imageData = new FormData();
        imageData.set('key', '1c06bb79531d597a437c43887a44ad81')
        imageData.append('image', event.target.files[0])
        console.log(imageData);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                setImaLoading(false)
            })
            .catch(function (error) {
                alert('Sorry page not found', error);
            });
    }

    const loading = useSelector(state => {
        return state.stores.loading;
    });

    const isError = useSelector(state => {
        return state.stores.errors;
    });
    return (
        <div>
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">
                    <div class="grid lg:grid-cols-2 px-16">
                        <div>
                            <div
                                class="w-full h-96 bg-gray-400  lg:block lg:w-1/1 bg-cover rounded-l-lg"
                                style={{ backgroundImage: `url(${img})` }}

                            >
                                {
                                    imaLoading ? <img className="animate-bounce" src="https://dummyimage.com/640x480/bdbdbd/fff" alt="" /> : imageUrl ? <img className="w-1/1 items-center mr-1" src={imageUrl} alt="img" /> : null
                                }
                            </div>

                            <div class="mt-5 ">
                                <label class="w-64 flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-800">
                                    <svg class="w-10 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span class="mt-2 text-base leading-normal">Select a Image</span>
                                    <input onChange={handleImageUpload} type="file" name="image" id="file-ip-1" accept="image" required className="hidden" />
                                    {errors.image && <span className="text-red-500">Image is required</span>}
                                </label>
                            </div>
                        </div>

                        <>
                            <div class="w-full lg:w-1/1 bg-white p-2 rounded-lg lg:rounded-l-none">
                                <div class="px-8 text-center">
                                    <h3 class="pt-4 text-2xl">Create Posts!</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div class="flex">
                                                <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-0 whitespace-no-wrap text-grey-dark text-sm w-32 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                                    <label class=" font-semibold text-gray-600 py-1">Catagories</label>
                                                </span>
                                            </div>
                                            <select {...register("catagories", { required: true })} class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue text-lg focus:shadow bg-yellow-100 text-gray-900">
                                                <option value="">Select</option>
                                                <option value="arrivalItem">Arrival Product</option>
                                                <option value="futureItem">Future Product</option>
                                            </select>
                                            {errors.catagories && <span className="text-red-500">This field is required</span>}
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 space-y-2">
                                        <label class="text-sm font-bold text-gray-500 tracking-wide">Name</label>
                                        <input {...register("name", { required: true })} class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter Product Name" />
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div class="md:flex flex-row md:space-x-4 w-full text-md">
                                        <div class="mb-3 space-y-2 w-full text-md">
                                            <label class="font-semibold text-gray-600 py-2">Product price</label>
                                            <input {...register("price", { required: true })} placeholder="Product Price" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="number" />
                                            {errors.price && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>

                                        <div class="mb-3 space-y-2 w-full text-md">
                                            <label class="font-semibold text-gray-600 py-2">Product Code</label>
                                            <input {...register("id", { required: true })} placeholder="Product Code" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" />
                                            {errors.id && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                    </div>

                                    <div class="md:flex md:flex-row md:space-x-4 w-full text-md">
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Product Quantity</label>
                                            <input {...register("qty", { required: true })} placeholder="Product Quantity" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="number" />
                                            {errors.qty && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Product Size</label>
                                            <select {...register("size", { required: true })} class="block w-full bg-yellow-100 text-gray-900 border border-gray-500 rounded-lg h-10 px-4 md:w-full text-lg">
                                                <option value="">Selected Size</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                            {errors.size && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 mt-2">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                {...register("describe", { required: true })}
                                                id="about"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder=" Description"
                                                defaultValue={''}
                                            />
                                            {errors.describe && <span className="text-red-500">Description is required</span>}
                                        </div>
                                    </div>


                                    <hr class="mb-1 mt-5 border-t" />
                                    <div class="mb-1 text-center">

                                        {isError && <small className="text-sm text-red-500">Something went wrong. Please try again later.</small>}

                                        {loading && (
                                            <div className="text-green-500">Create Store successfully</div>
                                        )}
                                        <button
                                            disabled={loading}
                                            class="w-full mt-2 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                            type="submit"

                                        >
                                            {loading ? 'Loading...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddStoreItem;