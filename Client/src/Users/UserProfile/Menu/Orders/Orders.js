import React from 'react';
import { useSelector } from 'react-redux';
import OrdersCart from './OrdersCart';
import SkeletonTable from '../../../../Dashboard/Menu/Store/SkeletonTable/SkeletonTable';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOrders } from '../../../../Redux/userReducer/action';

const Orders = () => {
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
        <>
            <div class="bg-gray-600 mt-2">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible">
                        {loading ? <SkeletonTable /> : error ?
                            <h3 className="text-red-500 text-2xl text-center">{error}</h3> :
                            <table class="table text-gray-400 border-separate w-full text-sm">
                                <thead class="bg-gradient-to-r from-gray-700 via-blue-800 to-gray-900 text-gray-500">
                                    <tr>
                                        <th class="p-3">Brand</th>
                                        <th class="p-3 text-left">Quantity</th>
                                        <th class="p-3 text-left">Price</th>
                                        <th class="p-3 text-left">Status</th>
                                        <th class="p-3 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        product.map((data) => <OrdersCart product={data} />)
                                    }

                                </tbody>

                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;