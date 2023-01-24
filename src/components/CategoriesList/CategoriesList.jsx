import React, { useEffect, useState } from 'react';
import './CategoriesList.css';
import { getAllCategories } from '../../functions/categoryRequests';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesList = ({ forceObj }) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { forceRender, setForceRender } = forceObj;

    useEffect(() => {
        getAllCategories().then((res) => setCategories([...res]));
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <CategoryItem
                                category={category}
                                key={category.id}
                                forceObj={{ forceRender, setForceRender }}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CategoriesList;
