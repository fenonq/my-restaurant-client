import jwt_decode from 'jwt-decode';
import AccountReceiptsList from '../AccountReceiptsList/AccountReceiptsList';
import './Account.css';
import AccountSettings from '../AccountSettings/AccountSettings';

const Account = () => {
    const username = jwt_decode(localStorage.getItem('jwt-token')).sub;

    return (
        // <div>
        <div>
            <div className="hello_wrapper">
                <p>Hello {username}!</p>
            </div>
            <AccountSettings />
            <AccountReceiptsList />
        </div>

        //     <div className="table_wrapper"
        //          th:style="${currentUser.roles.iterator().next().toString() != 'CUSTOMER'} ? 'display: none'">
        //         <p className="table_title" th:text="#{account.table.header.yourReceipts}">
        //             Your receipts
        //         </p>
        //         <table className="table">
        //             <thead>
        //             <tr>
        //                 <th></th>
        //                 <th th:text="#{account.table.status}">Status</th>
        //                 <th th:text="#{account.table.orderDate}">Order Date</th>
        //                 <th th:text="#{account.table.dishes}">Dishes</th>
        //                 <th th:text="#{account.table.totalPrice}">Total price</th>
        //             </tr>
        //             </thead>
        //             <tbody>
        //             <tr th:each="receipt : ${user.receipts}">
        //                 <td>
        //                     <img th:src="@{'img/' + ${receipt.status.image}}"
        //                          className="cart_dish_img">
        //                 </td>
        //                 <td th:text="${receipt.status.localizations.get(#locale)} ?
        //                  ${receipt.status.localizations.get(#locale).name} :
        //                  ${receipt.status.localizations.get(languages[0]).name}">Status Name
        //                 </td>
        //                 <td th:text="${#temporals.format(receipt.createDate,'dd-MM-yyyy HH:MM')}">Order Date</td>
        //                 <td>
        //                     <th:block th:each="receiptsDishesEl : ${receiptsDishes}">
        //                         <th:block th:each="dishes : ${receiptsDishesEl.value}">
        //                             <text th:text="${dishes.key.localizations.get(#locale).name} +
        //                  ': ' + ${dishes.key.price} + '&#8372' + ' * ' + ${dishes.value}"></text>
        //                             <br>
        //                         </th:block>
        //                     </th:block>
        //                 </td>
        //                 <td th:text="${receipt.totalPrice} + '&#8372'">TotalPrice</td>
        //             </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default Account;
