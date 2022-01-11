import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducers';
import { registerUserReducer } from './reducers/userReducers';

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initState = {
    cartReducer: {
        cartItems: cartItems
    }
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initState, composeEnhancers(applyMiddleware(thunk)));

export default store;