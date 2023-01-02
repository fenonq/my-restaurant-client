import React, { useEffect, useState } from 'react';
import { getDishes } from '../../functions/dishRequest';
import MenuDishItem from '../MenuDishItem/MenuDishItem';
import './MenuDishesList.css';

const getDishesLength = getDishes(0, 1000).then((res) => res.content.length);

const MenuDishesList = ({ page, size, sort, pageNumChange }) => {
    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDishes(page, size, sort).then((res) => {
            setDishes(res.content.map((el) => el));
            setIsLoading(false);
            getDishesLength.then((res) => pageNumChange(Math.ceil(res / size)));
        });
    }, [page, pageNumChange, size, sort]);

    return (
        <div className="dishes_wrapper">
            <div className="dishes">
                {isLoading ? (
                    <h1>Loading..</h1>
                ) : (
                    dishes.map((dish) => <MenuDishItem key={dish.id} dish={dish} />)
                )}
            </div>
        </div>
    );
};

export default MenuDishesList;
