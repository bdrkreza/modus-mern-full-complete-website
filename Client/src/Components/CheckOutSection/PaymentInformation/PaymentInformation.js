import React from 'react';

const PaymentInformation = ({ product }) => {
    return (
        <>
            <div class="mb-3 mt-4">
                <div className="flex justify-between ">
                    <p className="text-muted mb-2">Temporary Amount</p>
                    <p className="text-muted">${product.reduce((acc, { product_price, product_qty }) => {
                        let qty = parseInt(product_qty)
                        let item = parseFloat(product_price).toFixed(2)
                        let accumulator = parseFloat(acc).toFixed(2)
                        let res = parseFloat(item) * qty + parseFloat(accumulator)
                        return parseFloat(res).toFixed(2)
                    }, 0)}</p>
                </div>
                <div className="flex mb-3 justify-between">
                    <p className="text-muted">Shipping</p>
                    <p className="text-muted">Free</p>
                </div>
                <hr class="border-0 bg-gray-400 text-gray-500 h-px" />
                <div className='flex justify-between'>
                    <strong>Total Amount Of (including VAT)</strong>
                    <strong>
                        ${product.length > 0 ? parseFloat(product.reduce((acc, { product_price, product_qty }) => {
                            let qty = parseInt(product_qty)
                            let item = parseFloat(product_price).toFixed(2)
                            let accumulator = parseFloat(acc).toFixed(2)
                            let res = parseFloat(item) * qty + parseFloat(accumulator)
                            return parseFloat(res).toFixed(2)
                        }, 0)) + 2 : 0}
                    </strong>
                </div>
            </div>
        </>
    );
};

export default PaymentInformation;