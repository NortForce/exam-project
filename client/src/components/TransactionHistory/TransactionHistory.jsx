import React from 'react';
import * as _ from 'lodash';

import styles from "./TransactionHistory.module.scss";
import TransactionTable from './TransactionTable/TransactionTable';
import TransactionHistorySidebar from './TransactionHistorySidebar/TransactionHistorySidebar';

const TransactionHistory = (props) => {
  
  const tableData = [
    {id: 1, type: "income", amount: 200},
    {id: 2, type: "spend", amount: 200},
    {id: 3, type: "income", amount: 200},
  ]

  return (
    <main className={styles.container}>
      
      <TransactionHistorySidebar />

      <section className={styles.infoPanel}>
        <h2 className={styles.heading}>Transaction history</h2>
        { !_.isEmpty(tableData)
          ? <TransactionTable tableData={tableData} />
          :<p className={styles.message}>There was no transactions on this account</p>
        }
      </section>
    </main>
  );
}

export default TransactionHistory;
