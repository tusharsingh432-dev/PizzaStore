import React, { useState, useEffect } from 'react'
import Pizzas from '../components/Pizzas'
// import pizzas from '../pizzasdata'
import { getAllPizzas } from '../actions/pizzaActions'
import { useDispatch, useSelector } from 'react-redux'
function HomeScreen() {
    const dispatch = useDispatch();

    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { loading, error, pizzas } = pizzaState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [])
    return (
        <div>
            <div className='row'>
                {loading ? <h1>Loading...</h1> : error ? <h1>Something Went Wrong...</h1> :
                    pizzas.map(pizza => {
                        return <div key={pizza.name} className='col-md-4'>
                            <div>
                                <Pizzas pizza={pizza} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default HomeScreen
