import styled from 'styled-components'
import {COLORS} from 'constants/colors'

type ActiveType = {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${(props: ActiveType) => props.active ? COLORS.black : COLORS.grey};
  cursor: pointer;
`
export const Icon = styled.div`
  box-sizing: border-box;
  width: ${(props: ActiveType) => props.active ? '14px' : '14px'};
  height: ${(props: ActiveType) => props.active ? '14px' : '14px'};
  border-radius: 50%;
  border-color: ${(props: ActiveType) => props.active ? COLORS.green : COLORS.grey};
  border-width: ${(props: ActiveType) => props.active ? '3px' : '1px'};
  border-style: solid;
  margin-right: 8px;
  margin-bottom: 0px;
`