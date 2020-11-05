import React from 'react'
import { StyleWrapper, StyleTitle, StyleContent } from './style'

export default props => {
  const { title, tabs, children } = props
  return (
    <StyleWrapper>
      <StyleTitle>{title}</StyleTitle>
      <StyleContent>{children}</StyleContent>
    </StyleWrapper>
  )
}
