
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../../assets/images/populer-products/fff.png';




const EditCart = ({ _id, setEditModal, viewData }) => {
    const { name, image, price, qty, id, size, describe, catagories } = viewData;
    console.log(viewData);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [imaLoading, setImaLoading] = useState(null)
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (data) => {

        setLoading(true);
        setIsError(false);
        const formData = new FormData()
        formData.append('catagories', data.catagories);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('id', data.id);
        formData.append('qty', data.qty);
        formData.append('size', data.size);
        formData.append('describe', data.describe);
        formData.append('image', imageUrl);

        fetch(`https://rkmodus.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(res => {
                setIsSuccess(res);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setIsError(true);
            });

        reset();
    }

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

    return (
        <div>
            <div className="min-w-screen h-screen animated  fixed  flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-center bg-cover overflow-y-auto">
                <div class="absolute h-screen bg-gray-800 opacity-60 inset-0 z-0">
                    <FontAwesomeIcon onClick={() => setEditModal(false)} className="text-red-400 mt-12  cursor-pointer text-2xl" icon={faTimes} />
                </div>

                <div class="backgroundColor rounded shadow-lg border flex flex-col px-10 py-10">

                    <div class="w-full p-10 bg-gray-400 rounded-xl z-10">

                        <div className="grid lg:grid-cols-2">
                            <div class="grid-cols-1 sm:grid-cols-1 space-y-2 mb-2 mr-3">
                                <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                                <div class="flex items-center justify-center w-full">
                                    <label onChange={handleImageUpload}
                                        style={{ backgroundImage: `url(${image})` }}
                                        class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 group text-center sm:bg-cover bg-cover relative ">
                                        {
                                            imaLoading ? <img className="animate-bounce h-60 overflow-auto" src={img} alt="" /> : imageUrl ?
                                                <img class=" h-60 overflow-auto " src={imageUrl} alt="imag" />
                                                : null
                                        }

                                        <label class="cursor-pointer mt-3 absolute inset-1 mt-44">
                                            <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">change picture</span>
                                            <input type="file" class="hidden" />
                                        </label>
                                    </label>
                                </div>
                            </div>

                            <div className="grid-cols-1">
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <div class="flex">
                                                <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-36 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                                    <label class=" font-semibold text-gray-600 py-2">Catagories</label>
                                                </span>
                                            </div>
                                            <select {...register("catagories", { required: true })} class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue text-lg focus:shadow bg-yellow-100 text-gray-900">
                                                <option value={catagories}>{catagories}</option>
                                                <option value="arrivalItem">Arrival Product</option>
                                                <option value="futureItem">Future Product</option>
                                            </select>
                                            {errors.catagories && <span className="text-red-500">This field is required</span>}
                                        </div>
                                    </div>


                                    <div class="mb-3 space-y-2 w-full text-md">
                                        <label class="font-semibold text-gray-600">Product Name</label>
                                        <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                                            <input {...register("name", { required: true })} type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border  h-10 border-grey-light rounded-lg  px-3 focus:outline-none text-gray-900 focus:border-indigo-500 focus:shadow" defaultValue={name}
                                                placeholder="Product Name" />
                                            {errors.name && <span className="text-red-500">This field is required</span>}
                                        </div>
                                    </div>



                                    <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div class="mb-3 space-y-2 w-full text-md">
                                            <label class="font-semibold text-gray-600 py-2">Product price</label>
                                            <input {...register("price", { required: true })} placeholder="Product Price" class="appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded-lg h-10 px-4"
                                                defaultValue={price} type="number" />
                                            {errors.price && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>

                                        <div class="mb-3 space-y-2 w-full text-md">
                                            <label class="font-semibold text-gray-600 py-2">Product Code</label>
                                            <input {...register("id", { required: true })} placeholder="Product Code" class="appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded-lg h-10 px-4" defaultValue={id} type="number" />
                                            {errors.id && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                    </div>


                                    <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Product Quantity</label>
                                            <input {...register("qty", { required: true })} placeholder="Product Quantity" class="appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded-lg h-10 px-4" defaultValue={qty} type="number" />
                                            {errors.qty && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Product Size</label>
                                            <select {...register("size", { required: true })} class="block w-full bg-yellow-100 text-gray-900 border border-gray-500 rounded-lg h-10 px-4 md:w-full text-lg ">
                                                <option value={size}>{size}</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                            {errors.size && <span className="text-red-500">Please fill out this field.</span>}
                                        </div>
                                    </div>

                                    <div class="flex-auto w-full mb-1 text-xs space-y-2">
                                        <label class="font-semibold text-gray-600 py-2">Product Details</label>
                                        <textarea {...register("describe", { required: true })} class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your Product info" defaultValue={describe}></textarea>
                                        {errors.describe && <span className="text-red-500">Please fill out this field.</span>}
                                    </div>

                                    {isError && <small className="text-sm text-red-500">Something went wrong. Please try again later.</small>}

                                    {isSuccess && (
                                        <div className="text-green-500">Create Store successfully</div>
                                    )}
                                    <div class="flex justify-center">
                                        <button class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
                                            onClick={() => { setEditModal(false) }}>
                                            Cancel
                                        </button>

                                        <button class="bg-blue-200 text-gray-900 rounded hover:bg-gray-200 px-7 py-2 focus:outline-none mx-1"
                                            type="submit"
                                        >
                                            {loading ? 'Loading...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditCart;