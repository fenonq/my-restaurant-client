import React from 'react';
import Button from '../ui/Button/Button';
import './MenuDishItem.css';
import {logout} from "../../functions/userRequests";

const MenuDishItem = ({ dish }) => {
    console.log(dish);
    return (
        <div className="dish">
            <img className="dish_img" alt="123" />
            <p className="dish_text dish_name">{dish.name}</p>
            <p className="dish_text dish_description">{dish.description}</p>
            <p className="dish_text dish_weight">{dish.weight}g</p>
            <p className="dish_text dish_price">{dish.price}$</p>
            <Button type="submit" onClick={logout}>Add to cart</Button>
        </div>
    );
};

export default MenuDishItem;
