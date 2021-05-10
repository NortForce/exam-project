import React from 'react';
import classNames from 'classnames';

import styles from './TransactionTable.module.scss';

const TransactionTable = ({tableData}) => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th>№</th>
          <th>Operation Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((transaction, tableId) => (
          <tr key={transaction.id}>
            <td>{tableId+1}</td>
            <td>{transaction.operationType}</td>
            <td
              
            >
              <span className={classNames({
                [styles.income]: transaction.operationType === 'income',
                [styles.consumption]: transaction.operationType === 'consumption'
              })}>
                {transaction.sum}
              </span> $
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable;
