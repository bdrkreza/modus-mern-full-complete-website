import axios from "axios"
import { getPosts, getPostsFailed, getPostSuccess } from "../storeReducer"


export const CreateStorePost = (post) => {
    return async (dispatch) => {
        dispatch(getPosts())
        try {
            const result = await axios.post('http://localhost:5000/CreateStore', post)
            const data = await result.json();
            dispatch(getPostSuccess(data))
        } catch (error) {
            dispatch(getPostsFailed())
        }
    }
}