import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(0.9);
  }
  20% {
    transform: rotate(185deg) scale(1);
  }
  30% {
    transform: rotate(180deg) scale(0.9);
  }
  50% {
    transform: rotate(180deg) scale(0.9);
  }
  70% {
    transform: rotate(365deg) scale(1);
  }
  80% {
    transform: rotate(360deg) scale(0.9);
  }
`

export const StyleSteeringWheel = styled.path`
  transform: rotate(360deg) scale(0.9);
  transform-origin: 50%;
  animation: ${rotate} 2.3s infinite;
`

export const StyleHonk = styled.path`
  transform: rotate(360deg) scale(0.9);
  transform-origin: 50%;
  animation: ${rotate} 2.3s 0.1s infinite;
`
