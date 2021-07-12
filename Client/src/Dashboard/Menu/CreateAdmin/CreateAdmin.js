import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { adminPost } from '../../../Redux/storeReducer/StoreAction';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';

const CreateAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = data => {
        let adminData = {
            name: data.name,
            email: data.email,
            role: data.role
        }
        console.log(adminData);
        dispatch(adminPost(adminData));
        reset();
    };

    const success = useSelector(state => state.stores.success);
    const error = useSelector(state => state.stores.errors);

    return (
        <>
            {
                success ? <SuccessMsg /> : null
            }

            {
                error ? <ErrorMsg error={error} /> : null
            }
            <body class="flex h-screen bg-indigo-700">
                <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                    <header>
                        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" alt="img" />
                    </header>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label class="block mb-2 text-indigo-500" for="username">Username
                                {errors.name && <span className="text-red-400">This field is required</span>}
                            </label>
                            <input {...register("name", { required: true })} class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" />
                        </div>
                        <div>
                            <label class="block mb-2 text-indigo-500" >Email
                                {errors.email && <span className="text-red-400">This field is required</span>}
                            </label>
                            <input {...register("email", { required: true })} class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" />
                        </div>
                        <div>
                            <label class="block mb-2 text-indigo-500" >Role
                                {errors.email && <span className="text-red-400">This field is required</span>}
                            </label>
                            <input {...register("role", { required: true })} class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" />
                        </div>
                        <div>
                            <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                        </div>
                    </form>
                </div>
            </body>
        </>
    );
};

export default CreateAdmin;