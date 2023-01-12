import React, { useState } from 'react';
import './CartDishItem.css';
import Button from '../ui/Button/Button';
import {
    addDishToCart,
    removeDishFromCart,
} from '../../functions/userRequests';

const CartDishItem = ({ dish, value, setIsEditing, forceRenderObj }) => {
    const [count, setCount] = useState(value);
    const {forceRender, setForceRender} = forceRenderObj;

    const addDishToCartHandler = () => {
        setCount(count + 1);
        addDishToCart(dish.id);
    };

    const removeDishFromCartHandler = () => {
        setCount(count - 1);
        removeDishFromCart(dish.id);
        setForceRender(forceRender + 1);
    };

    const setIsEditingHandler = () => {
        setIsEditing(false);
    };

    if (count === 0) {
        return <></>;
    }

    return (
        <tr>
            <td>
                <img src="" alt="123" className="cart_dish_img" />
            </td>
            <td>{dish.name}</td>
            <td>{dish.weight}g</td>
            <td>{dish.price}₴</td>
            <td>
                <div className="dish_count">
                    <Button
                        type="submit"
                        onClick={() => {
                            removeDishFromCartHandler();
                            setIsEditingHandler();
                        }}
                    >
                        –
                    </Button>
                    <p>{count}</p>
                    <Button
                        type="submit"
                        onClick={() => {
                            addDishToCartHandler();
                            setIsEditingHandler();
                        }}
                    >
                        +
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default CartDishItem;
