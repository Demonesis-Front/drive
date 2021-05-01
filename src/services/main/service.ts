import {AxiosResponse} from 'axios'
import {getCarsType, getCitiesType, getPointsType, getRatesType, getCategoriesType, PostOrderType, getOrderStatusesType, OrderDataType} from './types'
import {instance, path} from './api'




export const DBService = {
  async getCities(){
      const {data}: AxiosResponse<getCitiesType> = await instance.get(path.city)
      
      return data.data
    },
    async getPoints(){
      const {data}: AxiosResponse<getPointsType> = await instance.get(path.point)
      
      return data.data
  },
  async getCars(){
      const {data}: AxiosResponse<getCarsType> = await instance.get(path.car)
      
      return data.data
  },
  async getRates(){
      const {data}: AxiosResponse<getRatesType> = await instance.get(path.rate)
      
      return data.data
  },
  async getCategories(){
      const {data}: AxiosResponse<getCategoriesType> = await instance.get(path.category)
      
      return data.data
  },
  async getOrderStatuses(){
      const {data}: AxiosResponse<getOrderStatusesType> = await instance.get(path.statuses)
      
      return data.data
  },
  async postOrder(postData: OrderDataType | null){
      const {data}: AxiosResponse<PostOrderType> = await instance.post(path.order, postData)
      
      return data.data
  },
  async getMyOrder(id: string){
      const {data}: AxiosResponse<any> = await instance.get(path.order + '/' + id)
      
      return data.data
  },
}