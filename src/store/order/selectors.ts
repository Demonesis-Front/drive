import { RootState } from "store/store";

export const getOrder = (state: RootState) => state.order.data
export const getOrderStatus = (state: RootState) => state.order.loading
export const getReadyOrder = (state: RootState) => {
  const order = state.order.data

  return {
      orderStatusId: {},
      cityId: order.point?.cityId,
      pointId: {},
      carId: {},
      color: "string",
      dateFrom: 0,
      dateTo: 0,
      rateId: {},
      price: 0,
      isFullTank: true,
      isNeedChildChair: true,
      isRightWheel: true
  }
}