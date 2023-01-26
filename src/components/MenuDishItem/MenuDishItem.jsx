import React from 'react';
import Button from '../ui/Button/Button';
import './MenuDishItem.css';
import { addDishToCart } from '../../functions/userRequests';
import { getRoles } from '../../functions/authUtils';

const MenuDishItem = ({ dish }) => {
    const roles = getRoles();

    const addDishToCartHandler = () => {
        addDishToCart(dish.id);
    };

    return (
        <div className="dish">
            <img
                className="dish_img"
                src={`./img/dish-${dish.id}.png`}
                alt={`dish-${dish.id}`}
            />
            <p className="dish_text dish_name">{dish.name}</p>
            <p className="dish_text dish_description">{dish.description}</p>
            <p className="dish_text dish_weight">{dish.weight}g</p>
            <p className="dish_text dish_price">{dish.price}₴</p>
            <Button
                type="submit"
                onClick={addDishToCartHandler}
                style={{ display: roles['ROLE_USER'] ? 'block' : 'none' }}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default MenuDishItem;
