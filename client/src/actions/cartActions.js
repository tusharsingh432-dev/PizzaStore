export const addToCart = (pizza, variant, quantity) => (dispatch, getState) => {

    var cartItem = {
        element: pizza,
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        variant: variant,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][variant]
    }

    if (quantity > 10) alert('Max Allowed is 10');
    else dispatch({ type: 'ADD_TO_CART', payload: cartItem });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

export const removeFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizza });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.removeItem('cartItems', JSON.stringify(cartItems))
}