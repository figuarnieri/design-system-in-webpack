import React from 'react'
import { StyleHeader, StyleBrand, StyleContent, StyleDivisor } from './style'

export default props => {
  const { theme = 'light', brand = [], left, right } = props
  const brandMode = brand.constructor.name === 'Array' ? brand : [brand]
  const brandRender = brandMode.map((item, i) => (
    <>
      {i === 0 ? false : <StyleDivisor color="#f00" />}
      {item}
    </>
  ))
  return (
    <StyleHeader bgColor={theme}>
      <StyleBrand>{brandRender}</StyleBrand>
      <StyleContent>
        <div>{left}</div>
        <div>{right}</div>
      </StyleContent>
    </StyleHeader>
  )
}
