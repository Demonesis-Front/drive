import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type CarouselButtonContainerProps = {
  right?: boolean
}
type SliderContainerType = {
  image?: string
}

export const CarouselButtonContainer = styled.div`
  position: absolute;
  bottom: 50%;
  ${(props: CarouselButtonContainerProps)=> props.right ? 'left: 0;' : 'right:0;'}
  right: 0;
  height: 100vh;
  width: 64px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    transition: 0.5s;
    background-color: ${COLORS.greenO2};
  }

  @media (max-width: 1200px) {
    width: 32px;
  }
`

export const IndicatorContainer = styled.div`
  position: absolute;
	width: 100%;
	z-index: 100;
	bottom: 37px;
  display: flex;
  justify-content: center;
`

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    padding: 25px 66px;
    padding-bottom: 96px;
  }
`

export const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props: SliderContainerType) => props.image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SliderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px;
  padding-top: 0;
  z-index: 10;

  @media (max-width: 1200px) {
    padding: 25px 66px;
    padding-bottom: 96px;
  }
`

export const SliderLinerGradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(to bottom, transparent 30%, ${COLORS.blackO0} 30%, ${COLORS.black});
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SliderTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  color: ${COLORS.white};

  @media (max-width: 1200px) {
    font-size: 30px;
  }

`
export const SliderSubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  color: ${COLORS.white};

  @media (max-width: 1200px) {
    font-size: 18px;
    font-weight: 100;
  }
`