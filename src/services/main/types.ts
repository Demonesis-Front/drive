import { CarDBType, CityDBType, PointDBType, RateDBType } from 'store/order/types';

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
export type getPointsType = {
  count: number;
  data: PointDBType[];
  fields: {
    address:{
      name: string,
      required: boolean,
      type: string
    },
    cityId: {
      name: string,
      populate: {
        filter: string,
        select: string[]
      }
      ref: string,
      required: boolean,
      type: string
    }
    name: {
      name: string,
      required: boolean,
      type: string
    }
  }
}
export type getRatesType = {
  count: number;
  data: RateDBType[];
  fields: {
    price:{
      name: string
      required: boolean
      type: string
    },
    rateTypeId: {
      name: string,
      populate: {
        filter: string,
        select: string[]
      }
      ref: string,
      type: string
    }
  }
}