import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED, USER_REGISTER_POST, USER_REGISTER_POST_FAILED, USER_REGISTER_POST_SUCCESS } from "./types";


const initialState = {
    success: null,
    loading: false,
    errors: "",
    user: [],
    review: [],
    isAuthenticated: null,
};
export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };

        case USER_REGISTER_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case USER_REGISTER_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: payload,
                review: payload,

            }
        }

        case USER_REGISTER_POST_FAILED: {
            return {
                ...state,
                success: null,
                loading: false,
                errors: payload
            }
        }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                user: payload
            };


        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };

        default:
            return state;
    }
};
