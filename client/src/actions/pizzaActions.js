import axios from 'axios'

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZA_REQUEST' });
    try {
        const response = await axios.get('/api/pizzas/getAllPizzas');
        dispatch({ type: 'GET_PIZZA_SUCCESS', payload: response.data });
    } catch (err) {
        dispatch({ type: 'GET_PIZZA_FAILED', payload: err });
    }
}

export const filterPizzas = (searchKey, dishType) => async dispatch => {
    dispatch({ type: 'GET_PIZZA_REQUEST' });
    var pizzas;
    // console.log(searchKey + ' ' + dishType);
    try {
        const response = await axios.get('/api/pizzas/getAllPizzas');
        pizzas = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey));
        if (dishType != 'all') pizzas = pizzas.filter(pizza => {
            console.log(pizza.category)
            return pizza.category === dishType
        })
        dispatch({ type: 'GET_PIZZA_SUCCESS', payload: pizzas });
    } catch (err) {
        dispatch({ type: 'GET_PIZZA_FAILED', payload: err });
    }
} 