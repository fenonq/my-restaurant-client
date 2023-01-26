import React from 'react';
import './CartDishItem.css';
import Button from '../ui/Button/Button';
import {
    addDishToCart,
    removeDishFromCart,
} from '../../functions/userRequests';

const CartDishItem = ({ dish, value, forceRenderObj }) => {
    const { forceRender, setForceRender } = forceRenderObj;

    const addDishToCartHandler = () => {
        addDishToCart(dish.id).then(() => setForceRender(forceRender + 1));
    };

    const removeDishFromCartHandler = () => {
        removeDishFromCart(dish.id).then(() => setForceRender(forceRender + 1));
    };

    if (value === 0) {
        return <></>;
    }

    return (
        <tr>
            <td>
                <img
                    className="cart_dish_img"
                    alt={`dish-${dish.id}`}
                    src={`./img/dish-${dish.id}.png`}
                />
            </td>
            <td>{dish.name}</td>
            <td>{dish.weight}g</td>
            <td>{dish.price}₴</td>
            <td>
                <div className="dish_count">
                    <Button type="submit" onClick={removeDishFromCartHandler}>
                        –
                    </Button>
                    <p>{value}</p>
                    <Button type="submit" onClick={addDishToCartHandler}>
                        +
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default CartDishItem;
