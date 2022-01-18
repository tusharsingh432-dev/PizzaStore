import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducers';
import { loginUserReducer, registerUserReducer } from './reducers/userReducers';
import { getAllOrdersReducer, placeOrderReducer } from './reducers/orderReducers';

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getAllOrdersReducer: getAllOrdersReducer
})

const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { isLogin: false, isError: false, loading: false };

const initState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: userInfo,
    registerUserReducer: {
        loading: false,
        sucess: false,
        error: false
    }
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initState, composeEnhancers(applyMiddleware(thunk)));

export default store;