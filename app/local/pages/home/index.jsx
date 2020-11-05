import React from 'react'
import Cover from '#/components/cover'
import color from '~/utils/token/color'
import Icon from '~/icons'

export default () => (
  <>
    <Cover
      title="Eleanor Design System"
      subtitle="Eleanor é a linguagem universal entre design, tecnologia e negócios. Com esta documentação, escalamos a maneira como exigimos, projetamos e desenvolvemos."
      background={color('white')}
    />
  </>
)
