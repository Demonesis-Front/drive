import styled from 'styled-components'
import {COLORS} from 'constants/colors'

export const CityAndPickUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
`

export const CityContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 380px;
  height: 50px;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
  
`

export const MapBox = styled.div`
  display: none;
  height: 200px;
  width: auto;

  @media (max-width: 500){
    display: flex;
  }
`
export const CircularContainer = styled.div`
  padding: 10px;
`

export const CityAndPickUpTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-right: 8px;
  padding-bottom: 3px;
  color: ${COLORS.lightBlack};

  @media (max-width: 500px) {
    display: none;
  }
`