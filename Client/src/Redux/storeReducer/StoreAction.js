import {
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_REQUEST,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILED,
} from "./types";
import axios from "axios";

// get all posts
// export const getPosts = () => async (dispatch) => {
//     const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     dispatch({
//         type: GET_POSTS,
//         payload: result.data,
//     });
// };

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

// get a post
export const getViewPost = (id) => async (dispatch) => {
    const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
        type: GET_POST,
        payload: result.data,
    });
};

// create a post
// export const createPost = (post) => async (dispatch) => {
//     const result = await axios.post("http://localhost:5000/store",post );

//     dispatch({
//         type: CREATE_POST,
//         payload: result.data,
//     });
// };

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

// delete a post
// export const deletePost = (id) => async (dispatch) => {
//     await axios.delete(`http://localhost:5000/delete/${id}`);
//     dispatch({
//         type: DELETE_POST,
//         payload: id,
//     });
// };

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
