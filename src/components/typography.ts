import styled from 'styled-components'
import {COLORS} from 'constants/colors'

export const LanguageMenu = styled.div`
  font-size: 13px;
  color: ${COLORS.green};
  font-weight: 900;
  text-align: center;
  margin-bottom: 33px;

  @media (max-width: 500px) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  color: ${COLORS.green};
  font-weight: 700;
  font-size: 30px;

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

  @media (max-width: 1030px) {
    font-size: 30px;
  }
`
export const SliderSubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  color: ${COLORS.white};

  @media (max-width: 1030px) {
    font-size: 18px;
    font-weight: 100;
  }
`