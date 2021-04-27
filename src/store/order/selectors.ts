import { RootState } from "store/store";

export const getOrder = (state: RootState) => state.order.data
export const getOrderStatus = (state: RootState) => state.order.loading