import axios from 'axios'

export const url = 'https://api-factory.simbirsoft1.com/'
export const DBurl = 'https://api-factory.simbirsoft1.com/api/db'
export const path = {
  car: '/car'
}

const config = {
  headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b' },
};

export const DBService = {
  async getCars(){
    try {
      const data = await axios.get(DBurl + path.car, config)

      //красиво :)
      return data.data.data.slice(0, 10)
    } catch (error) {
      console.log(error)
    }
  }
}