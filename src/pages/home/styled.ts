import styled from 'styled-components'
import {COLORS} from 'constants/colors'

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