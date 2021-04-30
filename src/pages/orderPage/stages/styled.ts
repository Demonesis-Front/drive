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
  @media (max-width: 500px) {
      padding-top: 6px;
    }
`

export const StageStyledMenuItem = styled(MenuItem)`

`

export const StageStyledSelect = styled(Select).attrs({
  classes: {root: 'root', }
})`

  .root {
    font-size: 14px;
    font-weight: 700;
    min-width: 100px;
    max-width: 120px;
    padding: 0px;
    padding-left: 0px;
    /* padding-top: 10px; */
    background-color: transparent;
  }
  .root:focus {
    background-color: transparent;
  }


`