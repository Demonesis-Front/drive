import {CarType} from 'store/order/reducer'

export const carType = {
  economy: 'economy',
  premium: 'premium'
}

export const cars: CarType[] = [
  {
    id: '31',
    title: 'ELANTRA',
    price: {
      from: '12 000',
      to: '32 000',
      default: 12000,
    },
    img: require('./../img/cars/image1.png').default,
    type: 'premium'
  },
  {
    id: '32',
    title: 'i30 N',
    price: {
      from: '10 000',
      to: '25 000',
      default: 10000,
    },
    img: require('./../img/cars/image2.png').default,
    type: 'economy' 
  },
  {
    id: '33',
    title: 'CRETA',
    price: {
      from: '15 000',
      to: '35 000',
      default: 15000,
    },
    img: require('./../img/cars/image3.png').default,
    type: 'premium'
  },
  {
    id: '34',
    title: 'SONATA',
    price: {
      from: '11 000',
      to: '28 000',
      default: 11000,
    },
    img: require('./../img/cars/image4.png').default,
    type: 'economy'
  },
  {
    id: '35',
    title: 'Audi Q3',
    price: {
      from: '17 000',
      to: '40 000',
      default: 17000,
    },
    img: require('./../img/cars/image5.png').default,
    type: 'premium'
  },
  {
    id: '36',
    title: 'Honda CIVIC',
    price: {
      from: '15 000',
      to: '24 000',
      default: 15000,
    },
    img: require('./../img/cars/image6.png').default,
    type: 'economy'
  },
]