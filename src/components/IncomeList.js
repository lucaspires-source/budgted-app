import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransactions) => (
          <li className="transaction">
            <span className="transaction-text">{incomeTransactions.incomeText}</span>
            <span className="transaction-amount">${incomeTransactions.incomeAmount}</span>
            <button className="delete-btn">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
