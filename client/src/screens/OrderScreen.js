import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../actions/orderActions';
import Orders from '../components/Orders';
export default function OrderScreen() {

    const dispatch = useDispatch();
    const orderState = useSelector(state => state.getAllOrdersReducer)
    const { orders, loading, error } = orderState;
    useEffect(() => {
        dispatch(getAllOrders());
    }, []);

    return (
        <div>
            <h3>My Orders</h3>
            {orders && orders.map(order =>
                <div className="row" key="1">
                    <Orders order={order} />
                </div>
            )}
        </div>
    )
}
