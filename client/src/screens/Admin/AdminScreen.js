import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Routes, Switch } from 'react-router-dom';
import AddPizzaScreen from './AddPizzaScreen';
import OrderListScreen from './OrderListScreen';
import PizzaListScreen from './PizzaListScreen';
import UserListScreen from './UserListScreen';


export default function AdminScreen() {
    ///admin check////////////////////////////////
    const loginState = useSelector(state => state.loginUserReducer);
    const user = loginState.user;
    useEffect(() => {
        if (!user.isAdmin) {
            // alert('You dont have permission to access this page.');
            window.location.href = '/'
        }
    }, [])
    if (!user.isAdmin) return <>403: Forbidden</>

    ///Admin page/////////////////////
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2>Admin Panel</h2>
                    <ul className="adminfunctions">
                        <li><Link to={'/admin/userList'}>Users</Link></li>
                        <li><Link to={'/admin/pizzaList'}>Pizzas</Link></li>
                        <li><Link to={'/admin/addPizza'}>Add Pizza</Link></li>
                        <li><Link to={'/admin/orderList'}>Orders</Link></li>
                    </ul>

                    <Switch>
                        <Route path='/admin/userList' component={UserListScreen} />
                        <Route path='/admin/orderList' component={OrderListScreen} />
                        <Route path='/admin/addPizza' component={AddPizzaScreen} />
                        <Route path='/admin/pizzaList' component={PizzaListScreen} />
                    </Switch>

                </div>
            </div>
        </div>
    )
}
