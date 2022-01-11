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