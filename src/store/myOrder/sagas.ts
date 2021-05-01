import { PayloadAction } from '@reduxjs/toolkit';
import {put, all, call, takeLatest, delay} from 'redux-saga/effects';
import { DBService } from 'services/main/service';
import {myOrderActions} from './reducer';
import { OrderDataType } from 'services/main/types';
import { LocalStorage } from 'services/localStorage/storage';
// import { CarDBType, CityDBType, OrderStatusDBType, PointDBType, RateDBType } from './types';

export function* myOrderSagas() {
  yield all([
    takeLatest(myOrderActions.postReadyOrder, postReadyOrderSaga),
    takeLatest(myOrderActions.getMyOrder, getMyOrderSaga),
    takeLatest(myOrderActions.setInitialData, clearMyOrderSaga),
  ]);
}

function* postReadyOrderSaga(action: PayloadAction<OrderDataType>){
  try {
    const myOrder: OrderDataType = yield call(DBService.postOrder, action.payload)
    yield put(myOrderActions.setMyOrder(myOrder))
    //set id to localStorage
    if(myOrder.id){
      yield call(LocalStorage.setMyOrderId, myOrder.id)
    }
  } catch (error) {
    delay(2000)
    put(myOrderActions.postReadyOrder(action.payload))
  }
}

function* getMyOrderSaga(){
  try {
    const myOrderId: string | null = yield call(LocalStorage.getMyOrderId)
    
    if(myOrderId){
      const myOrder: OrderDataType = yield call(DBService.getMyOrder, myOrderId)
      
      yield put(myOrderActions.setMyOrder(myOrder))
    }

  } catch (error) {
    delay(2000)
    put(myOrderActions.getMyOrder())
  }
}
function* clearMyOrderSaga(){
  try {
    yield call(DBService.postOrder, null)
    
  } catch (error) {
    delay(2000)
    put(myOrderActions.setInitialData())
  }
}