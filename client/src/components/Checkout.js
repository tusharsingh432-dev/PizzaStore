import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { placeOrder } from '../actions/orderActions';

export default function Checkout({ payable }) {
    const dispatch = useDispatch();
    const [order, setOrder] = useState()
    useEffect(() => {
        async function fetchData() {
            try {
                setOrder(await axios.post('api/payments/createOrder', { payable }));
                // console.log(order);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [payable]);
    async function displayRazorpay() {
        var options = {
            key: "rzp_test_Q9SLlfSgFo7Xp9",
            amount: payable * 100,
            currency: "INR",
            name: "Pizza",
            order_id: order.data,
            handler: function (response) {
                dispatch(placeOrder(payable));
                console.log(response.razorpay_payment_id);
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },  
        };
        const razorpayObject = new window.Razorpay(options);
        razorpayObject.open();
    }

    return (
        <div>
            <button onClick={displayRazorpay} className="butn">Checkout</button>
        </div>
    )
}