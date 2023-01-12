import React, { useEffect, useState } from 'react';
import { getReceipts } from '../../functions/receiptRequests';
import AccountReceiptItem from '../AccountReceiptItem/AccountReceiptItem';
import './AccountReceiptsList.css';

const AccountReceiptsList = () => {
    const [receipts, setReceipts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReceipts().then((res) => setReceipts(res.map((el) => el)));
        setIsLoading(false);
    }, []);

    return (
        <div className="table_wrapper">
            <p className="table_title">Your receipts</p>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Status</th>
                            <th>Order Date</th>
                            <th>Dishes</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt) => (
                            <AccountReceiptItem
                                receipt={receipt}
                                key={receipt.id}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AccountReceiptsList;
