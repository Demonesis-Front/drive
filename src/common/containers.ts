import styled from 'styled-components'
import {COLORS} from 'constants/colors'

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
  z-index: 2002;

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
  height: 80px;
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

export const PopUp100 = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, ${COLORS.black} 55%, ${COLORS.lightBlack02});
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2001;

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

