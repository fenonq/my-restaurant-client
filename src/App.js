import './App.css';
import { Route, Routes } from 'react-router';
import Login from './components/Auth/Login';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Signup from './components/Auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from "./components/Cart/Cart";

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
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
