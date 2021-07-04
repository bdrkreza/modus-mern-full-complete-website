import { CREATE_REQUEST, CREATE_REQUEST_FAILED, CREATE_REQUEST_SUCCESS } from "../ActionType/ActionType";


const initialState = {
    posts: [],
    loading: false,
    errors: ""
};
const adminReducer = (state = initialState, { type, action }) => {
    switch (type) {

        case CREATE_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case CREATE_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload,

            }
        }

        case CREATE_REQUEST_FAILED: {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }


        // case GET_POST:
        //     return {
        //         ...state,
        //         post: state.posts.find((postItem) => postItem.id == payload),
        //     };
        // case UPDATE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.map((postItem) =>
        //             postItem.id == payload.id ? payload : postItem
        //         ),
        //     };
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.filter((postItem) => postItem.id != payload),
        //     };
        default:
            return state;
    }
};

export default adminReducer;