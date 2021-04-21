import {all} from 'redux-saga/effects';
import {orderSagas} from './order/sagas';

export function* rootSaga() {
  yield all([orderSagas()]);
}