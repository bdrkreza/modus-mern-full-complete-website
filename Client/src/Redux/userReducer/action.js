import axios from "axios";
import { GET_ORDERS, GET_ORDERS_FAILED, GET_ORDERS_SUCCESS, USER_ORDERS_POST, USER_ORDERS_POST_FAILED, USER_ORDERS_POST_SUCCESS, USER_REVIEW_POST, USER_REVIEW_POST_FAILED, USER_REVIEW_POST_SUCCESS } from "./types";


// get all orders
export const getOrders = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ORDERS
        })
        const result = await axios.get("https://rkmodus.herokuapp.com/orders");
        dispatch({
            type: GET_ORDERS_SUCCESS,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: GET_ORDERS_FAILED,
            payload: error.message
        })
    }

};



export const userOrdersPost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_ORDERS_POST
            })
            const result = await axios.post('https://rkmodus.herokuapp.com/orders', post)
            dispatch({
                type: USER_ORDERS_POST_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: USER_ORDERS_POST_FAILED,
                payload: error.message
            })
        }
    }
}


export const userReviewPost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REVIEW_POST
            })
            const result = await axios.post('https://rkmodus.herokuapp.com/feedback', post)
            dispatch({
                type: USER_REVIEW_POST_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: USER_REVIEW_POST_FAILED,
                payload: error.message
            })
        }
    }
}
