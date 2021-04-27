import styled from 'styled-components'
import {COLORS} from 'constants/colors'

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