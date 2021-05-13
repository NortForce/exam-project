import {put} from 'redux-saga/effects';
import * as ACTION from 'actions/actionCreator';
import * as restController from 'api/http/restController';

export function * getUserTxHistorySaga (action) {
  try {

    const {data: {data}} = yield restController.getUserTxHistory(action.payload);
    yield put(ACTION.getUserTxHistorySuccess(data));

  } catch (error) {
    yield put(ACTION.getUserTxHistoryError(error))
  }
}