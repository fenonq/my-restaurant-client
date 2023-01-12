import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getUserCart } from '../../functions/userRequests';
import CartDishesList from '../CartDishesList/CartDishesList';
import CartOrder from '../CartOrder/CartOrder';
import Button from '../ui/Button/Button';

const Cart = () => {
    const [forceRender, setForceRender] = useState(0);
    const [cart, setCart] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getUserCart().then((res) => setCart(res));
    }, [forceRender]);

    if (Object.keys(cart).length === 0) {
        return <p className="cart_empty">Cart is empty!</p>;
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="cart_wrapper">
            <CartDishesList
                cart={cart}
                setIsEditing={setIsEditing}
                forceRenderObj={{ forceRender, setForceRender }}
            />
            <div className="strip"></div>
            {!isEditing && <Button onClick={startEditingHandler}>Order</Button>}

            {isEditing && (
                <CartOrder
                    stopEditing={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default Cart;
