import React, { useState } from 'react';
import {
    changeCategoryVisibility,
    updateCategory,
} from '../../functions/categoryRequests';
import './CategoryItem.css';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import CategoryForm from '../CategoryForm/CategoryForm';

const CategoryItem = ({ category, forceObj }) => {
    const { forceRender, setForceRender } = forceObj;
    const [active, setActive] = useState(false);

    const changeVisibilityHandler = () => {
        changeCategoryVisibility(category.id);
        setTimeout(() => {
            setForceRender(forceRender + 1);
        }, 50);
    };

    return (
        <tr>
            <td>{category.id}</td>
            <td>image</td>
            <td>{category.name}</td>
            <td>
                <Button onClick={changeVisibilityHandler}>
                    {category.visible ? 'Visible' : 'Invisible'}
                </Button>
            </td>
            <td>
                <Button onClick={() => setActive(true)}>Edit</Button>
                <Modal activeObj={{ active, setActive }}>
                    <CategoryForm
                        title="Edit Category"
                        forceObj={{ forceRender, setForceRender }}
                        setActive={setActive}
                        action={updateCategory}
                        category={category}
                    />
                </Modal>
            </td>
        </tr>
    );
};

export default CategoryItem;
