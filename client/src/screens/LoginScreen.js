import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function LoginScreen() {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginUserReducer);
    const { isLogin, isError, loading } = loginState;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin() {
        const user = {
            email,
            password
        }
        // console.log(user);
        dispatch(loginUser(user));
    }
    return (
        <div>
            {isLogin && <Success message="Login Successful" />}
            {isError && <Error error="No such user" />}
            {loading ? <Loading /> :
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" className="formElement" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" placeholder="Password" className="formElement" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button type="submit" className="butn w-50 h-40 mb-3 mt-2" onClick={handleLogin}>Login</button>
                        <br></br>
                        <a href='/register' style={{ color: 'black' }}>Click here to register</a>
                    </div>
                </div>
            }
        </div>
    )
}
