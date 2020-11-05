import styled from 'styled-components'
import color from '~/utils/token/color'

export const StyleCover = styled.div`
  position: relative;
  padding: 32px;
  background-color: ${({ background }) => background};
  &:before {
    content: '';
    border-radius: 8px;
    position: absolute;
    left: 32px;
    top: 32px;
    bottom: 32px;
    width: 8px;
    background-color: ${color('primary')};
  }
`

export const StyleTitle = styled.div`
  font-size: 8rem;
  padding: 8px 32px;
  font-weight: 600;
`

export const StyleSubtitle = styled.div`
  font-size: 2rem;
  padding: 16px 32px 32px;
  font-weight: 400;
  &:empty {
    padding: 0px;
  }
`
