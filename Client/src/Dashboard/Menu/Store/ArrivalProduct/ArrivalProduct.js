import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../App.css'
import { getStorePost } from '../../../../Redux/storeReducer/StoreAction';
import SkeletonTable from '../SkeletonTable/SkeletonTable';

import ArrivalProductCart from './ArrivalProductCart';

function ArrivalProduct() {

    const dispatch = useDispatch()
    useEffect(() => dispatch(getStorePost()), [])

    const product = useSelector(state => {
        return state.stores.stores;
    });

    const loading = useSelector(state => {
        return state.stores.loading;
    });

    const error = useSelector(state => {
        return state.stores.errors;
    });

    return (
        <div className="col-span-full xl:col-span-6 backgroundColor shadow-lg sm:rounded-lg border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-gray-500">ArrivalProduct</h2>
            </header>

            {
                loading ? <SkeletonTable /> : error ?
                    <h3 className="text-red-500 text-2xl text-center">{error}</h3> :
                    <div className="p-3 text-white">
                        {/* Table */}
                        <div className="overflow-x-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" id="journal-scroll">
                            <table className="table-auto w-full rounded">
                                {/* Table header */}
                                <thead className="text-1xl font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 whitespace-nowrap">
                                            <div className="font-semibold  text-left">Product</div>
                                        </th>
                                        <th className="px-6 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">title</div>
                                        </th>
                                        <th className="px-6 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">role</div>
                                        </th>
                                        <th className="px-6 py-3 whitespace-nowrap">
                                            <div className="font-semibold text-left">action</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm divide-y divide-gray-100" >

                                    {
                                        product?.map((data) =>
                                            <tr ><ArrivalProductCart data={data} /></tr>)
                                    }
                                </tbody>
                            </table>
                        </div >
                    </div >
            }
        </div >
    );
}

export default ArrivalProduct;
