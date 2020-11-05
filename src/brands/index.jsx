/* eslint-disable react-hooks/exhaustive-deps */

import React, { lazy, Suspense, useState, useEffect } from 'react'
import setColor from './color'

export default props => {
  const [BrandRendered, setBrandRendered] = useState()
  const { name, mono, text } = props

  const color = {
    text: 'black',
    brand: '',
  }

  const library = {
    placeholder: lazy(() => import('./library/placeholder')),
    autoinsights: lazy(() => import('./library/autoinsights')),
    autopago: lazy(() => import('./library/autopago')),
    cockpit: lazy(() => import('./library/cockpit')),
    crm: lazy(() => import('./library/crm')),
    estoque: lazy(() => import('./library/estoque')),
    financiamentos: lazy(() => import('./library/financiamentos')),
    'mais-fidelidade': lazy(() => import('./library/mais-fidelidade')),
    santander: lazy(() => import('./library/santander')),
    universidade: lazy(() => import('./library/universidade')),
    webmotors: lazy(() => import('./library/webmotors')),
    'webmotors-gearshift': lazy(() => import('./library/webmotors-gearshift')),
    wm1: lazy(() => import('./library/wm1')),
  }

  const Brand = library[name] || library.placeholder

  setColor({ mono, text, color })

  const propsCustom = { ...props }
  propsCustom['data-text'] = color.text
  propsCustom['data-brand'] = color.brand
  delete propsCustom.name
  delete propsCustom.mono
  delete propsCustom.text

  useEffect(() => {
    if (typeof Brand._result === 'object') {
      Brand._result.then(e => {
        setBrandRendered(e.default(propsCustom))
      })
    }
  }, [])

  return BrandRendered ? (
    BrandRendered
  ) : (
    <Suspense fallback={<></>}>
      <Brand {...propsCustom} />
    </Suspense>
  )
}
