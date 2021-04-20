import {combineReducers } from 'redux'
import {orderReducer} from './order/reducer'

export const rootReducer = combineReducers({
  order: orderReducer,
})