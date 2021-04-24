import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type ActiveType = {
  active: boolean
}

type CarouselButtonContainerProps = {
  right?: boolean
}
type SliderContainerType = {
  image?: string
}
type LeftMenuItemProps = {
  active: boolean
}
type ImageType = {
  img: string
}

export const Container100 = styled.div`
  height: 100%;
  width: 100%;
`

export const HomePageContainer = styled.main`
  padding-left: 64px;
  width: 100%;
  display: grid;
  grid-template-columns:  700px 1fr;

  @media (max-width: 1300px) {
    grid-template-columns:  600px 1fr;
  }

  @media (max-width: 1030px) {
    grid-template-columns:  500px 1fr;
  }

  @media (max-width: 950px) {
    grid-template-columns:  1fr 0;
  }
  @media (max-width: 500px) {
    padding-left: 0px;
  }
`

export const OrderPageContainer = styled.main`
  /* width: 100%; */
  width: auto;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 64px;

  @media (max-width: 500px) {
    margin-left: 0px;
  }
`

export const OrderPageContent = styled.div`
  flex-grow: 1;
  max-width: 1450px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  padding-top: 2px;
  padding-left: 64px;
  padding-right: 64px;

  @media (max-width: 800px) {
    /* width: calc(100% - 80px); */
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 500px) {
    width: auto;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 25px;
  }
`

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 64px;
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1002;

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

  padding: 2px 66px 24px 66px;

  @media (max-width: 1200px) {
    padding: 2px 32px 24px 32px;
  }

  @media (max-width: 500px) {
    padding: 0;
    padding-top: 24px;
  }
`

export const HeaderContainer = styled.header`
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding-right: 30px;
    display: block;
    text-align: end;
  }
`

export const OfferContainer = styled.section`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1030px) {
  }

  @media (max-width: 500px) {
    align-self: center;
  }
`

export const FooterContainer = styled.footer`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1030px) {
  }

  @media (max-width: 500px) {
    height: 80px;
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

export const PopUp100 = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, ${COLORS.black} 55%, ${COLORS.lightBlack02});
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1001;

  @media (max-width: 1550px) {
    background: linear-gradient(90deg, ${COLORS.black} 55%, ${COLORS.lightBlack02});
  }
  @media (max-width: 1400px) {
    background: linear-gradient(90deg, ${COLORS.black} 58%, ${COLORS.lightBlack02});
  }
  @media (max-width: 1300px) {
    background: linear-gradient(90deg, ${COLORS.black} 60%, ${COLORS.lightBlack02});
  }
  @media (max-width: 1200px) {
    background: linear-gradient(90deg, ${COLORS.black} 60%, ${COLORS.lightBlack02});
  }
  @media (max-width: 1100px) {
    background: linear-gradient(90deg, ${COLORS.black} 65%, ${COLORS.lightBlack02});
  }
  @media (max-width: 1000px) {
    background: ${COLORS.black};
  }
  
`

export const LeftMenuList = styled.ul`
  z-index: 1001;
  position: absolute;
  left: 20px;
  top: 100px;
  list-style-type: none;

  @media (max-width: 500px) {
    top: 60px;
    left: 20px;
    padding-left: 0px;
  }
`

export const LeftMenuItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  color: ${(props: LeftMenuItemProps) => props.active ? COLORS.green : COLORS.white};
  cursor: pointer;
  user-select: none;
  margin: 15px;

  &:hover{
    color: ${COLORS.green};
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-left: 0px;
  }
`

export const SocialMenuContainer = styled.div`
  z-index: 1001;
  position: absolute;
  left: 65px;
  top: 300px;
  display: flex;

  @media (max-width: 500px) {
    top: 245px;
    left: 12px;
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

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
  
`

export const OrderNavigationContainer = styled.div`
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

`

export const OrderNavigationContainerBorder = styled.div`
  position: absolute;
  left: 64px;
  top: 94px;
  width: calc(100% - 64px);
  height: 32px;
  border-bottom: 1px solid ${COLORS.lightGrey};
  border-top: 1px solid ${COLORS.lightGrey};
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }
`

export const StageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 800px) {
    display: none;
  }
`

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

export const StageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const StageContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const TotalMainContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    display: none;
    justify-content: center;
  }
`

export const TotalMobileMainContainer = styled.div`
  
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
  padding: 32px;
  border-left: 1px dotted ${COLORS.lightGrey};

  @media (max-width: 1300px) {
    padding: 0;
  }
  @media (max-width: 1000px) {
    border-left: none;
  }
`
export const TotalMobileContainer = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 4px 30px;
  z-index: 1000;
`



type RightType = {
  right?: boolean;
}

export const TotalDetailContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  ${(props: RightType) => props.right ? 'justify-content: flex-end;' : null}

`

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

export const MenuBackground = styled.div`
  width: 64px;

  @media (max-width: 500px) {
    display: none;
  }
`