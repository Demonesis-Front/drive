import styled from 'styled-components'
import {COLORS} from 'constants/colors'

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

export const LeftMenuList = styled.ul`
  z-index: 1001;
  position: absolute;
  left: 20px;
  top: 100px;
  list-style-type: none;

  @media (max-width: 500px) {
    top: 60px;
    left: 20px;
    padding-left: 0px;
  }
`

export const LeftMenuItem = styled.li`
  font-size: 25px;
  font-weight: 500;
  color: ${(props: ActiveType) => props.active ? COLORS.green : COLORS.white};
  cursor: pointer;
  user-select: none;
  margin: 15px;

  &:hover{
    color: ${COLORS.green};
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-left: 0px;
  }
`

export const SocialMenuContainer = styled.div`
  z-index: 1001;
  position: absolute;
  left: 65px;
  top: 300px;
  display: flex;

  @media (max-width: 500px) {
    top: 245px;
    left: 12px;
  }
`

export const SocialRoundContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  background-color: ${COLORS.white};
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${COLORS.green};
  }

  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
  
`

// TODO: MenuBackground deprecated, delete after next iteration

export const MenuBackground = styled.div`
  width: 64px;

  @media (max-width: 500px) {
    display: none;
  }
`
