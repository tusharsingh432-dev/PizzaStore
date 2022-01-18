import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
export default function RegisterScreen() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const registerState = useSelector(state => state.registerUserReducer);
    const { loading, error, success } = registerState;

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
            {success && <Success message="Login Successful" />}
            {loading ? <Loading /> : error ? <Error error="Something must have gone wrong" /> :
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                        <h2>Registration</h2>
                        <input type="text" placeholder="Name" className="formElement" required value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" placeholder="Email" className="formElement" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" placeholder="Password" className="formElement" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="password" placeholder="Confirm Password" className="formElement" required value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                        <button type="submit" className="butn w-50 h-40 mb-3 mt-2" onClick={handleRegister}>Register</button>
                        <br></br>
                        <a href='/login' style={{ color: 'black' }}>Click here to login</a>
                    </div>
                </div>
            }
        </div >
    )
}
