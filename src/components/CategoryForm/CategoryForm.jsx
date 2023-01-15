import React, { useState } from 'react';
import './CategoryForm.css';
import { useForm } from 'react-hook-form';

const CategoryForm = ({ title, setActive, forceObj, action, category }) => {
    const { register, handleSubmit } = useForm();
    const { forceRender, setForceRender } = forceObj;
    const [categoryName, setCategoryName] = useState(category?.name.toString());

    const categoryNameChangeHandler = (event) => {
        setCategoryName(event.target.value);
    };

    const submitHandler = (categoryName) => {
        !category ? action(categoryName) : action(category.id, categoryName);
        setTimeout(() => {
            setForceRender(forceRender + 1);
        }, 50);

        setActive(false);
        if (!category) {
            setCategoryName('');
        }
    };

    return (
        <div className="category-form__wrapper">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit((data) => submitHandler(data.name))}>
                <div className="category-form__inputs">
                    <input
                        {...register('name')}
                        placeholder="Category name"
                        className="ls-form__input"
                        onChange={categoryNameChangeHandler}
                        value={categoryName}
                        autoComplete="off"
                    />
                    <input
                        disabled={!categoryName}
                        type="submit"
                        value="New"
                        className="submit__button"
                    />
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;
