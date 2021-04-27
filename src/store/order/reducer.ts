import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderState, CityDBType, CarDBType, PointDBType} from './types'


const initialState: OrderState = {
  data: {
    city: {
      createdAt: 1223444,
      updatedAt: 1231233,
      id: '12',
      name: "Ульяновск",
      coordinates: [54.330056, 48.389127],
    },
    cities: null,
    point: null,
    points: null,
    stage: 1,
    car: null,
    cars: null,
  },
  loading: true,
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers:{
    init: (state) => state,
    loading: (state) => {
      state.loading = true
    },
    success: (state) => {
      state.loading = false
    },
    setCity: (state, action: PayloadAction<CityDBType | null>) => {
      state.data.city = action.payload
    },
    setCities: (state, action: PayloadAction<any | null>) => {
      state.data.cities = action.payload
    },
    setPoint: (state, action: PayloadAction<PointDBType | null>) => {
      state.data.point = action.payload
    },
    setPoints: (state, action: PayloadAction<PointDBType[] | null>) => {
      state.data.points = action.payload
    },
    setStage: (state, action: PayloadAction<number>) => {
      state.data.stage = action.payload
    },
    setCar: (state, action: PayloadAction<CarDBType | null>) => {
      state.data.car = action.payload
    },
    setCars: (state, action: PayloadAction<CarDBType[]>) => {
      state.data.cars = action.payload
    },
  }
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer