import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLngExpression } from "leaflet";

export type CarType = {
  id: string;
  title: string;
  price: {
    from: string;
    to: string;
    default: number;
  };
  img: string;
  type: string;
}

type PickUpType = {
  title: string,
  id: string,
  coordinates: LatLngExpression
}

type CityType = {
    title: string,
    id: string,
    coordinates: LatLngExpression,
    pickups: PickUpType[]
}

type OrderState = {
  data: {
    city: CityType,
    pickup: PickUpType | null,
    stage: number,
    car: CarType | null,
  }
}

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
  }
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers:{
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
    }
  }
})

export const orderActions = orderSlice.actions
export const orderReducer = orderSlice.reducer