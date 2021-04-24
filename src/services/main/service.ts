import axios, {AxiosResponse} from 'axios'
import {getCarsType, getCitiesType} from './types'


export const url = 'https://api-factory.simbirsoft1.com/'
export const DBurl = 'https://api-factory.simbirsoft1.com/api/db'
export const path = {
  car: '/car',
  city: '/city',
  point: '/point',
}

const config = {
  headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
};


export const DBService = {
  async getCities(){
      const {data}: AxiosResponse<getCitiesType> = await axios.get(DBurl + path.city, config)
      
      return data.data
  },
  async getPoints(){
      const {data}: AxiosResponse<any> = await axios.get(DBurl + path.point, config)
      console.log(data)
      
      return data.data
  },
  async getCars(){
      const {data}: AxiosResponse<getCarsType> = await axios.get(DBurl + path.car, config)

      return data.data
  }
}