import React from 'react'

export default function Orders({ order }) {
    return (
        <>
            <div className="row shadow p-3 mb-5 bg-white rounded " style={{ maxWidth: '90%', margin: '0 auto', marginTop: '20px' }}>
                <div className='col-md-5' style={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <h5>Items</h5>
                    {order.orderItems.map(item => {
                        return <p key={item._id}>{item.name + '[' + item.variant + ']*' + item.quantity + '=' + item.price * item.quantity}</p>
                    })}
                </div>
                <div className='col-md-4' style={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <h5>Address</h5>
                    <p>{order.shippingAddress.street + ', ' + order.shippingAddress.city + ', ' + order.shippingAddress.pincode + '.'}</p>
                </div>
                <div className='col-md-3' style={{ alignItems: "start", display: "flex", flexDirection: "column" }}>
                    <p>Price: ₹{order.orderAmount}/-</p>
                    <p>Order Status: {order.isDelivered ? "Delivered" : "Placed"}</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                </div>
            </div>
        </>
    )
}
