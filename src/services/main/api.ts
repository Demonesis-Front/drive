import axios from 'axios'

export const url = 'https://api-factory.simbirsoft1.com'
export const DBurl = 'https://api-factory.simbirsoft1.com/api/db'
export const path = {
  car: '/car',
  city: '/city',
  point: '/point',
  rate: '/rate',
  category: '/category',
}

export const instance = axios.create({
  baseURL: DBurl,
  timeout: 1000,
  headers: {'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b'}
})