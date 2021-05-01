import { RootState } from "store/store";
import {OrderDataType} from 'services/main/types'

export const getOrder = (state: RootState) => state.order.data
export const getOrderStatus = (state: RootState) => state.order.loading
export const getReadyOrder = (state: RootState) => {
  const order = state.order.data
  const car = order.car
  const cityId = order.point?.cityId
  const color = order.additionally.color
  const rateId = order.rate?.rateTypeId
  const pointId = order.point
  const price = order.rate?.price
  const isFullTank = order.additionally.services.isFullTank
  const isNeedChildChair = order.additionally.services.isNeedChildChair
  const isRightWheel = order.additionally.services.isRightWheel
  const orderStatusId = order.statuses?.filter(status => status.id === '5e26a191099b810b946c5d89')[0]
  // date
  const currentDate = new Date().toDateString()
  const from = order.additionally.reservedTime.from
  const to = order.additionally.reservedTime.to
  const dateFrom = Date.parse(from?.toDateString() || currentDate)
  const dateTo = Date.parse(to?.toDateString() || currentDate)

  if(car && cityId && rateId && price && pointId?.id){
    const data: OrderDataType = {
        orderStatusId: orderStatusId,
        cityId: cityId,
        pointId: pointId,
        carId: car,
        color: color,
        dateFrom: dateFrom,
        dateTo: dateTo,
        rateId: rateId,
        price: price,
        isFullTank: isFullTank,
        isNeedChildChair: isNeedChildChair,
        isRightWheel: isRightWheel
    }

    return data
  }

  return null
}