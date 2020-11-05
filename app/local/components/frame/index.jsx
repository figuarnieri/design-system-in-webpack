import React from 'react'
import { Link } from 'react-router-dom'
import Menu, { MenuDivision, MenuItem } from '~/menu'
import Header from '~/header'
import Brands from '~/brands'
import Wrapper, { WrapperBody, WrapperAside, WrapperInside, WrapperContent } from '~/wrapper'

export default ({ children }) => (
  <Wrapper>
    <Header theme="dark" brand={<Brands name="webmotors" text="white" />} />
    <WrapperBody>
      <WrapperAside>
        <Menu divsion>
          <MenuDivision>
            <MenuItem placeholder="Home" icon="alert-1" as={Link} href="/" />
            <MenuItem placeholder="Introdução" icon="alert-1">
              <MenuItem href="/started/requirements" placeholder="Requisitos" as={Link} />
              <MenuItem href="/started/setup" placeholder="Instalação" as={Link} />
              <MenuItem href="/started/usage" placeholder="Mode de uso" as={Link} />
            </MenuItem>
            <MenuItem placeholder="Componentes" icon="alert-1">
              <MenuItem href="/components/brands" placeholder="Brands" as={Link} />
              <MenuItem href="/components/form" placeholder="Form" as={Link} />
              <MenuItem href="/components/header" placeholder="Header" as={Link} />
              <MenuItem href="/components/icons" placeholder="Icons" as={Link} />
              <MenuItem href="/components/loader" placeholder="Loader" as={Link} />
              <MenuItem href="/components/menu" placeholder="Menu" as={Link} />
              <MenuItem href="/components/reset" placeholder="Reset" as={Link} />
              <MenuItem href="/components/wrapper" placeholder="Wrapper" as={Link} />
            </MenuItem>
            <MenuItem placeholder="Utilitários" icon="alert-1">
              <MenuItem href="/utils/request" placeholder="Request" as={Link} />
              <MenuItem href="/utils/token" placeholder="Token" as={Link} />
            </MenuItem>
          </MenuDivision>
          <MenuDivision>
            <MenuItem placeholder="Git Project"></MenuItem>
          </MenuDivision>
        </Menu>
      </WrapperAside>
      <WrapperInside>{children}</WrapperInside>
    </WrapperBody>
  </Wrapper>
)
