import React, { useEffect, useState } from 'react';
import { getPageableDishes } from '../../functions/dishRequests';
import MenuDishItem from '../MenuDishItem/MenuDishItem';
import './MenuDishesList.css';

const MenuDishesList = ({ page, size, sort, pageNumChange }) => {
    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPageableDishes(page, size, sort).then((res) => {
            setDishes(res.content.filter((el) => el.visible));
            setIsLoading(false);
            const getDishesLength = getPageableDishes(0, 1000).then(
                (res) => res.content.length
            );
            getDishesLength.then((res) => pageNumChange(Math.ceil(res / size)));
        });
    }, [page, pageNumChange, size, sort]);
    console.log(dishes);

    return (
        <div className="dishes_wrapper">
            <div className="dishes">
                {isLoading ? (
                    <h1>Loading..</h1>
                ) : (
                    dishes.map((dish) => (
                        <MenuDishItem key={dish.id} dish={dish} />
                    ))
                )}
            </div>
        </div>
    );
};

export default MenuDishesList;
