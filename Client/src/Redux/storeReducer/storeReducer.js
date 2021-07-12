import {
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_REQUEST,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILED,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILED,
    CREATE_ADMIN_POST,
    CREATE_ADMIN_SUCCESS,
    CREATE_ADMIN_FAILED,
} from "./types";


const initialState = {
    success: null,
    loading: false,
    errors: "",
    stores: [],
};
export const storeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                stores: action.payload
            }
        }

        case GET_REQUEST_FAILED: {
            return {
                ...state,
                loading: false,
                stores: [],
                errors: action.payload
            }
        }

        case CREATE_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case CREATE_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                stores: action.payload,

            }
        }

        case CREATE_POST_FAILED: {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }

        case CREATE_ADMIN_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case CREATE_ADMIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                stores: action.payload,
                success: action.payload

            }
        }

        case CREATE_ADMIN_FAILED: {
            return {
                ...state,
                success: false,
                loading: false,
                errors: action.payload
            }
        }


        case UPDATE_POST:
            return {
                ...state,
                stores: [...action.payload],
            };

        case DELETE_POST:
            return {
                ...state,
                stores: [...action.payload],
            };


        default:
            return state;
    }
};
