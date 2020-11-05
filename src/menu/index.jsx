import React from 'react'
import MenuItem from './item'
import MenuDivision from './division'
import StyleMenu from './style'

export default props => {
  const { theme, children, divsion } = props
  return (
    <StyleMenu theme={theme} divsion={divsion}>
      {children}
    </StyleMenu>
  )
}

export { MenuItem, MenuDivision }
