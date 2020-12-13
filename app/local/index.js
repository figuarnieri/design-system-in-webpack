import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Reset from '@/reset'
import Routes from '#/config/routes'
import Frame from '#/components/frame'

export default () => (
  <BrowserRouter>
    <Reset />
    <Frame>
      <Routes />
    </Frame>
  </BrowserRouter>
)
