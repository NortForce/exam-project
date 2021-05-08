import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from '../../components/Header/Header';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';

const TransactionHistoryPage = (props) => {

  const {data} = useSelector(({auth})=> auth) ;

  return (
    <>
      <Header/>
      <TransactionHistory/>
    </>
  );
}

export default TransactionHistoryPage;
