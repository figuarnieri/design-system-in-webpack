const shadow = {
  overlap: '0px 2px 4px rgba(46, 45, 55, 0.16)',
  common: '0px 1px 2px rgba(46, 45, 55, 0.12)',
  modal: '0px 16px 16px rgba(46, 45, 55, 0.4)',
}

export default token => shadow[token] || shadow.overlap
