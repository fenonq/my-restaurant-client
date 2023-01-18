import React, { useState } from 'react';
import './CategoryForm.css';
import { useForm } from 'react-hook-form';

const CategoryForm = ({ title, setActive, forceObj, action, category }) => {
    const { register, handleSubmit } = useForm();
    const { forceRender, setForceRender } = forceObj;
    const [name, setName] = useState(category ? category.name : '');

    const categoryNameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const submitHandler = (name) => {
        action({ id: category?.id, name }).then(() =>
            setForceRender(forceRender + 1)
        );

        setActive(false);
        if (!category) {
            setName('');
        }
    };

    return (
        <div className="category-form__wrapper">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit((data) => submitHandler(data.name))}>
                <div className="category-form__inputs">
                    <input
                        {...register('name', { required: true })}
                        placeholder="Category name"
                        className="ls-form__input"
                        onChange={categoryNameChangeHandler}
                        value={name}
                        autoComplete="off"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="submit__button"
                    />
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;
