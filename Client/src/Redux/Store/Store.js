
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cartReducer from '../Reducer/Reducer';
import { storeReducer } from '../storeReducer/storeReducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");

const middleware = applyMiddleware(thunk);
const combinedReducer = combineReducers({
    users: cartReducer,
    stores: storeReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))