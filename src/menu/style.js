import styled from 'styled-components'
import color from '../utils/token/color'

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

export default styled.nav`
  width: 216px;
  background-color: ${({ theme }) => setBgColor(theme)};
  color: ${({ theme }) => setColor(theme)};
  box-shadow: 1px 0px 4px -2px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  ${({ divsion }) => {
    if (divsion) {
      return `
        display: flex;
        flex-direction: column;
      `
    }
  }}
`
