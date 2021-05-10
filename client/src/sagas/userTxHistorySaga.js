import {put} from 'redux-saga/effects';
import * as ACTION from 'actions/actionCreator';
import * as restController from 'api/rest/restController';

export function * getUserTxHistorySaga (action) {
  try {

    const {data: {data: {userTransactionHistory, aggregatedMoneyMovement}}} = yield restController.getUserTxHistory(action.payload);
    yield put(ACTION.getUserTxHistorySuccess({userTransactionHistory, aggregatedMoneyMovement}));

  } catch (error) {
    yield put(ACTION.getUserTxHistoryError(error))
  }
}