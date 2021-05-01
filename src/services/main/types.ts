import { CarDBType, CityDBType, PointDBType, RateDBType, CategoriesDBType, OrderStatusDBType } from 'store/order/types';

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

export type getCategoriesType = {
  count: number;
  data: CategoriesDBType[];
  fields: {
    description:{
      name: string
      type: string
    },
    name: {
      name: string,
      required: true,
      type: string
    }
  }
}

export type getOrderStatusesType = {
    fields: {
        name: {
            name: string,
            type: string,
            required: true
        }
    },
    count: 5,
    data: OrderStatusDBType[]
}

export interface IsRightWheel {
  name: string;
  type: string;
}

export interface IsNeedChildChair {
  name: string;
  type: string;
}

export interface IsFullTank {
  name: string;
  type: string;
}

export interface Price {
  required: boolean;
  name: string;
  type: string;
}

export interface Populate {
  select: string[];
  filter: string;
}

export interface RateId {
  name: string;
  type: string;
  populate: Populate;
  ref: string;
}

export interface DateTo {
  name: string;
  type: string;
  required: boolean;
}

export interface DateFrom {
  name: string;
  type: string;
  required: boolean;
}

export interface Color {
  name: string;
  type: string;
}


export interface CarId {
  name: string;
  type: string;
  required: boolean;
  populate: Populate;
  ref: string;
}


export interface PointId {
  name: string;
  type: string;
  required: boolean;
  populate: Populate;
  ref: string;
}


export interface CityId {
  name: string;
  type: string;
  populate: Populate;
  ref: string;
  required: boolean;
}


export interface OrderStatusId {
  required: boolean;
  ref: string;
  populate: Populate;
  type: string;
  name: string;
}

export interface OrderDataFields {
  isRightWheel: IsRightWheel;
  isNeedChildChair: IsNeedChildChair;
  isFullTank: IsFullTank;
  price: Price;
  rateId: RateId;
  dateTo: DateTo;
  dateFrom: DateFrom;
  color: Color;
  carId: CarId;
  pointId: PointId;
  cityId: CityId;
  orderStatusId: OrderStatusId;
}


export interface CategoryId {
  name?: string;
  description?: string;
  id?: string;
}

// export interface OrderDataType {
//   updatedAt?: number;
//   createdAt?: number;
//   orderStatusId?: {
//     name?: string;
//     id?: string;
//   };
//   cityId?: {
//     name?: string;
//     id?: string;
//   };
//   pointId?: {
//     address?: string;
//     name?: string;
//     id?: string;
//     cityId?: {
//       name?: string;
//       id?: string;
//     }
//     };
//   carId?: {
//     categoryId: {
//       name?: string;
//       description?: string;
//       id?: string;
//     };
//     colors?: string[];
//     id?: string;
//     name?: string;
//     number?: string;
//     description?: string;
//     priceMax?: number;
//     thumbnail: {
//       size?: number;
//       originalname?: string;
//       mimetype?: string;
//       path?: string;
//     };
//     priceMin?: number;
//     tank?: number;
//   };
//   color?: string;
//   dateFrom?: number;
//   dateTo?: number;
//   rateId: {
//     price?: number;
//     rateTypeId?: {
//       unit?: string;
//       name?: string;
//       id?: string;
//     };
//     id?: string;
//   };
//   price?: number;
//   isFullTank?: boolean;
//   isNeedChildChair?: boolean;
//   isRightWheel?: boolean;
//   id?: string;
// }

export type OrderDataType = {
  updatedAt?: number | null;
  createdAt?: number | null;
  orderStatusId?: {
    name?: string | null;
    id?: string | null;
  };
  cityId?: {
    name?: string | null;
    id?: string | null;
  };
  pointId?: {
    address?: string | null
    name?: string | null;
    id?: string | null;
    cityId?: {
      name?: string | null;
      id?: string | null;
    }
    };
  carId?: {
    categoryId: {
      name?: string | null;
      description?: string | null;
      id?: string | null;
    };
    colors?: string[] | null;
    id?: string | null;
    name?: string | null;
    number?: string | null;
    description?: string | null;
    priceMax?: number | null;
    thumbnail: {
      size?: number | null;
      originalname?: string | null;
      mimetype?: string | null;
      path?: string | null;
    };
    priceMin?: number | null;
    tank?: number | null;
  };
  color?: string | null;
  dateFrom?: number | null;
  dateTo?: number | null;
  rateId: {
    price?: number | null;
    rateTypeId?: {
      unit?: string | null;
      name?: string | null;
      id?: string | null;
    };
    id?: string | null;
  };
  price?: number | null;
  isFullTank?: boolean;
  isNeedChildChair?: boolean;
  isRightWheel?: boolean;
  id?: string | null;
}

export interface PostOrderType {
  fields: OrderDataFields;
  data: OrderDataType;
}

