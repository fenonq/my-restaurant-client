import React from 'react';
import CartDishItem from '../CartDishItem/CartDishItem';
import './CartDishesList.css';

const CartDishesList = ({ cart, setIsEditing, forceRenderObj }) => {
    return (
        <>
            <p className="table_title">Your cart</p>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart &&
                        Object.entries(cart).map(([key, value]) => {
                            key = JSON.parse(key);
                            return (
                                <CartDishItem
                                    forceRenderObj={forceRenderObj}
                                    setIsEditing={setIsEditing}
                                    dish={key}
                                    value={value}
                                    key={key.id}
                                />
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default CartDishesList;
