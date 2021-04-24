import {put, all, call, takeLatest} from 'redux-saga/effects';
import { DBService } from 'services/main/service';
import {orderActions} from 'store/order/reducer';
import { CarDBType, CityDBType } from './types';

export function* orderSagas() {
  yield all([
    takeLatest(orderActions.init, orderInitSaga),
  ]);
}

function* orderInitSaga() {
  try {
    const cities: CityDBType[] = yield call(DBService.getCities);
    yield put(orderActions.setCities(cities));
    const data: CarDBType[] = yield call(DBService.getCars);
    yield put(orderActions.setCars(data));
  } catch (error) {
    console.log(error)
  }
}