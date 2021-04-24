import styled from 'styled-components'
import {COLORS} from 'constants/colors'

export const TotalMobileButton = styled.div`
  width: 60px;
  height: 60px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 100px;
  right: 20px;
  cursor: pointer;
  background-color: ${COLORS.grey};
  color: ${COLORS.white};
  z-index: 1001;

  @media (max-width: 500px){
    display: flex;
  }
`