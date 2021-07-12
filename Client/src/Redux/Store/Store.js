
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cartReducer from '../Reducer/Reducer';
import { storeReducer } from '../storeReducer/storeReducer';
import { authReducer } from '../userAuth/Reducer';
import { userReducer } from '../userReducer/reducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");

const middleware = applyMiddleware(thunk);
const combinedReducer = combineReducers({
    user: authReducer,
    users: cartReducer,
    stores: storeReducer,
    orders: userReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))