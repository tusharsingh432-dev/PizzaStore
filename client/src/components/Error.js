import React from 'react'

export default function Error({ error }) {
    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <div class="alert alert-danger" role="alert" style={{ width: '50%' }}>
                {error}
            </div>
        </div>
    )
}
