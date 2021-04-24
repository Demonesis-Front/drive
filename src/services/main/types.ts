import { CarDBType, CityDBType } from 'store/order/types';

export type getCarsType = {
  count: number;
  data: CarDBType[];
  fields: {
    categoryId: {
      name: string
      populate: {
        filter: string,
        select: string[]
      }
      ref: string
      required: boolean
      type: string
    },
    colors: {
      array: boolean
      name: string
      required: boolean
      type: string
    },
    description: {
      name: string
      type: string
    },
    name: {
      name: string
      required: boolean
      type: string
    },
    number: {
      name: string
      type: string
    },
    priceMax: {
      name: string
      required: boolean
      type: string
    },
    priceMin: {
      name: string
      required: boolean
      type: string
    },
    tank: {
      name: string
      type: string
    },
    thumbnail: {
      name: string
      required: boolean
      type: string
    }
  }
}
export type getCitiesType = {
  count: number;
  data: CityDBType[];
  fields: {
    name: {
      name: string,
      required: boolean,
      type: string
    }
  }
}