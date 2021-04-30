import styled from 'styled-components'
import { COLORS } from 'constants/colors'

type ImageType = {
  img: string
}

export const TotalStageContainer = styled.div`
  display: flex;
  padding-top: 32px;
  flex-wrap: wrap;

`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CarName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.black};
  margin-bottom: 8px;
`

export const CarNumber = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.black};
  border: 1px solid ${COLORS.grey};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-bottom: 8px;
  padding: 4px 8px;
`

export const DetailTitle = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;

`
export const DetailInfo = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;
`

export const CarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;
  min-width: 300px;
  
`

export const CarImage = styled.div`
margin: 0 auto;
width: 250px;
height: 116px;
background-image: url(${(props: ImageType) => props.img});
background-size: 100%;
background-repeat: no-repeat;
background-position: bottom;

@media (max-width: 600px){
  margin-right: auto;
  margin-left: 0px;
  }
`