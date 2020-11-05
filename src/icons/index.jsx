/* eslint-disable react-hooks/exhaustive-deps */

import React, { lazy, Suspense, Fragment, useEffect, useState } from 'react'

export default props => {
  const [IconRendered, setIconRendered] = useState()
  const { name } = props

  const library = {
    'alert-1': lazy(() => import('./library/alert-1')),
    'alert-2': lazy(() => import('./library/alert-2')),
    'arrow-1': lazy(() => import('./library/arrow-1')),
    'arrow-2': lazy(() => import('./library/arrow-2')),
    'arrow-3': lazy(() => import('./library/arrow-3')),
    'arrow-4': lazy(() => import('./library/arrow-4')),
    'arrow-5': lazy(() => import('./library/arrow-5')),
    'arrow-6': lazy(() => import('./library/arrow-6')),
    'arrow-7': lazy(() => import('./library/arrow-7')),
    'arrow-8': lazy(() => import('./library/arrow-8')),
    'arrow-9': lazy(() => import('./library/arrow-9')),
    'arrow-10': lazy(() => import('./library/arrow-10')),
    'arrow-11': lazy(() => import('./library/arrow-11')),
    'arrow-12': lazy(() => import('./library/arrow-12')),
    'arrow-13': lazy(() => import('./library/arrow-13')),
    'arrow-14': lazy(() => import('./library/arrow-14')),
    autopago: lazy(() => import('./library/autopago')),
    battery: lazy(() => import('./library/battery')),
    block: lazy(() => import('./library/block')),
    bullet: lazy(() => import('./library/bullet')),
    calendar: lazy(() => import('./library/calendar')), // fix icon fill
    camera: lazy(() => import('./library/camera')),
    'car-1': lazy(() => import('./library/car-1')),
    'car-2': lazy(() => import('./library/car-2')),
    'car-3': lazy(() => import('./library/car-3')),
    'car-4': lazy(() => import('./library/car-4')),
    'car-5': lazy(() => import('./library/car-5')),
    'car-6': lazy(() => import('./library/car-6')),
    card: lazy(() => import('./library/card')),
    'check-1': lazy(() => import('./library/check-1')),
    'check-2': lazy(() => import('./library/check-2')),
    'check-3': lazy(() => import('./library/check-3')),
    'checkbox-1': lazy(() => import('./library/checkbox-1')),
    'checkbox-2': lazy(() => import('./library/checkbox-2')),
    clock: lazy(() => import('./library/clock')),
    'close-1': lazy(() => import('./library/close-1')),
    'close-2': lazy(() => import('./library/close-2')),
    'close-3': lazy(() => import('./library/close-3')),
    color: lazy(() => import('./library/color')),
    config: lazy(() => import('./library/config')),
    crown: lazy(() => import('./library/crown')),
    cylinder: lazy(() => import('./library/cylinder')),
    directions: lazy(() => import('./library/directions')),
    door: lazy(() => import('./library/door')),
    edit: lazy(() => import('./library/edit')),
    'emoji-1': lazy(() => import('./library/emoji-1')),
    'emoji-2': lazy(() => import('./library/emoji-2')),
    'emoji-3': lazy(() => import('./library/emoji-3')),
    'emoji-4': lazy(() => import('./library/emoji-4')),
    estoque: lazy(() => import('./library/estoque')),
    'exit-full-screen': lazy(() => import('./library/exit-full-screen')),
    eye: lazy(() => import('./library/eye')),
    facebook: lazy(() => import('./library/facebook')),
    filter: lazy(() => import('./library/filter')),
    flag: lazy(() => import('./library/flag')),
    'foward-1': lazy(() => import('./library/foward-1')),
    'foward-2': lazy(() => import('./library/foward-2')),
    'full-screen': lazy(() => import('./library/full-screen')),
    garage: lazy(() => import('./library/garage')), // fix icon fill
    gas: lazy(() => import('./library/gas')), // fix icon fill
    'google-plus': lazy(() => import('./library/google-plus')),
    graph: lazy(() => import('./library/graph')),
    hand: lazy(() => import('./library/hand')),
    'heart-1': lazy(() => import('./library/heart-1')),
    'heart-2': lazy(() => import('./library/heart-2')),
    help: lazy(() => import('./library/help')), // fix icon fill
    history: lazy(() => import('./library/history')),
    home: lazy(() => import('./library/home')),
    id: lazy(() => import('./library/id')),
    image: lazy(() => import('./library/image')),
    infinity: lazy(() => import('./library/infinity')),
    info: lazy(() => import('./library/info')),
    inner: lazy(() => import('./library/inner')),
    instagram: lazy(() => import('./library/instagram')),
    keys: lazy(() => import('./library/keys')),
    like: lazy(() => import('./library/like')), // fix icon fill
    linkedin: lazy(() => import('./library/linkedin')),
    local: lazy(() => import('./library/local')),
    'lock-1': lazy(() => import('./library/lock-1')), // fix icon fill
    'lock-2': lazy(() => import('./library/lock-2')), // fix icon fill
    medal: lazy(() => import('./library/medal')),
    menu: lazy(() => import('./library/menu')),
    'message-1': lazy(() => import('./library/message-1')),
    'message-2': lazy(() => import('./library/message-2')),
    'message-3': lazy(() => import('./library/message-3')),
    microphone: lazy(() => import('./library/microphone')),
    'minus-1': lazy(() => import('./library/minus-1')),
    'minus-2': lazy(() => import('./library/minus-2')),
    mobile: lazy(() => import('./library/mobile')), // tamanho icon errado
    'money-1': lazy(() => import('./library/money-1')),
    'money-2': lazy(() => import('./library/money-2')),
    motorcycle: lazy(() => import('./library/motorcycle')),
    next: lazy(() => import('./library/next')),
    notification: lazy(() => import('./library/notification')),
    odometer: lazy(() => import('./library/odometer')),
    'options-1': lazy(() => import('./library/options-1')),
    'options-2': lazy(() => import('./library/options-2')),
    order: lazy(() => import('./library/order')),
    out: lazy(() => import('./library/out')),
    paper: lazy(() => import('./library/paper')),
    'person-1': lazy(() => import('./library/person-1')),
    'person-2': lazy(() => import('./library/person-2')),
    'person-3': lazy(() => import('./library/person-3')),
    'person-4': lazy(() => import('./library/person-4')),
    'person-5': lazy(() => import('./library/person-5')),
    phone: lazy(() => import('./library/phone')),
    'pin-1': lazy(() => import('./library/pin-1')),
    'pin-2': lazy(() => import('./library/pin-2')), // fix icon fill
    placeholder: lazy(() => import('./library/placeholder')),
    plate: lazy(() => import('./library/plate')),
    'play-1': lazy(() => import('./library/play-1')),
    'play-2': lazy(() => import('./library/play-2')),
    'plus-1': lazy(() => import('./library/plus-1')),
    'plus-2': lazy(() => import('./library/plus-2')),
    'radio-1': lazy(() => import('./library/radio-1')),
    'radio-2': lazy(() => import('./library/radio-2')),
    reply: lazy(() => import('./library/reply')),
    'rotate-1': lazy(() => import('./library/rotate-1')),
    'rotate-2': lazy(() => import('./library/rotate-2')),
    santande: lazy(() => import('./library/santander')), // fix icon fill
    'save-1': lazy(() => import('./library/save-1')),
    'save-2': lazy(() => import('./library/save-2')),
    search: lazy(() => import('./library/search')),
    security: lazy(() => import('./library/security')),
    send: lazy(() => import('./library/send')),
    'share-1': lazy(() => import('./library/share-1')),
    'share-2': lazy(() => import('./library/share-2')),
    'shield-1': lazy(() => import('./library/shield-1')),
    'shield-2': lazy(() => import('./library/shield-2')),
    sound: lazy(() => import('./library/sound')),
    'star-1': lazy(() => import('./library/star-1')),
    'star-2': lazy(() => import('./library/star-2')),
    'steering-wheel': lazy(() => import('./library/steering-wheel')),
    target: lazy(() => import('./library/target')),
    transmission: lazy(() => import('./library/transmission')),
    trash: lazy(() => import('./library/trash')),
    twitter: lazy(() => import('./library/twitter')),
    'visualization-1': lazy(() => import('./library/visualization-1')),
    'visualization-2': lazy(() => import('./library/visualization-2')),
    'visualization-3': lazy(() => import('./library/visualization-3')),
    wallet: lazy(() => import('./library/wallet')),
    whatsapp: lazy(() => import('./library/whatsapp')),
    wheel: lazy(() => import('./library/wheel')),
    wm1: lazy(() => import('./library/wm1')),
    youtube: lazy(() => import('./library/youtube')),
    'zoom-in': lazy(() => import('./library/zoom-in')),
    'zoom-out': lazy(() => import('./library/zoom-out')),
  }

  const Icon = library[name] || library.placeholder
  const customAttributes = { ...props }
  delete customAttributes.name

  useEffect(() => {
    if (typeof Icon._result === 'object') {
      Icon._result.then(e => setIconRendered(e.default(customAttributes)))
    }
  }, [])

  return IconRendered ? (
    IconRendered
  ) : (
    <Suspense fallback={<Fragment />}>
      <Icon data-icon-name={name} {...customAttributes} />
    </Suspense>
  )
}
