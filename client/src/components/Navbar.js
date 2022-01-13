import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
function Navbar() {
    const cartState = useSelector(state => state.cartReducer);
    const loginState = useSelector(state => state.loginUserReducer);
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
                                {
                                    loginState.isLogin
                                        ? <Dropdown>
                                            <Dropdown.Toggle className="nav-link" id="dropdown-basic"
                                                style={{ "background": "none", "border": "none", "outline": "none" }}
                                            >
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        : <a className="nav-link loginlink " href="/login">Login</a>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
