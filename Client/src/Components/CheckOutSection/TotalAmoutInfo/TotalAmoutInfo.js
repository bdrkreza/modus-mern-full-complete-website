import React from 'react';
import { useSelector } from 'react-redux';

const TotalAmountInfo = () => {
    const product = useSelector((state) => {
        return state.users.cartItems
    })

    let total = 0;
    for (let i = 0; i < product.length; i++) {
        const cart = product[i];
        total = total + cart.price * cart.qty;
    }
    const tax = (total / 10).toFixed(2);
    const totalPrice = (total + Number(tax));

    return (
        <>
            <div class="mb-3 mt-4">
                <div className="flex justify-between ">
                    <p className="text-muted mb-2">Temporary Amount</p>
                    <p className="text-muted">{total}</p>
                </div>
                <div className="flex mb-3 justify-between">
                    <p className="text-muted">Shipping</p>
                    <p className="text-muted">Free</p>
                </div>
                <hr class="border-0 bg-gray-400 text-gray-500 h-px" />
                <div className='flex justify-between'>
                    <strong>Total Amount Of (In +10%/VAT)</strong>
                    <strong>
                        ${totalPrice}
                    </strong>
                </div>
            </div>
        </>
    );
};

export default TotalAmountInfo;