import axios from 'axios'

const API_KEY = process.env.REACT_APP_OPENCAGEDATA_API_KEY

export const serviceUrl = 'https://api.opencagedata.com/geocode/v1/json'
const path ={
  forward: 'forward'
}

const instance = axios.create({
  baseURL: serviceUrl,
  timeout: 2000,
})

const createCityConfig = (city: string) => {
  return {
    params:{
      key: API_KEY,
      q: `${city}`,
      countrycode: 'ru'
    }
  }
}
const createPickupConfig = (address: string, city: string) => {
  return {
    params:{
      key: API_KEY,
      q: `${address}, ${city}`,
    }
  }
}

// TODO: need to add data types 
export const ForwardService = {
  async getCity(city: string){
    const {data} = await instance.get(path.forward, createCityConfig(city))

    // console.log(data.results[0].geometry)
    if(city === 'Ульяновск'){
      if(data.results[0] && data.results[0].geometry && data.results[0].geometry.lat && data.results[0].geometry.lng){
        return [data.results[1].geometry.lat, data.results[1].geometry.lng]
      }
    }

    if(data.results[0] && data.results[0].geometry && data.results[0].geometry.lat && data.results[0].geometry.lng){
      return [data.results[0].geometry.lat, data.results[0].geometry.lng]
    }
    
    return null
  },
  async getPoints(address: string, city: string){
    const {data} = await instance.get(path.forward, createPickupConfig(address, city))
    
    if(data.results[0] && data.results[0].geometry && data.results[0].geometry.lat && data.results[0].geometry.lng){
      return [data.results[0].geometry.lat, data.results[0].geometry.lng]
    }

    return null
  },
}