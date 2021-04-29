import styled from 'styled-components'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem";

export const MobileStageContainer = styled.div`
  display: none;
  @media (max-width: 800px) {
      display: block;
      z-index: 2;
      background-color: transparent;
    }
`

export const StageStyledMenuItem = styled(MenuItem)`

`

export const StageStyledSelect = styled(Select).attrs({
  classes: {root: 'root'}
})`

  .root {
    font-size: 14px;
    font-weight: 700;
    min-width: 100px;
    padding: 10px;
    padding-left: 0px;
    background-color: transparent;
  }
  .root:focus {
    background-color: transparent;
  }
`