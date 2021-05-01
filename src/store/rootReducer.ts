import {combineReducers } from 'redux'
import {orderReducer} from './order/reducer'
import {myOrderReducer} from './myOrder/reducer'

export const rootReducer = combineReducers({
  order: orderReducer,
  myOrder: myOrderReducer,
})