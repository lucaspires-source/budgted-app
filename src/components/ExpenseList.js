import React from 'react'

const ExpenseList = () => {
    return (
        <div className="transactions transactions-income">
            <h2>Transation History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text"> Salary</span>
                    <span className="transaction-amount"> $5.000,00</span>
                    <button className="delete-btn">
                        <i className="fas faa-trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
