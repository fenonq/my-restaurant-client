import React, { useEffect, useState } from 'react';
import { getAllReceipts } from '../../functions/receiptRequests';
import OrderItem from '../OrderItem/OrderItem';
import './OrdersList.css';

const OrdersList = () => {
    const [receipts, setReceipts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [forceRender, setForceRender] = useState(0);

    useEffect(() => {
        getAllReceipts().then((res) => setReceipts([...res]));
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
                            <th>Customer</th>
                            <th>Manager</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Dishes</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt) => (
                            <OrderItem
                                receipt={receipt}
                                key={receipt.id}
                                forceObj={{ forceRender, setForceRender }}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrdersList;
