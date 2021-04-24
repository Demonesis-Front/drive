import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderState, CityType, PickUpType, CarDBType} from './types'

const initialState: OrderState = {
  data: {
    city: {
      title: "Ульяновск",
      id: "1",
      coordinates: [54.330056, 48.389127],
      pickups: [
        {
          title: "проспект Нариманова, 1 ст2",
          id: "11",
          coordinates: [54.333551, 48.384378],
        },
        {
          title: "​улица Островского, 20",
          id: "12",
          coordinates: [54.326695, 48.394832],
        },
      ],
    },
    cities: null,
    pickup: null,
    stage: 1,
    car: null,
    cars: null,
  }
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers:{
    init: (state) => state,
    setCity: (state, action: PayloadAction<CityType | null>) => {
      state.data.city = action.payload
    },
    setCities: (state, action: PayloadAction<any | null>) => {
      state.data.cities = action.payload
    },
    setPickUp: (state, action: PayloadAction<PickUpType | null>) => {
      state.data.pickup = action.payload
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