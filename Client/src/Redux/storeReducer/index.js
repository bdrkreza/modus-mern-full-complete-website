import { CREATE_POST, CREATE_POST_FAILED, CREATE_POST_SUCCESS } from "./types";

export const getPosts = (post) => ({
    type: CREATE_POST,
    payload: post,
});

export const getPostSuccess = (post) => ({
    type: CREATE_POST_SUCCESS,
    payload: post,
});

export const getPostsFailed = (post) => ({
    type: CREATE_POST_FAILED,
    payload: post,
});
