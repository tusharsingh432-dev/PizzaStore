import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';
export default function CartScreen() {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    const subtotal = cartItems.reduce((acc, item) => acc += (item.price * item.quantity), 0)
    // console.log(subtotal)u
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1>Cart Items</h1>
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
                <Checkout payable={subtotal} />
            </div>
        </div>
    )
}
