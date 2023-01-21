import React, { useEffect, useState } from 'react';
import './DishForm.css';
import { useForm } from 'react-hook-form';
import { getAllCategories } from '../../functions/categoryRequests';

const DishForm = ({ title, setActive, forceObj, action, dish }) => {
    const { register, handleSubmit } = useForm();
    const { forceRender, setForceRender } = forceObj;
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState(dish ? dish.name : '');
    const [description, setDescription] = useState(
        dish ? dish.description : ''
    );
    const [category, setCategory] = useState(dish ? dish.category : '');
    const [weight, setWeight] = useState(dish ? dish.weight : '');
    const [price, setPrice] = useState(dish ? dish.price : '');

    useEffect(() => {
        getAllCategories().then((res) => setCategories(res));
    }, []);

    const dishNameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const dishDescriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const dishCategoryChangeHandler = (event) => {
        setCategory(categories.find((el) => el.name === event.target.value));
    };

    const dishWeightChangeHandler = (event) => {
        setWeight(event.target.value);
    };

    const dishPriceChangeHandler = (event) => {
        setPrice(event.target.value);
    };

    const submitHandler = () => {
        action({
            id: dish?.id,
            name,
            description,
            category: category ? category : categories[0],
            weight,
            price,
        }).then(() => setForceRender(forceRender + 1));

        setActive(false);
        if (!dish) {
            setName('');
            setDescription('');
            setWeight('');
            setPrice('');
        }
    };

    return (
        <div className="dish-form__wrapper">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(() => submitHandler())}>
                <div className="dish-form__inputs">
                    <input
                        {...register('name', { required: true })}
                        placeholder="Dish name"
                        className="ls-form__input"
                        onChange={dishNameChangeHandler}
                        value={name}
                        autoComplete="off"
                    />
                    <textarea
                        {...register('description', { required: true })}
                        placeholder="Dish description"
                        className="ls-form__input"
                        onChange={dishDescriptionChangeHandler}
                        value={description}
                        autoComplete="off"
                    />
                    <select
                        {...register('category')}
                        onChange={dishCategoryChangeHandler}
                        value={category.name}
                    >
                        {categories.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                    <input
                        {...register('weight', { required: true })}
                        placeholder="Dish weight"
                        className="ls-form__input"
                        onChange={dishWeightChangeHandler}
                        value={weight}
                        autoComplete="off"
                        type="number"
                    />
                    <input
                        {...register('price', { required: true })}
                        placeholder="Dish price"
                        className="ls-form__input"
                        onChange={dishPriceChangeHandler}
                        value={price}
                        autoComplete="off"
                        type="number"
                    />
                    <input
                        disabled={!name}
                        type="submit"
                        value="Submit"
                        className="submit__button"
                    />
                </div>
            </form>
        </div>
    );
};

export default DishForm;
