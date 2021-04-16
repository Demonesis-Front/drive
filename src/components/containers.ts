import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type CarouselButtonContainerProps = {
  right?: boolean
}
type SliderContainerType = {
  image?: string
}
type LeftMenuItemProps = {
  active: boolean

}

export const Container100 = styled.div`
  height: 100%;
  width: 100%;
`

export const PageContainer = styled.main`
  height: 100%;
  display: flex;
  flex-grow: 1;
`

export const LeftMenuContainer = styled.nav`
  height: 100%;
  width: 64px;
  background-color: ${COLORS.lightBlack};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 0;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  flex-grow: 1;


`

export const HeaderContainer = styled.header`
  height: 80px;
  width: 556px;
  padding: 13px 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 456px;
    padding: 13px 32px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 80vw;
    margin-top: 22px;
    margin-right: 0;
    display: block;
    text-align: end;
  }
`

export const OfferContainer = styled.section`
  padding: 66px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1030px) {
    padding: 13px 32px;
  }

  @media (max-width: 500px) {
    align-self: center;
    padding: 0px;
  }
`

export const FooterContainer = styled.footer`
  height: 30px;
  padding: 25px 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1030px) {
    padding: 25px 32px;
  }

  @media (max-width: 500px) {
    height: 80px;
    padding: 0;
    background-color: ${COLORS.black};
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
  }
`

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

  &:hover{
    transition: 0.5s;
    background-color: ${COLORS.greenO2};
  }

  @media (max-width: 1030px) {
    width: 25px;
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
  height: 100%;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
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

  @media (max-width: 1030px) {
    padding: 25px 32px;
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

export const PopUp100 = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.black};
  opacity: 0.9;
  position: absolute;
  z-index: 1000;

  
`

export const LeftMenuList = styled.ul`
  z-index: 1001;
  position: absolute;
  left: 20px;
  top: 100px;
  list-style-type: none;

  @media (max-width: 500px) {
    top: 100px;
  }
`

export const LeftMenuItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  color: ${(props: LeftMenuItemProps) => props.active ? COLORS.green : COLORS.white};
  cursor: pointer;
  user-select: none;
  margin: 15px;
`

export const SocialMenuContainer = styled.div`
  z-index: 1001;
  position: absolute;
  left: 65px;
  top: 300px;
  display: flex;

  @media (max-width: 500px) {
    top: 300px;
  }
`

export const SocialRoundContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  background-color: ${COLORS.white};
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${COLORS.green};
  }
`