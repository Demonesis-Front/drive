import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type StageTitlePropsType = {
  disable?: boolean;
  active?: boolean;
}

type ActiveType = {
  active: boolean;
}

export const LanguageMenu = styled.div`
position: fixed;
left: 8px;
bottom: 18px;
  font-size: 13px;
  color: ${COLORS.white};
  font-weight: 900;
  text-align: center;
  /* margin-bottom: 33px; */
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  padding: 13px 10px;
  border: 1px solid transparent;
  z-index: 1002;

  &:hover{
    border: 1px solid ${COLORS.white};
  }

  &:active{
    color: ${COLORS.green};
  }

  @media (max-width: 500px) {
    display: ${(props: ActiveType) => props.active ? 'block' : 'none'};
  }
`

export const LogoContainer = styled.div`
  color: ${COLORS.green};
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 500px) {
    
  }
`

export const CityContainer = styled.div`
  font-size: 14;
  font-weight: 400;
  color: ${COLORS.grey};
`

export const OfferTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: ${COLORS.black};
  margin: 0;
  
  @media (max-width: 500px) {
    font-size: 40px;
    margin-left: 20px;
  }
`
export const OfferSubTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: ${COLORS.green};

  @media (max-width: 500px) {
    font-size: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const OfferDescription = styled.h2`
  font-size: 24px;
  font-weight: 300;
  color: ${COLORS.grey};

  @media (max-width: 500px) {
    font-size: 18px;
    width: 80vw;
    margin-left: 20px;
  }
`

export const LicenseText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.grey};

  @media (max-width: 500px) {
    color: ${COLORS.lightGrey};
    margin-right: 40px;
  }
`

export const TelephoneNumber = styled.address`
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  color: ${COLORS.black};

  @media (max-width: 500px) {
    color: ${COLORS.green};
    margin-bottom: 10px;
    margin-right: 40px;
  }
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

export const StageTitle = styled.div`
  font-size: 14px;
  font-weight: 900;
  user-select: none;  
  cursor: pointer;
  ${(props: StageTitlePropsType) => {
    if(props.active){
      return `color: ${COLORS.green}`
    }
    if(props.disable){
      return `color: ${COLORS.grey}`
    }

    return `color: ${COLORS.black}`
  } }
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

export const TotalTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${COLORS.black};

  @media (max-width: 1000px) {
    text-align: center;
  }
`

export const TotalDetailTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${COLORS.black};
`
export const TotalDetail = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${COLORS.grey};
`

export const TotalDetailBorderBottom = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px dotted ${COLORS.grey};
`

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.black};
  margin-top: 30px;
`
export const TotalPriceTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.black};
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