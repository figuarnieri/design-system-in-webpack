const fontSize = {
  'x-small': 'x-small',
  small: 'small',
  regular: 'regular',
  big: 'big',
  'x-big': 'x-big',
  'xx-big': 'xx-big',
  'xxx-big': 'xxx-big',
}

export default token => fontSize[token] || fontSize.regular
