import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from "./TransactionHistory.module.scss";
import TransactionTable from './TransactionTable/TransactionTable';
import TransactionHistorySidebar from './TransactionHistorySidebar/TransactionHistorySidebar';
import {getUserTxHistoryRequest} from 'actions/actionCreator'
import Spinner from 'components/Spinner/Spinner';

const TransactionHistory = (props) => {

  const dispatch = useDispatch();

  const {
    transactionData: {userTransactionHistory, aggregatedMoneyMovement},
    isFetching,
    error
  } = useSelector(({txHistory})=> txHistory);

  useEffect(()=> {
    dispatch(getUserTxHistoryRequest({}));
  }, [])
  
  return (
    <main className={styles.container}>
      
      <TransactionHistorySidebar />

      <section className={styles.infoPanel}>
        <h2 className={styles.heading}>Transaction history</h2>
        { isFetching ? <Spinner/>
          : error ? <p className={styles.message}>Error happened</p>
            : <div>
                <TransactionTable tableData={userTransactionHistory} />
                <div className={styles.totalContainer}>
                  <div>Total income:&nbsp;
                    <span className={styles.income}>{aggregatedMoneyMovement.income || 0}</span>$
                  </div>
                  <div>Total consumption:&nbsp;
                  <span className={styles.consumption}>{aggregatedMoneyMovement.consumption || 0}</span>$
                  </div>
                </div>
              </div>
        }
      </section>
    </main>
  );
}

export default TransactionHistory;
