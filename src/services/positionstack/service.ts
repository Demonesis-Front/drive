import axios from 'axios'
import { LatLngExpression } from "leaflet";

const API_KEY = process.env.REACT_APP_POSITIONSTACK_API_KEY

export const positionStackUrl = 'http://api.positionstack.com/v1/'
const path ={
  forward: 'forward'
}

const instance = axios.create({
  baseURL: positionStackUrl,
  timeout: 2000,
})

const createCityConfig = (city: string) => {
  return {
    params:{
      access_key: API_KEY,
      query: city,
      country: 'RU',
    }
  }
}
const createPickupConfig = (address: string, city: string) => {
  return {
    params:{
      access_key: API_KEY,
      query: `${address}, ${city}`,
      country: 'RU',
    }
  }
}

// TODO: need to add data types 
export const PositionStack = {
  async getCity(city: string){
    const {data} = await instance.get(path.forward, createCityConfig(city))

    if(data.data[0] && data.data[0].latitude && data.data[0].longitude){
      return [data.data[0].latitude, data.data[0].longitude]
    }
    
    return null
  },
  async getPoints(address: string, city: string){
    const {data} = await instance.get(path.forward, createPickupConfig(address, city))
    
    if(data.data[0] && data.data[0].latitude && data.data[0].longitude){
      return [data.data[0].latitude, data.data[0].longitude]
    }

    return null
  },
}