import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';
export default function Checkout({ payable }) {
    const dispatch = useDispatch();
    function handleToken(token) {
        dispatch(placeOrder(token, payable));
    }
    const publishableKey = 'pk_test_51KHtU9SEXCGwuU0mOjPNZl1nXii27PaV9DYslTgO8PcYFRD9Xi9QlX1n4t6SkW91KkWOGKbYp1yTN9GOwz0ay1Iy00AU17XUW4';
    return (
        <div>
            <StripeCheckout
                stripeKey={publishableKey}
                shippingAddress
                amount={payable * 100}
                currency='INR'
                token={handleToken}
            >
                <button className="butn">Checkout</button>
            </StripeCheckout>
        </div>
    )
}