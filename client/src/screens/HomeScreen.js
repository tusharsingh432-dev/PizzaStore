import React, { useState, useEffect } from 'react'
import Pizzas from '../components/Pizzas'
// import pizzas from '../pizzasdata'
import { getAllPizzas } from '../actions/pizzaActions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
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
                {loading ? <Loading /> : error ? <Error error="Something must have gone wrong" /> :
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
