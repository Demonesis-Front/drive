import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderState} from './types'

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
    setCity: (state, action: PayloadAction<any>) => {
      state.data.city = action.payload
    },
    setPickUp: (state, action: PayloadAction<any>) => {
      state.data.pickup = action.payload
    },
    setStage: (state, action: PayloadAction<any>) => {
      state.data.stage = action.payload
    },
    setCar: (state, action: PayloadAction<any>) => {
      state.data.car = action.payload
    },
    setCars: (state, action: PayloadAction<any>) => {
      state.data.cars = action.payload
    },
  }
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer