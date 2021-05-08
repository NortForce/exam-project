import React from 'react';
import {Link} from 'react-router-dom';
import styles from './TransactionHistorySidebar.module.scss';

const TransactionHistorySidebar = () => {
  return (
    <section className={styles.container}>
      <Link to='/dashboard' className={styles.toSidebarLink}>
        Return to Dashboard
      </Link>
    </section>
  );
}

export default TransactionHistorySidebar;
