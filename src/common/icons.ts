import styled from 'styled-components'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import {Map} from '@styled-icons/boxicons-regular/Map'
import {Telegram} from '@styled-icons/boxicons-logos/Telegram'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {CaretRight} from '@styled-icons/boxicons-regular/CaretRight'
import {ShoppingCart} from '@styled-icons/typicons/ShoppingCart'

import {COLORS} from 'constants/colors'

type CarTitleIconType = {
  active: boolean;
}

export const HamburgerMenu = styled(Menu)`
  position: fixed;
  top: 22px;
  left: 2px;
  color: ${COLORS.white};
  width: 60px;
  height: 40px;
  user-select: none; 
  cursor: pointer;
  z-index: 100;

  @media (max-width: 500px) {
    color: ${COLORS.black};
  }
`

export const ClosePopUp = styled(CloseOutline)`
  position: fixed;
  top: 22px;
  left: 2px;
  color: ${COLORS.white};
  width: 60px;
  height: 40px;
  user-select: none; 
  cursor: pointer;
  z-index: 2003;
`

export const MarkMap = styled(Map)`
  color: ${COLORS.grey};
  width: 30px;
  height: 25px;
`
export const TelegramIcon = styled(Telegram)`
  color: ${COLORS.black};
  width: 30px;
  height: 25px;

  @media (max-width: 500px) {
    width: 20px;
    height: 18px;
  }
`
export const FacebookIcon = styled(Facebook)`
  color: ${COLORS.black};
  width: 35px;
  height: 40px;

  @media (max-width: 500px) {
    width: 22px;
    height: 20px;
  }
`
export const InstagramIcon = styled(Instagram)`
  color: ${COLORS.black};
  width: 25px;
  height: 23px;

  @media (max-width: 500px) {
    width: 22px;
    height: 20px;
  }
`

export const StageIcon = styled(CaretRight)`
color: ${COLORS.grey};
margin-left: 16px;
margin-right: 16px;
width: 18px;
height: 15px;
`


export const CarTypeIcon = styled.div`
  box-sizing: border-box;
  width: ${(props: CarTitleIconType) => props.active ? '14px' : '14px'};
  height: ${(props: CarTitleIconType) => props.active ? '14px' : '14px'};
  border-radius: 50%;
  border-color: ${(props: CarTitleIconType) => props.active ? COLORS.green : COLORS.grey};
  border-width: ${(props: CarTitleIconType) => props.active ? '3px' : '1px'};
  border-style: solid;
  margin-right: 8px;
  margin-bottom: 0px;
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  width: 25px;
  height: 22px;
  color: ${COLORS.white};
`