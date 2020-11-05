import React from 'react'
import { StyleCover, StyleTitle, StyleSubtitle } from './style'

export default ({ title, subtitle, background = 'transparent' }) => (
  <StyleCover background={background}>
    <StyleTitle>{title}</StyleTitle>
    <StyleSubtitle>{subtitle}</StyleSubtitle>
  </StyleCover>
)
