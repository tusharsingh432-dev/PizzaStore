import axios from 'axios';
import { emptyCart } from './cartActions';
export const placeOrder = (payable) => async (dispatch, getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" });

    const curUser = getState().loginUserReducer.user;
    const cartItems = getState().cartReducer.cartItems;

    // console.log(token);

    try {
        const response = await axios.post('/api/orders/placeOrder', { payable, curUser, cartItems });
        dispatch({ type: "PLACE_ORDER_SUCESS", payload: response });
        // console.log(response);
        dispatch(emptyCart());
    } catch (e) {
        dispatch({ type: "PLACE_ORDER_FAILED", payload: e });
    }

}

export const getAllOrders = () => async (dispatch, getState) => {
    dispatch({ type: 'GET_ORDERS_REQUEST' });
    const curUser = getState().loginUserReducer.user;
    console.log(curUser);
    try {
        const response = await axios.post('/api/orders/getAllOrders', { userId: curUser._id });
        console.log(response.data);
        dispatch({ type: 'GET_ORDERS_SUCCESS', payload: response.data });
    } catch (err) {
        dispatch({ type: 'GET_ORDERS_FAILED', payload: err });
    }
}