import { LatLngExpression } from "leaflet";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

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
  id: string,
  name: string,
  description?: string;
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
  createdAt: number,
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

export type CityDBType = {
  createdAt: number | null,
  id: string | null,
  name: string | null,
  updatedAt: number | null,
  coordinates?: LatLngExpression
}
export type PointDBType = {
  address: string,
  cityId: {
    id: string,
    name: string,
  },
  name: string,
  id: string,
  coordinates?: LatLngExpression
}

export type RateDBType = {
  createdAt: number
  id: string
  price: number
  rateTypeId:{
    id: string
    name: string
    unit: string
  },
  updatedAt: number
}
export type CategoriesDBType = {
  createdAt: number
  description: string
  id: string
  name: string
  updatedAt: number
}

export type OrderStatusDBType = {
  name: string
  id: string
}

export type AdditionallyType = {
  color: string | null,
  reservedTime: {
    from: MaterialUiPickersDate,
    to: MaterialUiPickersDate
  },
  price: string | null,
  services: {
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean,
  }
}

export type OrderState = {
  data: {
    city: CityDBType | null,
    cities: CityDBType[] | null,
    point: PointDBType | null,
    points: PointDBType[] | null,
    stage: number,
    car: CarDBType | null,
    cars: CarDBType[] | null,
    categories: CategoriesDBType[] | null,
    additionally: AdditionallyType,
    rates: RateDBType[] | null,
    rate: RateDBType | null,
    statuses: OrderStatusDBType[] | null,
  },
  loading: boolean;
}


