import axios from "axios"
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_REGISTER_POST, USER_REGISTER_POST_FAILED, USER_REGISTER_POST_SUCCESS } from "./types"

export const userCreatePost = (post) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_POST
            })
            const result = await axios.post('https://rkmodus.herokuapp.com/register', post)
            dispatch({
                type: USER_REGISTER_POST_SUCCESS,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: USER_REGISTER_POST_FAILED,
                payload: error.message
            })
        }
    }
}


export const login = (post) => {
    return async (dispatch) => {
        try {

            const res = await axios.post('https://rkmodus.herokuapp.com/signIn', post)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch({
                type: LOGIN_FAIL,
                payload: errors
            })
        }
    }
}

// export const loadUser = () => async (dispatch) => {
//     if (localStorage.token) {
//         setAuthToken(localStorage.token);
//     }

//     try {
//         const res = await axios.get("https://rkmodus.herokuapp.com/user");
//         dispatch({
//             type: USER_LOADED,
//             payload: res.data,
//         });
//     } catch (err) {
//         dispatch({
//             type: AUTH_ERROR,
//         });
//     }
// };



export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};