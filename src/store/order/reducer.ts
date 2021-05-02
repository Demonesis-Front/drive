import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderState, CityDBType, CarDBType, PointDBType, RateDBType, AdditionallyType, OrderStatusDBType} from './types'
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { OrderDataType } from 'services/main/types';
import { LatLngExpression } from "leaflet";



const initialCity: CityDBType = {
  createdAt: null,
  updatedAt: null,
  id: null,
  name: null,
}

const initialAdditionally: AdditionallyType = {
  color: null,
  reservedTime: {
    from: null,
    to: null
  },
  price: null,
  services: {
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  }
}

const initialState: OrderState = {
  data: {
    city: {
      createdAt: null,
      updatedAt: null,
      id: null,
      name: null,
      coordinates: [54.330056, 48.389127],
    },
    cities: null,
    point: null,
    points: null,
    stage: 1,
    car: null,
    cars: null,
    categories: null,
    additionally: initialAdditionally,
    rates: null,
    rate: null,
    statuses: null,
  },
  loading: true,
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers:{
    init: (state) => state,
    initMap: (state) => state,
    initCar: (state) => state,
    initAdditionally: (state) => state,
    initTotalStage: (state) => state,
    loading: (state) => {
      state.loading = true
    },
    success: (state) => {
      state.loading = false
    },
    setCity: (state, action: PayloadAction<CityDBType | null>) => {
      state.data.car = null
      state.data.point = null
      state.data.additionally = initialAdditionally

      if(!action.payload){
        state.data.city = initialCity
      }

      if(action.payload){
        state.data.city = action.payload
      }
    },
    setUserLocation: (state, action: PayloadAction<LatLngExpression>) => {
      console.log(action.payload)
      
      state.data.city.coordinates = action.payload
    },
    setCities: (state, action: PayloadAction<any | null>) => {
      state.data.cities = action.payload
    },
    setPoint: (state, action: PayloadAction<PointDBType | null>) => {
      state.data.car = null
      state.data.additionally = initialAdditionally
      state.data.point = action.payload
    },
    setPoints: (state, action: PayloadAction<PointDBType[] | null>) => {
      state.data.points = action.payload
    },
    setStage: (state, action: PayloadAction<number>) => {
      state.data.stage = action.payload
    },
    setCar: (state, action: PayloadAction<CarDBType | null>) => {
      state.data.additionally = initialAdditionally
      state.data.rate = null
      state.data.car = action.payload
    },
    setCars: (state, action: PayloadAction<CarDBType[]>) => {
      state.data.cars = action.payload
    },
    setCategories: (state, action: PayloadAction<any>) => {
      state.data.categories = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.data.additionally.color = action.payload
    },
    setRates: (state, action: PayloadAction<RateDBType[]>) => {
      state.data.rates = action.payload
    },
    setRate: (state, action: PayloadAction<RateDBType>) => {
      state.data.rate = action.payload
    },
    setFullTank: (state) => {
      state.data.additionally.services.isFullTank = !state.data.additionally.services.isFullTank
    },
    setNeedChildChair: (state) => {
      state.data.additionally.services.isNeedChildChair = !state.data.additionally.services.isNeedChildChair
    },
    setRightWheel: (state) => {
      state.data.additionally.services.isRightWheel = !state.data.additionally.services.isRightWheel
    },
    setDateTimeFrom: (state, action: PayloadAction<MaterialUiPickersDate>) => {
      state.data.additionally.reservedTime.from = action.payload
    },
    setDateToFrom: (state, action: PayloadAction<MaterialUiPickersDate>) => {
      state.data.additionally.reservedTime.to = action.payload
    },
    confirmOrder: (state, action: PayloadAction<OrderDataType>) => {
      // Start for saga and service with POST order to DB

    },
    setInitialData: (state) => {
      state.data = initialState.data
    },
    setStatuses: (state,  action: PayloadAction<OrderStatusDBType[]>) => {
      state.data.statuses = action.payload
    }
  }
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer