import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{-moz-box-sizing: border-box;box-sizing: border-box;}
  ::-webkit-input-placeholder, ::-moz-placeholder, :-ms-input-placeholder{color: inherit;}
  ::-moz-placeholder{opacity: 1;}
  :-webkit-autofill, :-webkit-autofill:focus {box-shadow: 0 0 0 50px white inset;}
  html{font-size: 10px;}
  body{min-height: 100vh;overflow-y: scroll;overflow-x: hidden;font-family: 'Poppins', sans-serif;background-color: #ecedf2;color: #2e2d37;}
  h1, h2, h3, h4, h5, h6, th{font-size: inherit;font-weight: inherit;}
  cite, var, address, dfn{font-style: inherit;}
  body, pre, form, input, textarea, keygen, select, button, h1, h2, h3, h4, h5, h6, p, hr, blockquote, ol, ul, dl, dd, figure, fieldset{margin: 0;}
  ol, fieldset, legend, input, button, textarea{padding: 0;font-family: inherit;}
  ul{padding-left: 0;}
  ol, ul, li{list-style-type: none;}
  a{text-decoration: none;cursor: pointer;color: inherit;}
  textarea{resize: none;overflow-y: auto;}
  iframe{border-style: none;}
  fieldset, hr, button, keygen, img{border-style: none;outline-style: none;font-family: inherit;font-size: inherit;}
  [type=button], [type=reset], [type=submit], [type=file], [type=image], button{cursor: pointer;-webkit-appearance: none;-moz-appearance: none;appearance: none;}
  [disabled]{cursor: not-allowed;}

  #root {min-height: 100vh;}
  ::selection { background: #f99;color: #fff; text-shadow: 2px 2px 3px #f55; }
`
