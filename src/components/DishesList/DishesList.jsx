import React, { useEffect, useState } from 'react';
import './DishesList.css';
import { getDishes } from '../../functions/dishRequests';
import DishItem from '../DishItem/DishItem';

const DishesList = ({ forceObj }) => {
    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { forceRender, setForceRender } = forceObj;

    useEffect(() => {
        getDishes(0, 1000).then((res) => setDishes([...res.content]));
        setIsLoading(false);
    }, [forceRender]);

    return (
        <div className="table_wrapper">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dishes.map((dish) => (
                            <DishItem
                                dish={dish}
                                key={dish.id}
                                forceObj={{ forceRender, setForceRender }}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DishesList;
