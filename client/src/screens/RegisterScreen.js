import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions';
export default function RegisterScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();

    function handleRegister() {
        if (password === password2) {
            const user = {
                name,
                email,
                password
            }
            dispatch(registerUser(user))
            // console.log(user)
        } else alert('Password dont match');
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2>Registration</h2>
                    <input type="text" placeholder="Name" className="formElement" required value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="Email" className="formElement" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="Password" className="formElement" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="password" placeholder="Confirm Password" className="formElement" required value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                    <button type="submit" className="butn w-50" onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}
