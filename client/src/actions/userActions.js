import axios from 'axios';
export const registerUser = (user) => async dispatch => {
    dispatch({ type: "REGISTER_USER_REQUEST" });

    try {
        const response = await axios.post('/api/users/register', { ...user });
        dispatch({ type: "REGISTER_USER_SUCESS" });
        console.log(response);
    } catch (e) {
        dispatch({ type: "REGISTER_USER_FAILED", payload: e });
    }

}