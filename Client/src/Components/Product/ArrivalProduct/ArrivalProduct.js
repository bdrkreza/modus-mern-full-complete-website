import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStorePost } from "../../../Redux/storeReducer/StoreAction";
import LoadingSpinner from "../../ButtonSection/LoadingSpinner/LoadingSpinner";
import ArrivalProductCart from "../ArrivalProductCart/ArrivalProductCart";
const ArrivalProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getStorePost()), [dispatch]);

  const product = useSelector((state) => {
    return state.stores.stores;
  });
  const arrivalItem = product?.filter((Item) => {
    return Item.catagories === "arrivalItem";
  });
  const loading = useSelector((state) => {
    return state.stores.loading;
  });

  const error = useSelector((state) => {
    return state.stores.errors;
  });

  return (
    <div>
      <div class="container px-28 mx-auto">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
          top new arrival
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <h3 className="text-red-500 text-2xl text-center">{error}</h3>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1 gap-6">
            {arrivalItem?.map((product) => (
              <ArrivalProductCart product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArrivalProduct;
