import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';
function Navbar() {
    const cartState = useSelector(state => state.cartReducer);
    const loginState = useSelector(state => state.loginUserReducer);
    // console.log(cartState);
    function handleLogout() {
        dispatch(logoutUser());
    }
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pizza Store</a>
                    <button className="navbar-toggler butn" type="button" data-bs-toggle="collapse"
                        // style={{ backgroundColor: "black" }}
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/cart">Cart {cartState.cartItems.length}</a>
                            </li>
                            <li className="nav-item">
                                {
                                    loginState.isLogin
                                        ? <div className="justify-content-center w-100" style={{ margin: "auto" }}>
                                            <Dropdown>
                                                <Dropdown.Toggle className="nav-link" id="dropdown-basic"
                                                    style={{ "background": "none", "border": "none", "outline": "none", margin: "auto" }}
                                                >
                                                    {loginState.user.name}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu style={{ margin: "auto" }}>
                                                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

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
