import React from 'react'

export default function Success({ message }) {
    return (
        <div style={{ display: "flex", justifyContent: 'center' }} >
            <div class="alert alert-success" role="alert" style={{ width: '50%' }}>
                {message}
            </div>
        </ div>
    )
}
