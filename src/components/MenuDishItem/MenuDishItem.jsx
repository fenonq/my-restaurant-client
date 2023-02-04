import React, { useState } from 'react';
import Button from '../ui/Button/Button';
import './MenuDishItem.css';
import { addDishToCart } from '../../functions/userRequests';
import { getRoles } from '../../functions/authUtils';
import {AiOutlineCheck} from "react-icons/ai";

const MenuDishItem = ({ dish }) => {
    const roles = getRoles();
    const [isAdded, setIsAdded] = useState(false);

    const addDishToCartHandler = () => {
        addDishToCart(dish.id).then(() => setIsAdded(true));
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
            {isAdded ? (
                <AiOutlineCheck className="added_tick" />
            ) : (
                <Button
                    type="submit"
                    onClick={addDishToCartHandler}
                    style={{ display: roles['ROLE_USER'] ? 'block' : 'none' }}
                >
                    Add to cart
                </Button>
            )}
        </div>
    );
};

export default MenuDishItem;
