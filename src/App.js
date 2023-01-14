import './App.css';
import { Route, Routes } from 'react-router';
import Login from './components/Auth/Login';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Signup from './components/Auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import Orders from "./components/Orders/Orders";
import Users from "./components/Users/Users";
import Dishes from "./components/Dishes/Dishes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/dishes" element={<Dishes />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
