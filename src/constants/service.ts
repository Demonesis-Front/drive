import {TEXT} from 'constants/text'

export type AdditionallyServiceType = {
    id: string,
    name: string,
    price: number
}

export type AdditionallyServicesType = {
  fullTank: AdditionallyServiceType,
  needChildChair: AdditionallyServiceType
  rightWheel: AdditionallyServiceType
}


export const additionallyServices: AdditionallyServicesType = {
  fullTank: {
    id: '41',
    name: TEXT.fullTank,
    price: 500
  },
  needChildChair: {
    id: '42',
    name: TEXT.needChildChair,
    price: 200
  },
  rightWheel: {
    id: '43',
    name: TEXT.rightWheel,
    price: 1600
  },
}
