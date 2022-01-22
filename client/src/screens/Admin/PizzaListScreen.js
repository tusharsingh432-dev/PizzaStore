import React, { useEffect } from 'react';

import { getAllPizzas } from '../../actions/pizzaActions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function PizzaListScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [])

  const pizzaState = useSelector(state => state.getAllPizzasReducer)
  const { loading, error, pizzas } = pizzaState;
  return (
    <div className='row' style={{ margin: "auto" }}>
      {loading ? <Loading /> : error ? <Error error="Something must have gone wrong" /> :
        <table style={{ textAlign: "left" }} className="table">
          <thead style={{ backgroundColor: 'aliceblue' }}>
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map(pizza => {
              return <tr key={pizza.name}>
                <td>{pizza.name}</td>
                <td>
                  Small: {pizza.prices[0]['small']} <br />
                  Medium: {pizza.prices[0]['medium']}<br />
                  Large: {pizza.prices[0]['large']}<br />
                </td>
                <td>{pizza.category.toUpperCase()}</td>
                <td>
                  <i className="fas fa-trash-alt m-2"></i>
                  <i className="fas fa-edit"></i>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      }
    </div>
  )
}
