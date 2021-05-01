import {all} from 'redux-saga/effects';
import {orderSagas} from './order/sagas';
import {myOrderSagas} from './myOrder/sagas';

export function* rootSaga() {
  yield all([orderSagas(), myOrderSagas()]);
}