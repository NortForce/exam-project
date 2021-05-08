import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string';

import { setNewCreatorFilter } from 'actions/actionCreator'
import styles from './CreatorContestFilter.module.scss'
import history from 'browserHistory';

const types = ['', 'name,tagline,logo', 'name', 'tagline', 'logo', 'name,tagline', 'logo,tagline', 'name,logo'];

const CreatorContestFilter = (props) => {
  
  const dispatch = useDispatch();
  const setCreatorFilter = filter => dispatch(setNewCreatorFilter(filter));

  const { 
    creatorFilter,
    dataForContest
  } = useSelector(({ contestsList, dataForContest }) => ({...contestsList, dataForContest}))

  const changePredicate = ({ name, value }) => {
    setCreatorFilter({ [name]: value === 'Choose industry' ? null : value })
    parseParamsToUrl({
      ...creatorFilter,
      ...{ [name]: value === 'Choose industry' ? null : value }
    })
  }

  const parseParamsToUrl = (creatorFilter) => {
    const obj = {};
    Object.keys(creatorFilter).forEach(el => {
        if (creatorFilter[el])
            obj[el] = creatorFilter[el];
    });
    history.push('/Dashboard?' + queryString.stringify(obj));
  };

  const renderSelectType = () => {
    const array = []
    types.forEach(
      (el, i) =>
        !i || array.push(
          <option key={i - 1} value={el}>
            {el}
          </option>
        )
    )
    return (
      <select
        onChange={({ target }) =>
          changePredicate({
            name: 'typeIndex',
            value: types.indexOf(target.value)
          })
        }
        value={types[creatorFilter.typeIndex]}
        className={styles.input}
      >
        {array}
      </select>
    )
  }

  const renderIndustryType = () => {
    const array = [];
    const {industry} = dataForContest.data;
    array.push(<option key={0} value={null}>Choose industry</option>);
    industry.forEach((industry, i) => array.push(<option key={i + 1} value={industry}>{industry}</option>));
    return (
        <select onChange={({target}) => changePredicate({
            name: 'industry',
            value: target.value
        })} value={creatorFilter.industry} className={styles.input}>
            {array}
        </select>
    );
  };

  return (
    
    <section className={styles.filterContainer}>
      <h2 className={styles.headerFilter}>Filter Results</h2>
      <div className={styles.inputsContainer}>
        <button
          onClick={() =>
            changePredicate({
              name: 'ownEntries',
              value: !creatorFilter.ownEntries
            })
          }
          className={classNames(styles.myEntries, {
            [styles.activeMyEntries]: creatorFilter.ownEntries
          })}
        >
          My Entries
        </button>
        <div className={styles.inputContainer}>
          <span>By contest type</span>
          {renderSelectType()}
        </div>
        <div className={styles.inputContainer}>
          <span>By contest ID</span>
          <input
            type='text'
            onChange={({ target }) =>
              changePredicate({
                name: 'contestId',
                value: target.value
              })
            }
            name='contestId'
            value={creatorFilter.contestId}
            className={styles.input}
          />
        </div>
        {!dataForContest.isFetching && (
          <div className={styles.inputContainer}>
            <span>By industry</span>
            {renderIndustryType()}
          </div>
        )}
        <div className={styles.inputContainer}>
          <span>By amount award</span>
          <select
            onChange={({ target }) =>
              changePredicate({
                name: 'awardSort',
                value: target.value
              })
            }
            value={creatorFilter.awardSort}
            className={styles.input}
          >
            <option value='desc'>Descending</option>
            <option value='asc'>Ascending</option>
          </select>
        </div>
        <Link
          to='/dashboard/transactionHistory'
          className={styles.transactionHistoryBtn}
        >
          View your transaction history
        </Link>
      </div>
    </section>
  )
}

export default CreatorContestFilter;
