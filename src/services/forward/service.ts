import {instance, API_KEY, path} from './api'

const createCityConfig = (city: string | null) => {
  return {
    params:{
      key: API_KEY,
      q: `${city ? city : ''}`,
      countrycode: 'ru'
    }
  }
}
const createPickupConfig = (address: string, city: string | null) => {
  return {
    params:{
      key: API_KEY,
      q: `${address}, ${city ? city : ''}`,
    }
  }
}

// TODO: need to add data types 
export const ForwardService = {
  async getCity(city: string | null){
    const {data} = await instance.get(path.forward, createCityConfig(city))

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