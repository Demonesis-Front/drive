import styled from 'styled-components'
import {COLORS} from 'constants/colors'
import {ReactComponent as CheckIcon} from 'assets/img/CheckIcon.svg'

type ActiveType = {
  active: boolean
}

export const ParagraphTitle = styled.div`
  color: ${COLORS.black};
  font-size: 14px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Container = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
  color: ${(props: ActiveType) => props.active ? COLORS.black : COLORS.grey};
  cursor: pointer;
  user-select: none;
`

export const DateTimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 13px;
`

export const DateTimeTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.black};
  user-select: none;
  padding-bottom: 3px;
  margin-right: 8px;
  width: 18px;
  text-align: right;
`

export const IconContainer = styled.div`
  height: 11px;
  width: 11px;
  border: 1px solid;
  border-color: ${({active}: ActiveType) => active ? COLORS.green : COLORS.grey};
  display: flex;
  justify-content: flex-end;
  position: relative;
`

export const Icon = styled(CheckIcon)`
position: absolute;
  width: 13px;
  height: 10px;
  color: black;
  left: 1px;
  top: -1px;
`