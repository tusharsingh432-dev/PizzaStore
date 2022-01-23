import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions';
export default function Filter() {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('');
    const [dishType, setDishType] = useState('all');
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3">
                    <input type="text" className="formElement w-100" placeholder='Search' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <select type="text" className="formElement w-100" value={dishType} onChange={(e) => setDishType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button type="text" className="butn w-100" style={{ margin: "15px" }} onClick={() => dispatch(filterPizzas(searchKey, dishType))}>Search</button>
                </div>
            </div>
        </div>

    )
}
