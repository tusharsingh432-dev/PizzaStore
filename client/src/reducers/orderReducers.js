export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case "PLACE_ORDER_REQUEST": return {
            ...state,
            loading: true
        }

        case "PLACE_ORDER_SUCESS": return {
            ...state,
            loading: false,
            success: true,
            error: false,
            orderId: action.payload
        }

        case "PLACE_ORDER_FAILED": return {
            ...state,
            loading: false,
            success: false,
            error: action.payload
        }

        default: return state
    }
}

export const getAllOrdersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ORDERS_REQUEST': return {
            ...state,
            loading: true
        }
        case 'GET_ORDERS_SUCCESS': return {
            orders: action.payload,
            loading: false
        }
        case 'GET_ORDERS_FAILED': return {
            ...state,
            error: action.payload,
            loading: false
        }
        default: return state
    }
}