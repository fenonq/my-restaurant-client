import React from 'react';
import OrdersList from '../OrdersList/OrdersList';
import './Orders.css';

const Orders = () => {
    return (
        <div>
            <p className="table_title">All receipts</p>
            <OrdersList />
        </div>
    );
};

export default Orders;
