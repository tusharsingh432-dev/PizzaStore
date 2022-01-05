import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const cartState = useSelector(state => state.cartReducer);
    // console.log(cartState);
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pizza Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/cart">Cart {cartState.cartItems.length}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link loginlink " href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
