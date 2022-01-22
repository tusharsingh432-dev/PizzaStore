// import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/Admin/AdminScreen';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path='/cart' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/orders' component={OrderScreen} />
          <Route path='/admin/' component={AdminScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;