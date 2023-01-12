import React from 'react';
import './AccountReceiptItem.css';

const AccountReceiptItem = ({ receipt }) => {
    const dishes = receipt.dishes.reduce((acc, el) => {
        if (acc.hasOwnProperty(JSON.stringify(el))) {
            acc[JSON.stringify(el)] += 1;
        } else {
            acc[JSON.stringify(el)] = 1;
        }
        return acc;
    }, {});

    const date = new Date(receipt.createDate);

    return (
        <tr>
            <td>
                <img src="" alt="123" className="cart_dish_img" />
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
