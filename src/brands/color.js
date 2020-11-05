import token from '../utils/token/color'

const brandMono = ({ text, color }) => {
  const colorTextObject = {
    gray: token('gray3'),
    white: token('white'),
    red: token('primary1'),
  }
  color.text = colorTextObject[text] || colorTextObject.gray
  color.brand = color.text
}

const brandColor = ({ text, color }) => {
  const colorTextObject = {
    black: token('gray1'),
    white: token('white'),
  }
  color.text = colorTextObject[text] || colorTextObject.black
  color.brand = token('primary1')
}

export default ({ mono, text, color }) => {
  if (mono) {
    brandMono({ text: mono, color })
  } else {
    brandColor({ text, color })
  }
}
