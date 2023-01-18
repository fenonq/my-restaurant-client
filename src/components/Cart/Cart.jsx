import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getUserCart } from '../../functions/userRequests';
import CartDishesList from '../CartDishesList/CartDishesList';
import Button from '../ui/Button/Button';
import {makeOrder} from "../../functions/receiptRequests";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const [forceRender, setForceRender] = useState(0);
    const [cart, setCart] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getUserCart().then((res) => setCart(res));
    }, [forceRender]);

    if (Object.keys(cart).length === 0) {
        return <p className="cart_empty">Cart is empty!</p>;
    }

    const makeOrderHandler = () => {
        makeOrder().then(() => navigate('/account'));
    }

    let totalPrice = 0;
    Object.entries(cart).forEach(([key, value]) => {
        key = JSON.parse(key);
        totalPrice += key.price * value;
    });

    return (
        <div className="cart_wrapper">
            <CartDishesList
                cart={cart}
                forceRenderObj={{ forceRender, setForceRender }}
            />
            <div className="strip"></div>
            <div className="order_wrapper">
                <p>Total price: {totalPrice}₴</p>
                <Button
                    type="submit"
                    className="order_button"
                    disabled={!totalPrice}
                    onClick={makeOrderHandler}
                >
                    Order
                </Button>
            </div>
        </div>
    );
};

export default Cart;
