export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case 'GET_PIZZA_REQUEST': return {
            ...state,
            loading: true
        }
        case 'GET_PIZZA_SUCCESS': return {
            pizzas: action.payload,
            loading: false
        }
        case 'GET_PIZZA_FAILED': return {
            ...state,
            error: action.payload,
            loading: false
        }
        default: return state
    }
}