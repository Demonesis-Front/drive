import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type ImageType = {
  img: string
}

type ActiveType = {
  active: boolean
}

export const CarTypeContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const CarTitleContainer = styled.div`
  display: flex;

  align-items: center;
  margin-right: 16px;
`

export const CarCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 760px;

  @media (max-width: 950px) {
    justify-content: center;
    width: 100%;
  }
`

export const CarCard = styled.div`
  width: 368px;
  height: 224px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: ActiveType) => props.active ? COLORS.green : COLORS.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    border-color: ${(props: ActiveType) => props.active ? COLORS.green : COLORS.grey};
  }

  @media (max-width: 500px) {
    width: 90%;
  }
  
`

export const CarImage = styled.div`
margin-left: auto;
margin-right: 15px;
margin-bottom: 10px;
width: 250px;
height: 116px;
background-image: url(${(props: ImageType) => props.img});
background-size: 100%;
background-repeat: no-repeat;
background-position: bottom;
`

export const CarTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.black};
  cursor: pointer;
  padding: 20px;
`
export const CarSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.grey};
`
export const CarTypeTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${(props: ActiveType) => props.active ? COLORS.black : COLORS.grey};
  cursor: pointer;
`