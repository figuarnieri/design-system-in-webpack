import React, { useState, useRef, useEffect } from 'react'
import Context from './context'
import {
  StyleItem,
  StyleIcon,
  StyleIconSvg,
  StylePlaceholder,
  StyleChevron,
  StyleChevronSvg,
  StyleItemSub,
} from './style'

export default props => {
  const { href, as = 'a', icon, placeholder, children } = props
  const attrTag = children ? 'span' : as
  const [open, setOpen] = useState(false)
  const attrHref = as.displayName === 'Link' ? { to: href } : { href }
  const refSubitem = useRef()

  const handleClick = e => {
    if (!open) {
      const { current } = refSubitem
      if (current) {
        const [classList] = current.classList
        const submenuList = document.querySelectorAll(`.${classList}`)
        ;[...submenuList].forEach(item => {
          if (item.clientHeight) {
            item.previousElementSibling.click()
          }
        })
      }
    }
    setOpen(stateOpen => !stateOpen)
  }

  useEffect(() => {
    const { current } = refSubitem
    if (current) {
      if (open) {
        current.style.height = 'auto'
        const { offsetHeight } = current
        current.style.height = '0px'
        setTimeout(() => {
          current.style.height = `${offsetHeight}px`
        }, 10)
      } else {
        current.style.height = '0px'
      }
    }
  }, [open])

  return (
    <Context.Provider
      value={{
        get: {
          as: attrTag,
          open,
        },
        set: {
          setOpen,
        },
      }}
    >
      <li>
        <StyleItem {...attrHref} as={attrTag} onClick={e => handleClick(e)}>
          <StyleIcon>
            <StyleIconSvg name={icon} />
          </StyleIcon>
          <StylePlaceholder>{placeholder}</StylePlaceholder>
          {children ? (
            <StyleChevron>
              <StyleChevronSvg name="arrow-5" />
            </StyleChevron>
          ) : null}
        </StyleItem>
        {children ? <StyleItemSub ref={refSubitem}>{children}</StyleItemSub> : null}
      </li>
    </Context.Provider>
  )
}
