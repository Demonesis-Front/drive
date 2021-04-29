import axios from 'axios'

export const API_KEY = process.env.REACT_APP_OPENCAGEDATA_API_KEY

export const serviceUrl = 'https://api.opencagedata.com/geocode/v1/json'

export const path ={
  forward: 'forward'
}

export const instance = axios.create({
  baseURL: serviceUrl,
  timeout: 2000,
})