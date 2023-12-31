import color from 'style/color'
import styled, { keyframes } from 'styled-components'

interface Props {
  colorBD?: string
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Indicator = styled.div<Props>`
  width: 135px;
  height: 135px;
  opacity: 0.5;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border-top: solid 3px ${({ colorBD }) => colorBD ?? color.indicatorColor};
  border-left: solid 1px ${({ colorBD }) => colorBD ?? color.indicatorColor};
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  z-index: 99999;
  border-radius: 50%;
`

export const Overlay = styled.div`
  position: 'fix';
`
