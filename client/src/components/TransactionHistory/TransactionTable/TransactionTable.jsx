import React from 'react';
import classNames from 'classnames';

import styles from './TransactionTable.module.scss';

const TransactionTable = ({tableData}) => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th>№</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td
              
            >
              <span className={classNames({
                [styles.income]: transaction.type === 'income',
                [styles.consumption]: transaction.type === 'spend'
              })}>
                {transaction.amount}
              </span> $
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable;
