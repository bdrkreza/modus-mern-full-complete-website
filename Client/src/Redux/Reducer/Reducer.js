import { ADD_ITEM_QTY, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_ITEM_QTY, } from '../ActionType/ActionType'

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            const newState = {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
            return newState;
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
            };


        case ADD_ITEM_QTY:
            let addItem = []
            state.cartItems.map(item => {

                if (item._id === action.payload._id) {
                    item.qty += 1
                }
                return addItem.push(item)
            })
            return {

                ...state,
                cartItems: addItem,
            }


        case REMOVE_ITEM_QTY:
            let removeItem = []
            state.cartItems.map(item => {
                if (item._id === action.payload._id) {
                    item.qty -= 1
                }
                return removeItem.push(item)
            })
            return {
                ...state,
                cartItems: removeItem,
            }


        case ADD_TO_WISHLIST:
            let filWishlist = state.cartItems.filter(item => item._id !== action.payload._id)
            action.payload.qty = 1
            return {
                ...state,
                cartItems: filWishlist,
                wishlists: [...state.wishlists, action.payload]
            }

        default:
            return state;
    }
}

export default cartReducer;
