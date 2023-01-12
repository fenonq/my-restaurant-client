import React, { useEffect, useState } from 'react';
import Button from '../ui/Button/Button';
import {getUserCart} from '../../functions/userRequests';
import './CartOrder.css';
import Input from "../ui/Input/Input";
import {makeOrder} from "../../functions/receiptRequests";

const CartOrder = ({ stopEditing }) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        getUserCart().then((res) => setCart(res));
    }, []);

    let totalPrice = 0;
    Object.entries(cart).forEach(([key, value]) => {
        key = JSON.parse(key);
        totalPrice += key.price * value;
    });

    const makeOrderHandler = () => {
        makeOrder();
    }

    const onClickHandler = () => {
        stopEditing();
        makeOrderHandler();
    }

    return (
        <>
            <div className="order_form">
                <div className="card_form">
                    <div className="new-expense__control">
                        <label>Card: </label>
                        <Input
                            type="text"
                            placeholder="Not implemented.."
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>MM / YY:</label>
                        <Input
                            type="text"
                            placeholder="Not implemented.."
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>CVC:</label>
                        <Input
                            type="text"
                            placeholder="Not implemented.."
                        />
                    </div>
                </div>
                <p>Total price: {totalPrice}</p>
                <Button
                    type="submit"
                    className="order_button"
                    disabled={!totalPrice}
                    onClick={onClickHandler}
                >
                    Order
                </Button>
            </div>
        </>
    );
};

export default CartOrder;
