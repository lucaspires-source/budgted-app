import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";
const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransactions) => (
          <ExpenseTransaction
            key={expenseTransactions.id}
            expenseTransactions={expenseTransactions}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
