import React from 'react';
import './OrderItem.css';
import { convertArrayToMap } from '../../functions/convertArrayToMap';
import Button from '../ui/Button/Button';
import {
    cancelOrRenewReceipt,
    changeReceiptStatus,
} from '../../functions/receiptRequests';

const OrderItem = ({ receipt, forceObj }) => {
    const { forceRender, setForceRender } = forceObj;
    const dishes = convertArrayToMap(receipt.dishes);
    const date = new Date(receipt.createDate);

    const changeReceiptStatusHandler = () => {
        changeReceiptStatus(receipt.id).then(() =>
            setForceRender(forceRender + 1)
        );
    };

    const cancelOrRenewReceiptHandler = () => {
        cancelOrRenewReceipt(receipt.id).then(() =>
            setForceRender(forceRender + 1)
        );
    };

    return (
        <tr>
            <td>{receipt.id}</td>
            <td>{receipt.customer.username}</td>
            <td>{receipt.manager?.username}</td>
            {receipt.status.name === 'Done' ||
            receipt.status.name === 'Canceled' ? (
                <td>{receipt.status.name}</td>
            ) : (
                <td>
                    <Button onClick={changeReceiptStatusHandler}>
                        {receipt.status.name}
                    </Button>
                </td>
            )}
            <td>
                <div>{date.toLocaleDateString()}</div>
                <div>{date.toLocaleTimeString()}</div>
            </td>
            <td className="receipts__dishes-info">
                {Object.entries(dishes).map(([key, value]) => {
                    key = JSON.parse(key);
                    return (
                        <div key={key.id}>
                            {key.name + ': ' + key.price + '₴ * ' + value + ' '}
                        </div>
                    );
                })}
            </td>
            <td>{receipt.totalPrice}₴</td>
            {receipt.status.name === 'Canceled' ? (
                <td>
                    <Button onClick={cancelOrRenewReceiptHandler}>Renew</Button>
                </td>
            ) : (
                <td>
                    <Button onClick={cancelOrRenewReceiptHandler}>
                        Cancel
                    </Button>
                </td>
            )}
        </tr>
    );
};

export default OrderItem;
