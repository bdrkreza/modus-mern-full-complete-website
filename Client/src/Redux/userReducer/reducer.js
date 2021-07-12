import { GET_ORDERS, GET_ORDERS_FAILED, GET_ORDERS_SUCCESS, USER_ORDERS_POST, USER_ORDERS_POST_FAILED, USER_ORDERS_POST_SUCCESS, USER_REVIEW_POST, USER_REVIEW_POST_FAILED, USER_REVIEW_POST_SUCCESS } from "./types";

const initialState = {
    success: null,
    loading: false,
    errors: "",
    order: [],
    review: []
};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORDERS: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_ORDERS_SUCCESS:
            return {
                ...state,

                loading: false,
                order: action.payload,
            };

        case GET_ORDERS_FAILED: {
            return {
                ...state,

                loading: false,
                errors: action.payload
            }
        }

        case USER_ORDERS_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case USER_ORDERS_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                order: action.payload,

            }
        }

        case USER_ORDERS_POST_FAILED: {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }

        case USER_REVIEW_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case USER_REVIEW_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: action.payload,
                review: action.payload,

            }
        }

        case USER_REVIEW_POST_FAILED: {
            return {
                ...state,
                success: null,
                loading: false,
                errors: action.payload
            }
        }

        default:
            return state;
    }
};
