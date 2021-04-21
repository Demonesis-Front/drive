import styled from 'styled-components'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import {Map} from '@styled-icons/boxicons-regular/Map'
import {Telegram} from '@styled-icons/boxicons-logos/Telegram'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {CaretRight} from '@styled-icons/boxicons-regular/CaretRight'

import {COLORS} from 'constants/colors'

type CarTitleIconType = {
  active: boolean;
}

export const HamburgerMenu = styled(Menu)`
  color: ${COLORS.white};
  width: 60px;
  height: 40px;
  margin-top: 32px;
  user-select: none; 
  cursor: pointer;
  z-index: 100;

  @media (max-width: 500px) {
    color: ${COLORS.black};
    position: absolute;
    left: 12px;
    top: 3px;
  }
`

export const ClosePopUp = styled(CloseOutline)`
  color: ${COLORS.white};
  width: 60px;
  height: 40px;
  margin-top: 32px;
  user-select: none; 
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 500px) {
    position: absolute;
    left: 12px;
    top: 3px;
  }
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
`
export const FacebookIcon = styled(Facebook)`
  color: ${COLORS.black};
  width: 35px;
  height: 40px;
`
export const InstagramIcon = styled(Instagram)`
  color: ${COLORS.black};
  width: 25px;
  height: 23px;
`

export const StageIcon = styled(CaretRight)`
color: ${COLORS.grey};
width: 25px;
height: 23px;
`


export const CarTypeIcon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border-color: ${(props: CarTitleIconType) => props.active ? COLORS.green : COLORS.grey};
  border-width: 2px;
  border-style: solid;
  margin-right: 7px;
  margin-bottom: 2px;
`