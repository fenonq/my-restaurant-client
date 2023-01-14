import React, { useState } from 'react';
import './Dishes.css';
import DishesList from '../DishesList/DishesList';
import DishForm from '../DishForm/DishForm';
import Button from '../ui/Button/Button';

const Dishes = () => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="setting-dishes__wrapper">
            <p className="table_title">All dishes</p>
            <DishesList />
            <div className="strip" />
            {isEditing ? (
                <DishForm stopEditing={stopEditingHandler} />
            ) : (
                <Button onClick={startEditingHandler}>New</Button>
            )}
        </div>
    );
};

export default Dishes;
