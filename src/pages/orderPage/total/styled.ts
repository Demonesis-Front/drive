import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type RightType = {
  right?: boolean;
}

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

export const TotalDetailContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  ${(props: RightType) => props.right ? 'justify-content: flex-end;' : null}

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