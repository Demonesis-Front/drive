import {OrderDataType} from 'services/main/types'

export interface MyOrderInitialStateType{
  data: OrderDataType,
  loading: boolean
}

interface MyOrderInitialStateNull {
  data: {
  updatedAt?: null;
  createdAt?: null;
  orderStatusId?: {
    name?: null;
    id?: null;
  };
  cityId?: {
    name?: null;
    id?: null;
  };
  pointId?: {
    address?: null
    name?: null;
    id?: null;
    cityId?: {
      name?: null;
      id?: null;
    }
    };
  carId?: {
    categoryId: {
      name?: null;
      description?: null;
      id?: null;
    };
    colors?: null;
    id?: null;
    name?:  null;
    number?: null;
    description?: null;
    priceMax?: null;
    thumbnail: {
      size?: null;
      originalname?: null;
      mimetype?: null;
      path?: null;
    };
    priceMin?: null;
    tank?: null;
  };
  color?: null;
  dateFrom?: null;
  dateTo?: null;
  rateId: {
    price?: null;
    rateTypeId?: {
      unit?: null;
      name?: null;
      id?: null;
    };
    id?: null;
  };
  price?: null;
  isFullTank?: boolean;
  isNeedChildChair?: boolean;
  isRightWheel?: boolean;
  id?: null;
}
}