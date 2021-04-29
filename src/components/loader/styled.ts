import styled from 'styled-components'

export const CircularContainer = styled.div`
  margin: auto auto;

  @media (max-width: 500px){
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`