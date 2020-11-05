const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
}

export default token => fontWeight[token] || fontWeight.regular
