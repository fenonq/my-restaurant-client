import React from 'react';
import Button from '../ui/Button/Button';
import './MenuDishItem.css';
import { addDishToCart } from '../../functions/userRequests';

const MenuDishItem = ({ dish }) => {
    const addDishToCartHandler = () => {
        addDishToCart(dish.id);
    };

    return (
        <div className="dish">
            <img
                className="dish_img"
                alt={`dish-${dish.id}`}
                src={require(`../../static/img/dish-${dish.id}.png`)}
            />
            <p className="dish_text dish_name">{dish.name}</p>
            <p className="dish_text dish_description">{dish.description}</p>
            <p className="dish_text dish_weight">{dish.weight}g</p>
            <p className="dish_text dish_price">{dish.price}₴</p>
            <Button type="submit" onClick={addDishToCartHandler}>
                Add to cart
            </Button>
        </div>
    );
};

export default MenuDishItem;
