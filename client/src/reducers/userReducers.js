export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "REGISTER_USER_REQUEST": return {
            loading: true
        }

        case "REGISTER_USER_SUCESS": return {
            loading: false,
            sucess: true
        }

        case "REGISTER_USER_FAILED": return {
            loading: false,
            error: action.payload
        }

        default: return state
    }
}

export const loginUserReducer = (state = { isLogin: false }, action) => {
    switch (action.type) {
        case "LOGIN_USER_REQUEST": return {
            ...state, loading: true
        }
        case "LOGIN_USER_SUCCESS": return {
            ...state,
            loading: false,
            isLogin: true,
            user: action.payload
        }
        case "LOGIN_USER_ERROR": return {
            ...state,
            loading: false,
            isLogin: false,
            error: action.payload
        }
        default: return state
    }
}