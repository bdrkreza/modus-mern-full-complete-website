import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../ButtonSection/LoadingSpinner/LoadingSpinner";
import FutureItemCart from "./FutureItemCart";

const FutureProductSection = () => {
  const product = useSelector((state) => {
    return state.stores.stores;
  });

  const futureItem = product.filter((Item) => {
    return Item.catagories === "futureItem";
  });
  const loading = useSelector((state) => {
    return state.stores.loading;
  });

  const error = useSelector((state) => {
    return state.stores.errors;
  });
  return (
    <>
      <div class="container mx-auto py-16 px-10">
        <h2 class="text-3xl font-medium text-gray-800 uppercase text-center mb-6">
          Feature Product
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <h3 className="text-red-500 text-2xl text-center">{error}</h3>
        ) : (
          <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1 gap-3">
            {futureItem.map((Item) => (
              <FutureItemCart Item={Item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FutureProductSection;
