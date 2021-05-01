import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderDataType} from 'services/main/types'
import {MyOrderInitialStateType} from './types'

const initialState: MyOrderInitialStateType = {
  data:{
    updatedAt: null,
    createdAt: null,
    orderStatusId: {
      name: null,
      id: null,
    },
    cityId: {
      name: null,
      id: null,
    },
    pointId: {
      address: null,
      name: null,
      id: null,
      cityId: {
        name: null,
        id: null,
      }
      },
    carId: {
      categoryId: {
        name: null,
        description: null,
        id: null,
      },
      colors: null,
      id: null,
      name: null,
      number: null,
      description: null,
      priceMax: null,
      thumbnail: {
        size: null,
        originalname: null,
        mimetype: null,
        path: null,
      },
      priceMin: null,
      tank: null,
    },
    color: null,
    dateFrom: null,
    dateTo: null,
    rateId: {
      price: null,
      rateTypeId: {
        unit: null,
        name: null,
        id: null,
      },
      id: null,
    },
    price: null,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    id: null,
  },
  loading: false
}

const myOrderSlice = createSlice({
  name: 'myOrder',
  initialState,
  reducers:{
    getMyOrder: (state) => state,
    postReadyOrder: (state, _: PayloadAction<OrderDataType>) => {
      console.log('reducer')
      
    },
    setMyOrder: (state, action: PayloadAction<OrderDataType>) => {
      state.data = action.payload
    },
    setInitialData: (state) => {
      state.data = initialState.data
      state.loading = false
    },
    
  }
})

export const myOrderActions = myOrderSlice.actions
export const myOrderReducer = myOrderSlice.reducer