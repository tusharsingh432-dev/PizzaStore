import axios from 'axios';
export const registerUser = (user) => async dispatch => {
    dispatch({ type: "REGISTER_USER_REQUEST" });

    try {
        const response = await axios.post('/api/users/register', { ...user });
        dispatch({ type: "REGISTER_USER_SUCESS" });
        // console.log(response);
        dispatch(loginUser(user));
    } catch (e) {
        dispatch({ type: "REGISTER_USER_FAILED", payload: e });
    }

}

export const loginUser = (user) => async (dispatch, getState) => {
    dispatch({ type: "LOGIN_USER_REQUEST" })

    try {
        const response = await axios.post('/api/users/login', { ...user });
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: response.data });
        const loginState = getState().loginUserReducer;
        localStorage.setItem('userInfo', JSON.stringify(loginState));
        window.location.href = '/'
    } catch (err) {
        dispatch({ type: "LOGIN_USER_ERROR", payload: err })
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
}