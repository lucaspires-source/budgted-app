import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from './IncomeTransaction'
const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transation History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransactions) => (
            <IncomeTransaction incomeTransactions={incomeTransactions}/>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
