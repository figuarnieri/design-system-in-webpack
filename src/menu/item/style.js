import { useContext } from 'react'
import styled from 'styled-components'
import Context from './context'
import Icon from '../../icons'
import color from '../../utils/token/color'

export const StyleItem = styled.a`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
  color: ${color('gray2')};
  fill: ${color('gray2')};
  &:hover {
    color: ${color('gray1')};
  }
`

export const StyleIcon = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`

export const StyleIconSvg = styled(Icon)`
  width: 16px;
  height: 16px;
`

export const StylePlaceholder = styled.span`
  flex: 1;
  line-height: 1.25em;
`

export const StyleChevron = styled.span`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  transform: ${() => {
    const { open } = useContext(Context).get
    return open ? 'rotate(0deg)' : 'rotate(-180deg)'
  }};
  transition: transform 0.3s;
`

export const StyleChevronSvg = styled(Icon)`
  width: 16px;
  height: 16px;
`

export const StyleItemSub = styled.ul`
  margin: ${() => {
    const { open } = useContext(Context).get
    return open ? '8px 0px' : '0px 0px'
  }};
  height: 0px;
  overflow: hidden;
  transition: margin 0.3s, height 0.3s;
  ${StyleItem} {
    color: ${color('gray3')};
    &:hover {
      color: ${color('gray1')};
    }
  }
  ${StyleIcon} {
    opacity: 0;
  }
`
