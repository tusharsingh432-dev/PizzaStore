import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
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
            {loading && <Loading />}
            {error && <Error error="Something must have gone wrong" />}
            {orders && orders.map(order =>
                <div className="row" key="1">
                    <Orders order={order} />
                </div>
            )}
        </div>
    )
}
