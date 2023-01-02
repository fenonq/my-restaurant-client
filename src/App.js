import './App.css';
import { Route, Routes } from 'react-router';
import Login from './components/Auth/Login';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Signup from './components/Auth/Signup';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Header />}>
                        {/*{localStorage.getItem('jwt-token') ? (*/}
                        {/*    <Route path="/signup" element={<Signup />} />*/}
                        {/*) : (*/}
                        {/*    <Route path="/login" element={<Login />} />*/}
                        {/*)}*/}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/menu" element={<Menu />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
