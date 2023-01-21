import './App.css';
import { Route, Routes } from 'react-router';
import Login from './components/Auth/Login';
import {BrowserRouter, Navigate} from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Signup from './components/Auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Orders from './components/Orders/Orders';
import Users from './components/Users/Users';
import Dishes from './components/Dishes/Dishes';
import Categories from './components/Categories/Categories';
import ProtectedRoutes from "./components/ProtectedRoutes";
import AccessRoute from "./components/AccessRoute";
import {ROLE_ADMIN, ROLE_MANAGER, ROLE_USER} from "./utils/constants";
import AuthRoute from "./components/AuthRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<AuthRoute to={<Login />} />} />
                    <Route path="/signup" element={<AuthRoute to={<Signup />} />} />
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/" element={<Header />}>
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/account" element={<Account/>} />
                            <Route path="/cart"
                                   element={<AccessRoute role={ROLE_USER}
                                                         to={<Cart />}
                                                         redirect={<Navigate to="/menu"/>} />} />
                            <Route path="/orders"
                                   element={<AccessRoute role={ROLE_MANAGER}
                                                         to={<Orders />}
                                                         redirect={<Navigate to="/menu"/>} />} />
                            <Route path="/users"
                                   element={<AccessRoute role={ROLE_ADMIN}
                                                         to={<Users />}
                                                         redirect={<Navigate to="/menu"/>} />} />
                            <Route path="/dishes"
                                   element={<AccessRoute role={ROLE_ADMIN}
                                                         to={<Dishes />}
                                                         redirect={<Navigate to="/menu"/>} />} />
                            <Route path="/categories"
                                   element={<AccessRoute role={ROLE_ADMIN}
                                                         to={<Categories />}
                                                         redirect={<Navigate to="/menu"/>} />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
