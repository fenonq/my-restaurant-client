import React from 'react';
import { changeDishVisibility } from '../../functions/dishRequests';
import Button from '../ui/Button/Button';

const DishItem = ({ dish, forceObj }) => {
    const { forceRender, setForceRender } = forceObj;

    const changeVisibilityHandler = () => {
        changeDishVisibility(dish.id);
        setTimeout(() => {
            setForceRender(forceRender + 1);
        }, 50);
    };

    return (
        <tr>
            <td>{dish.id}</td>
            <td>image</td>
            <td>{dish.name}</td>
            <td>{dish.description}</td>
            <td>{dish.category.name}</td>
            <td>{dish.weight}g</td>
            <td>{dish.price}₴</td>
            <td>
                <Button onClick={changeVisibilityHandler}>
                    {dish.visible ? 'Visible' : 'Invisible'}
                </Button>
            </td>
            <td>
                <Button>Edit</Button>
            </td>
        </tr>
    );
};

export default DishItem;
