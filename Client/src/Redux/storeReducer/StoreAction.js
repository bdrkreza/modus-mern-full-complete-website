import axios from "axios";
import {
    CREATE_ADMIN_FAILED, CREATE_ADMIN_POST,
    CREATE_ADMIN_SUCCESS, CREATE_POST, DELETE_POST,
    GET_REQUEST, GET_REQUEST_FAILED, GET_REQUEST_SUCCESS, UPDATE_POST
} from "./types";

export const getStorePost = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_REQUEST
            })
            const result = await axios.get(`https://rkmodus.herokuapp.com/store`)
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
            const result = await axios.post(`https://rkmodus.herokuapp.com/postAdmin`, post)
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
            const result = await axios.post('https://rkmodus.herokuapp.com/CreateStore', post)
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
        `https://rkmodus.herokuapp.com/update/${post.id}`, post);
    dispatch({
        type: UPDATE_POST,
        payload: result.data,
    });
};



export const deletePost = id => dispatch => {
    fetch(`https://rkmodus.herokuapp.com/delete/${id}`, {
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
