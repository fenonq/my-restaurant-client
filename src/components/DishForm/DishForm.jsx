import React from 'react';
import './DishForm.css';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';

const DishForm = ({ stopEditing }) => {
    // todo зробити фетчі
    return (
        <div className="dish_form">
            <Input />
            <Input />
            <Input />
            <Input />
            <Button onClick={stopEditing}>New</Button>
        </div>
    );
};

export default DishForm;
