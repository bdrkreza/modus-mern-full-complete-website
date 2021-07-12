import {
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_REQUEST,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILED,
    CREATE_ADMIN_POST,
    CREATE_POST_SUCCESS,
    CREATE_ADMIN_SUCCESS,
    CREATE_ADMIN_FAILED,
} from "./types";
import axios from "axios";

export const getStorePost = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_REQUEST
            })
            const result = await axios.get(`http://localhost:5000/store`)
            dispatch({
                type: GET_REQUEST_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: GET_REQUEST_FAILED,
                payload: error.message
            })
        }
    }
}


export const adminPost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_ADMIN_POST
            })
            const result = await axios.post(`http://localhost:5000/admin`, post)
            dispatch({
                type: CREATE_ADMIN_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: CREATE_ADMIN_FAILED,
                payload: error.message
            })
        }
    }
}

// get a post

export const createPost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_POST
            })
            const result = await axios.post('http://localhost:5000/CreateStore', post)
            dispatch({
                type: GET_REQUEST_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: GET_REQUEST_FAILED,
                payload: error.message
            })
        }
    }
}

// update a post
export const UpdatePost = (post) => async (dispatch) => {
    const result = await axios.patch(
        `http://localhost:5000/update/${post.id}`, post);
    dispatch({
        type: UPDATE_POST,
        payload: result.data,
    });
};



export const deletePost = id => dispatch => {
    fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: DELETE_POST,
                payload: id
            }),
        );
};
