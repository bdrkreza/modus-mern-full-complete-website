import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../../Redux/userReducer/action';
import OrdersCart from './OrdersCart';
import SkeletonTable from '../Store/SkeletonTable/SkeletonTable';

function Orders() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(getOrders()), [dispatch])
    const product = useSelector(state => {
        return state.orders.order;
    });

    const loading = useSelector(state => {
        return state.orders.loading;
    });

    const error = useSelector(state => {
        return state.orders.errors;
    });

    return (
        <div className="flex flex-col bg-gray-900">
            <h1 className="text-2xl text-center mt-5 uppercase text-gray-400">Customer Orders</h1>
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-2 ">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6   lg:px-8">

                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        {
                            loading ? <SkeletonTable /> : error ?
                                <h3 className="text-red-500 text-2xl text-center">{error}</h3> :
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Quantity
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                PaymentId
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                issued/due
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="">Action</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="backgroundColor text-gray-400 divide-y divide-gray-200">
                                        {product?.map((product) => (
                                            <tr>

                                                <OrdersCart product={product} key={product.id} />
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
