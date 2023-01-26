import React from 'react';
import './AccountReceiptItem.css';
import { convertArrayToMap } from '../../functions/convertArrayToMap';

const AccountReceiptItem = ({ receipt }) => {
    const dishes = convertArrayToMap(receipt.dishes);
    const date = new Date(receipt.createDate);

    return (
        <tr>
            <td>
                <img
                    className="cart_dish_img"
                    alt={`status-${receipt.status.id}`}
                    src={`./img/status-${receipt.status.id}.png`}
                />
            </td>
            <td>{receipt.status.name}</td>
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
        </tr>
    );
};

export default AccountReceiptItem;
