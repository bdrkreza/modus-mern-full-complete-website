import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStorePost } from '../../../Redux/storeReducer/StoreAction';

import LoadingSpinner from '../../ButtonSection/LoadingSpinner/LoadingSpinner';
import NewArrivalProduct from '../NewArrivalProduct/NewArrivalProduct';

const Product = () => {

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
        <div>
            <div class="container px-28">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
                {
                    loading ? <LoadingSpinner /> : error ?
                        <h3 className="text-red-500 text-2xl text-center">{error}</h3> :
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1 gap-6">
                            {
                                product?.map((product) => <NewArrivalProduct product={product} />)
                            }
                        </div>
                }


            </div>
        </div>
    );
};

export default Product;