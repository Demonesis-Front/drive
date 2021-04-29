import {put, all, call, takeLatest, delay} from 'redux-saga/effects';
import { DBService } from 'services/main/service';
import { ForwardService } from 'services/forward/service';
import {orderActions} from 'store/order/reducer';
import { CarDBType, CityDBType, PointDBType, RateDBType } from './types';
import { LatLngExpression } from "leaflet";

export function* orderSagas() {
  yield all([
    takeLatest(orderActions.initMap, orderInitMapSaga),
    takeLatest(orderActions.initCar, orderInitCarSaga),
    takeLatest(orderActions.initAdditionally, orderInitAdditionallySaga),
  ]);
}


function* orderInitMapSaga(){
  try {
    // Cities
    const cities: CityDBType[] = yield call(DBService.getCities);
      
    for(let i = 0; i < cities.length; i++){
      const points: LatLngExpression = yield call(ForwardService.getCity, cities[i].name)
      delay(2000)
      cities[i].coordinates = points
    }
    yield put(orderActions.setCities(cities));
  // Pickups
    const points: PointDBType[] = yield call(DBService.getPoints);
    
    for(let i = 0; i < points.length; i++){
      if(points[i] && points[i].name && points[i].cityId && points[i].cityId.name){
        const coordinates: LatLngExpression = yield call(ForwardService.getPoints, points[i].address, points[i].cityId.name)
        points[i].coordinates = coordinates
      }
      delay(2000)
      
    }
    yield put(orderActions.setPoints(points));
    yield put(orderActions.success())
  } catch (error) {
    delay(2000)
    yield put(orderActions.setCities(orderActions.initMap()));
  }
}

function* orderInitCarSaga(){
  try {
    yield put(orderActions.loading())
    // Cars
    const cars: CarDBType[] = yield call(DBService.getCars);
    yield put(orderActions.setCars(cars));
    
    // Categories
    const categories: {} = yield call(DBService.getCategories);
    yield put(orderActions.setCategories(categories));

    yield put(orderActions.success())
  } catch (error) {
    delay(2000)
    yield put(orderActions.setCities(orderActions.initCar()));
  }
}

function* orderInitAdditionallySaga(){
  try {
    yield put(orderActions.loading())
    // Rates
    const  rates: RateDBType[] = yield call(DBService.getRates)
    yield put(orderActions.setRates(rates));
    yield put(orderActions.success())
  } catch (error) {
    delay(2000)
    yield put(orderActions.setCities(orderActions.initCar()));
  }
}
