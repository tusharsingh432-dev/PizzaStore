import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CartScreen() {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h1>Cart Items</h1>
                {cartItems.map(cartItem => {
                    return <div className="row" style={{ "margin": "20px 20px" }}>
                        <div className="col-md-8" style={{ "display": "flex", "flexDirection": "column", "alignItems": "start" }} >
                            <h4>{cartItem.name}[{cartItem.variant}]</h4>
                            <h5>Price: {cartItem.price} X {cartItem.quantity} = {cartItem.price * cartItem.quantity}</h5>
                            <h5>Quantity:{" "}
                                <i class="fas fa-plus-square"></i>
                                {' ' + cartItem.quantity + ' '}
                                <i class="fas fa-minus-square"></i>
                            </h5>

                        </div>
                        <div className="col-md-4" style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
                            <img src={cartItem.image} alt={cartItem.name} style={{ "height": "100px", "width": "100px" }} />
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </div>;
                })}
            </div>
            <div className="col-md-4">

            </div>
        </div>
    )
}
