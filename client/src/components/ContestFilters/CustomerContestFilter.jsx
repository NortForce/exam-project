import React from 'react';
import classNames from "classnames";
import { useSelector, useDispatch } from 'react-redux';
import {setNewCustomerFilter} from 'actions/actionCreator';
import CONSTANTS from 'constants.js';
import styles from "./CustomerContestFilter.module.scss";

const CustomerContestFilter = (props) => {

  const dispatch = useDispatch();
  const setCustomerFilter = filter => dispatch(setNewCustomerFilter(filter));

  const {customerFilter} = useSelector(({contestsList}) => contestsList);

  const isSelectedActiveFilter = CONSTANTS.CONTEST_STATUS_ACTIVE === customerFilter;
  const isSelectedFinishedFilter = CONSTANTS.CONTEST_STATUS_FINISHED === customerFilter;
  const isSelectedPendingFilter = CONSTANTS.CONTEST_STATUS_PENDING === customerFilter;

  const activeFilterStyles = classNames({
    [styles.activeFilter]: isSelectedActiveFilter,
    [styles.filter]: !isSelectedActiveFilter
  });

  const finishedFilterStyles = classNames({
    [styles.activeFilter]: isSelectedFinishedFilter,
    [styles.filter]: !isSelectedFinishedFilter
  });

  const pendingFilterStyles = classNames({
    [styles.activeFilter]: isSelectedPendingFilter,
    [styles.filter]: !isSelectedPendingFilter
  });
  
  return (
    <section className={styles.filterContainer}>
      <button
        onClick={() => setCustomerFilter(CONSTANTS.CONTEST_STATUS_ACTIVE)}
        className={activeFilterStyles}
      >
        Active Contests
      </button>
      <button
        onClick={() => setCustomerFilter(CONSTANTS.CONTEST_STATUS_FINISHED)}
        className={finishedFilterStyles}
      >
        Completed contests
      </button>
      <button
        onClick={() => setCustomerFilter(CONSTANTS.CONTEST_STATUS_PENDING)}
        className={pendingFilterStyles}
      >
        Inactive contests
      </button>
    </section>
  )
}

export default CustomerContestFilter;
