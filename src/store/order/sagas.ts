import {put, all, call, takeLatest, delay, select} from 'redux-saga/effects';
import { DBService } from 'services/main/service';
import { ForwardService } from 'services/forward/service';
import {orderActions} from 'store/order/reducer';
import { CarDBType, CityDBType, OrderState, OrderStatusDBType, PointDBType, RateDBType } from './types';
import { LatLngExpression, point } from "leaflet";
import { getOrder } from './selectors';
import { OrderStateDataType } from 'store/order/types';

export function* orderSagas() {
  yield all([
    takeLatest(orderActions.initMap, orderInitUserLocation),
    takeLatest(orderActions.initMap, orderInitMapSaga),
    takeLatest(orderActions.getCityPoints, getCityPointsCoords),
    takeLatest(orderActions.initCar, orderInitCarSaga),
    takeLatest(orderActions.initAdditionally, orderInitAdditionallySaga),
    takeLatest(orderActions.initTotalStage, orderInitTotalStageSaga),
  ]);
}


function* orderInitMapSaga(){
  try {
    // Cities
    // TODO: check if !cities
    yield put(orderActions.loading())
    const cities: CityDBType[] = yield call(DBService.getCities);
      
    for(let i = 0; i < cities.length; i++){
      const points: LatLngExpression = yield call(ForwardService.getCity, cities[i].name)
      // delay(1100)
      cities[i].coordinates = points
    }
    yield put(orderActions.setCities(cities));
  // Pickups
    const points: PointDBType[] = yield call(DBService.getPoints);
    
    yield put(orderActions.setPoints(points));
    yield put(orderActions.success())
  } catch (error) {
    yield delay(1000)
    yield put(orderActions.initMap());
  }
}

function* getCityPointsCoords() {
  try {
    const order: OrderStateDataType = yield select(getOrder)

    if(order.points){
      const points: PointDBType[] = [...order.points]
      // Pickups

      for(let i = 0; i < order.points.length; i++){
        if(order.points[i] && order.points[i].address && order.points[i].cityId && order.points[i].cityId.name && order.points[i].cityId?.id === order.city?.id){
          const coordinates: LatLngExpression = yield call(ForwardService.getPoints, order.points[i].address, order.points[i].cityId.name)
          points[i] = {...points[i], coordinates}
          
        }
      }
      
      yield put(orderActions.setPoints(points));
    }
  } catch (error) {
    yield delay(2000)
    yield put(orderActions.getCityPoints());
    
  }
}

const getUserCoords = () => new Promise((resolve,reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error)
  )
}) 

function* orderInitUserLocation(){
  try {
    if(navigator){
      const location: GeolocationPosition = yield call(getUserCoords)
      const coordinates: LatLngExpression = [location.coords.latitude, location.coords.longitude]
      
      yield put(orderActions.setUserLocation(coordinates))
    }
  } catch (error) {
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
    yield put(orderActions.initCar());
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
    yield put(orderActions.initAdditionally());
  }
}

function* orderInitTotalStageSaga(){
  try {
    yield put(orderActions.loading())
    // Statuses
    const  statuses: OrderStatusDBType[] = yield call(DBService.getOrderStatuses)
    yield put(orderActions.setStatuses(statuses));
  } catch (error) {
    yield put(orderActions.initTotalStage())
  }
}