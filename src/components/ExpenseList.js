import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransactions) => (
          <li className="transaction">
            <span className="transaction-text">
              {expenseTransactions.expenseText}
            </span>
            <span className="transaction-amount">
              ${expenseTransactions.expenseAmount}
            </span>
            <button className="delete-btn">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
