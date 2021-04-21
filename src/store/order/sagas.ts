import {put, all, call, takeLatest} from 'redux-saga/effects';
import { DBService } from 'services/main/service';
import {orderActions} from 'store/order/reducer';

export function* orderSagas() {
  yield all([
    takeLatest(orderActions.init, orderInitSaga),
  ]);
}

function* orderInitSaga() {
  try {
    const data: [] = yield call(DBService.getCars);
    yield put(orderActions.setCars(data));
  } catch (error) {}
}