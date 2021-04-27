import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type StageTitlePropsType = {
  disable?: boolean;
  active?: boolean;
}

export const OrderPageContainer = styled.main`
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

  @media (max-width: 1310px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
