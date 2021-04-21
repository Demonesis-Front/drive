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

export type CarDBType = {
  categoryId: {
    name: string,
    description: string,
    id: string,
  },
  colors: string[],
  createdAt: number,
  id: string,
  name: string,
  number: string,
  priceMax: number,
  priceMin: number,
  tank: number,
  thumbnail: {
    mimetype: string,
    originalname: string,
    path: string,
    size: number
  },
  updatedAt: string
}


export type PickUpType = {
  title: string,
  id: string,
  coordinates: LatLngExpression
}

export type CityType = {
    title: string,
    id: string,
    coordinates: LatLngExpression,
    pickups: PickUpType[]
}

export type OrderState = {
  data: {
    city: CityType,
    pickup: PickUpType | null,
    stage: number,
    car: CarDBType | null,
    cars: CarDBType[] | null,
  }
}