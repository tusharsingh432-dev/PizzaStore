import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';


export default function LoginScreen() {
    const dispatch = useDispatch();
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
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" className="formElement" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="Password" className="formElement" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" className="butn w-50" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
