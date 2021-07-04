import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../Redux/storeReducer/StoreAction';

const DeleteConfirmButton = ({ setShowModal, id }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <div class="z-50 w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-whit">
                    <div class="bg-white rounded shadow-lg border flex flex-col overflow-hidden px-10 py-10">
                        <div class="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="text-center py-6 text-2xl text-gray-700">Are you sure ?</div>
                        <div class="text-center text-xl font-light text-gray-700 mb-8">
                            Do you really want to delete these records?<br /> This process cannot be undone.
                        </div>
                        <div class="flex justify-center">
                            <button class="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-1"
                                onClick={() => setShowModal(false)}>
                                Cancel
                            </button>

                            <button class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1"
                                onClick={() => {
                                    dispatch(deletePost(id))
                                    setShowModal(false)
                                }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"></div>
            </div>


        </>
    );
};

export default DeleteConfirmButton;