import styled from 'styled-components'
import color from '../utils/token/color'
import shadow from '../utils/token/shadow'

const setBgColor = theme => {
  const objectColor = {
    dark: color('gray1'),
    light: color('white'),
  }
  return objectColor[theme] || objectColor.light
}

const setColor = theme => {
  const objectColor = {
    dark: color('white'),
    light: color('gray1'),
  }
  return objectColor[theme] || objectColor.light
}

export const StyleHeader = styled.header`
  padding: 16px;
  background-color: ${({ bgColor }) => setBgColor(bgColor)};
  color: ${({ bgColor }) => setColor(bgColor)};
  display: flex;
  align-items: center;
  box-shadow: ${shadow('overlap')};
  position: relative;
  z-index: 1;
`

export const StyleBrand = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 16px;
  svg,
  img {
    height: inherit;
  }
`

export const StyleContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const StyleDivisor = styled.span`
  width: 6px;
  height: 6px;
  background-color: ${({ color = color('white')}) => color};
  border-radius: 100%;
  margin-right: 16px;
  margin-left: 16px;
`;
