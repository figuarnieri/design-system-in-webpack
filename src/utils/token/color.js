const color = {
  primary1: '#f3123c',
  primary2: '#ff859c',
  primary3: '#ffc8d2',
  gray1: '#2e2d37',
  gray2: '#696977',
  gray3: '#aeaeba',
  gray4: '#ecedf2',
  success: '#27ae60',
  danger: '#ff8332',
  warning: '#f2c94c',
  error: '#9b51e0',
  modal: 'rgba(46, 45, 55, 0.8)',
  white: '#fff',
}

export default token => color[token] || color.primary1
