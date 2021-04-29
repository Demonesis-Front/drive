import axios, {AxiosResponse} from 'axios'
import {getCarsType, getCitiesType, getPointsType, getRatesType} from './types'


export const url = 'https://api-factory.simbirsoft1.com'
export const DBurl = 'https://api-factory.simbirsoft1.com/api/db'
export const path = {
  car: '/car',
  city: '/city',
  point: '/point',
  rate: '/rate',
}

const instance = axios.create({
  baseURL: DBurl,
  timeout: 1000,
  headers: {'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b'}
})


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
  }
}