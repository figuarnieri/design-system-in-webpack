import styled from 'styled-components'
import { StyleItem, StyleIcon } from '../item/style'
import color from '../../utils/token/color'

export default styled.ul`
  padding: 16px 0;
  &:first-child {
    flex: 1;
  }
  &:last-child {
    border-top: 1px solid ${color('gray4')};
    ${StyleItem} {
      padding: 10px 24px;
    }
    ${StyleIcon} {
      display: none;
    }
  }
`
