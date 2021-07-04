
import { ADD_ITEM_QTY, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_ITEM_QTY } from '../ActionType/ActionType'

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product
});

export const addItemQty = (product) => ({
    type: ADD_ITEM_QTY,
    payload: product
});

export const removeItemQty = (product) => ({
    type: REMOVE_ITEM_QTY,
    payload: product
});

export const addWishlist = (product) => ({
    type: ADD_TO_WISHLIST,
    payload: product
});

