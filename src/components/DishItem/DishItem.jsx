import React, { useState } from 'react';
import { changeDishVisibility, updateDish } from '../../functions/dishRequests';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import DishForm from '../DishForm/DishForm';

const DishItem = ({ dish, forceObj }) => {
    const { forceRender, setForceRender } = forceObj;
    const [active, setActive] = useState(false);

    const changeVisibilityHandler = () => {
        changeDishVisibility(dish.id).then(() =>
            setForceRender(forceRender + 1)
        );
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
                <Button onClick={() => setActive(true)}>Edit</Button>
                <Modal activeObj={{ active, setActive }}>
                    <DishForm
                        title="Edit Dish"
                        forceObj={{ forceRender, setForceRender }}
                        setActive={setActive}
                        action={updateDish}
                        dish={dish}
                    />
                </Modal>
            </td>
        </tr>
    );
};

export default DishItem;
