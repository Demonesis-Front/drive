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

export type CityDBType = {
  createdAt: number,
  id: string,
  name: string,
  updatedAt: number,
  coordinates?: LatLngExpression
}
export type PointDBType = {
  address: string,
  cityId: {
    id: string,
    name: string,
  },
  name: string,
  id: number,
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

export type OrderState = {
  data: {
    city: CityDBType | null,
    cities: CityDBType[] | null,
    point: PointDBType | null,
    points: PointDBType[] | null,
    stage: number,
    car: CarDBType | null,
    cars: CarDBType[] | null,
    additionally: {
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
    },
    rates: RateDBType[] | null,
    rate: RateDBType | null,
  },
  loading: boolean;
}


