import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'
import Checkout from '../components/Checkout';
export default function CartScreen() {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartReducer);
    const loginState = useSelector(state => state.loginUserReducer);
    const orderState = useSelector(state => state.placeOrderReducer);
    const cartItems = cartState.cartItems;
    const subtotal = cartItems.reduce((acc, item) => acc += (item.price * item.quantity), 0)
    useEffect(() => {
        if (!loginState.isLogin) {
            window.location.href = '/login';
            return <h1>403: Forbidden</h1>
        }
    }, [])

    if (!loginState.isLogin) {
        return <h1>403: Please Login First</h1>
    }
    // console.log(subtotal)u
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1>Cart Items</h1>
                {(subtotal === 0) && <h3>The cart is empty</h3>}
                {cartItems.map(cartItem => {
                    return <div className="row" key={cartItem._id} style={{ "margin": "20px 20px" }}>
                        <div className="col-md-8" style={{ "display": "flex", "flexDirection": "column", "alignItems": "start" }} >
                            <h4>{cartItem.name}[{cartItem.variant}]</h4>
                            <h5>Price: {cartItem.price} X {cartItem.quantity} = {cartItem.price * cartItem.quantity}</h5>
                            <h5>Quantity:{" "}
                                <i className="fas fa-plus-square"
                                    style={{ "color": "green" }}
                                    onClick={() => {
                                        dispatch(addToCart(cartItem.element, cartItem.variant, (parseInt(cartItem.quantity) + 1)))
                                    }}></i>
                                {' ' + cartItem.quantity + ' '}
                                <i className="fas fa-minus-square"
                                    style={{ "color": "red" }}
                                    onClick={() => {
                                        if (cartItem.quantity > 1)
                                            dispatch(addToCart(cartItem.element, cartItem.variant, (parseInt(cartItem.quantity) - 1)))
                                    }}></i>
                            </h5>

                        </div>
                        <div className="col-md-4" style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
                            <img src={cartItem.image} alt={cartItem.name} style={{ "height": "100px", "width": "100px" }} />
                            <i className="fas fa-trash-alt"
                                style={{ "color": "red" }}
                                onClick={() => dispatch(removeFromCart(cartItem.element))}
                            ></i>
                        </div>
                    </div>;
                })}
            </div>
            <div className="col-md-4">
                <h2>Subtotal:  ₹{subtotal}/-</h2>
                {subtotal > 0 ? <Checkout payable={subtotal} /> : <h5>Please add items to checkout</h5>}

                {orderState.loading && <Loading />}
                {orderState.error && <Error error="Payment Failed" />}
                {orderState.success && <Success message="Order Placed" />}
            </div>
        </div>
    )
}
