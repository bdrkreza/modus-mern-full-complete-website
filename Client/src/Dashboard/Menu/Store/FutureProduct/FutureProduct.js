import React from 'react';
import { useSelector } from 'react-redux';
import FutureProductCart from './FutureProductCart';
import SkeletonTable from '../SkeletonTable/SkeletonTable';


function FutureProduct() {

    const product = useSelector(state => {
        return state.stores.stores;
    });

    const futureItem = product.filter((Item) => {
        return Item.catagories === "futureItem";
    });


    const loading = useSelector(state => {
        return state.stores.loading;
    });

    const error = useSelector(state => {
        return state.stores.errors;
    });

    return (
        <div className="col-span-full xl:col-span-6 backgroundColor shadow-lg rounded-lg border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-gray-500">FutureProduct</h2>
            </header>
            {
                loading ? <SkeletonTable /> : error ?
                    <h3 className="text-red-500 text-2xl text-center">{error}</h3> :
                    <div className="p-3 text-white">
                        {/* Table */}
                        <div className="overflow-x-auto  shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="table-auto w-full">
                                {/* Table header */}
                                <thead className="text-1xl font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Products</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">title</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Role</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Country</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}

                                <tbody className="text-sm divide-y divide-gray-100 overflow-auto">

                                    {
                                        futureItem.map((data => <tr><FutureProductCart data={data} /></tr>))
                                    }
                                </tbody>

                            </table>

                        </div>

                    </div>
            }

        </div>
    );
}

export default FutureProduct;
