import styled from 'styled-components'
import {COLORS} from 'constants/colors'
import {ChevronLeft, ChevronRight} from '@styled-icons/boxicons-regular/'

type CarouselIndicatorType = {
  selected?: boolean
}

type SliderButtonType = {
  color: string
}

export const BookButton = styled.div`
  width: 250px;
  height: 48px;
  background: linear-gradient(45deg, ${COLORS.green}, ${COLORS.lightGreen});
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  user-select: none; 
  cursor: pointer;

  &:hover{
    filter: brightness(90%);
  }
  &:active{
    filter: brightness(80%);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
export const DetailsButtonContainer = styled.div`
  width: 250px;
  height: 48px;
`

export const CarouselLeftButton = styled(ChevronLeft)`
  height: 45px;
  width: 45px;
  color: ${COLORS.white};
  cursor: pointer;
`
export const CarouselRightButton = styled(ChevronRight)`
  height: 45px;
  width: 45px;
  color: ${COLORS.white};
  cursor: pointer;
`

export const CarouselIndicator = styled.div`
  border-radius: 50%;
  background-color: ${(props: CarouselIndicatorType) => props.selected ? COLORS.green : 'white'};
  height: 8px;
  width: 8px;
  margin: 5px;
`

const handleColorTypeSliderButton = (color: string) => {
  switch (color) {
    case "blue":
      return `linear-gradient(45deg, ${COLORS.darkBlue}, ${COLORS.greenBlue})`;
    case "red":
      return `linear-gradient(45deg, ${COLORS.darkOrange}, ${COLORS.darkPink})`;
    case "purple":
      return `linear-gradient(45deg, ${COLORS.darkPurple}, ${COLORS.normalPurple})`;
    case "green":
      return `linear-gradient(45deg, ${COLORS.green}, ${COLORS.lightGreen})`;
    case "grey":
      return `${COLORS.lightGrey}`;
    default:
      return `linear-gradient(45deg, ${COLORS.darkGreen}, ${COLORS.normalGreen})`;
  }
};

export const SliderButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  border-radius: 3px;
  color: ${COLORS.white};
  width: 164px;
  height: 40px;
  background: ${(props: SliderButtonType) => handleColorTypeSliderButton(props.color)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  user-select: none; 
  cursor: pointer;

  &:hover{
    filter: brightness(90%);
  }
  &:active{
    filter: brightness(80%);
  }

  @media (max-width: 1030px) {
    margin-bottom: 0;
  }
`

export const OrderButton = styled(SliderButton)`
  width: 100%;
  border-radius: 8px;
  min-width: 280px;
  z-index: 1999;
  cursor: ${(props: SliderButtonType) => props.color === 'grey' ? 'auto' :  'pointer'};
  
  &:hover{
    filter: ${(props: SliderButtonType) => props.color === 'grey' ? 'none' :  'brightness(90%)'};
  }
  &:active{
    filter: ${(props: SliderButtonType) => props.color === 'grey' ? 'none' :  'brightness(80%)'};
  }


  @media (max-width: 1000px) {
    position: fixed;
    bottom: 40px;
    left: calc(50% + 32px);
    width: 240px;
    transform: translateX(-50%);
  }

  @media (max-width: 500px) {
    position: fixed;
    bottom: 40px;
    left: 50%;
    width: 240px;
    transform: translateX(-50%);
  }

`

export const OrderMobileButton = styled(SliderButton)`
  display: none;
  border-radius: 8px;
  width: 300px;
  position: fixed;
  bottom: 40px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1100;

  &:hover{
    filter: brightness(90%);
  }
  &:active{
    filter: brightness(80%);
  }

  @media (max-width: 500px) {
    display: flex
  }
`