import React from 'react'

export default props => {
  const { 'data-brand': brand } = props

  const customColor = {
    '#aeaeba': '#deecf1',
    '#fff': '#fff',
    '#f3123c': '#ea1d25',
  }

  const customBrand = customColor[brand] || customColor.red

  return (
    <svg {...props} viewBox="0 0 125 22" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M15.8981 7.79038C16.3192 8.47468 16.5298 9.26424 16.5824 10.0538C20.478 11.0539 23.1101 13.2121 23.0575 15.5808C23.0575 19.0549 17.8985 21.8447 11.5287 21.8447C5.15898 21.8447 0 19.0549 0 15.5808C0 13.1068 2.68477 10.9486 6.52769 9.94853C6.52769 10.896 6.73826 11.8435 7.21204 12.6857L10.8444 18.9496C11.1076 19.4233 11.3182 19.9497 11.4235 20.4761L11.5814 20.2129C12.4763 18.6864 12.4763 16.7388 11.5814 15.2123L8.68604 10.2117C7.79111 8.63259 7.79111 6.73763 8.68604 5.21114L8.84396 4.94795C8.94925 5.47432 9.15982 6.0007 9.42303 6.47444L11.1076 9.42215L13.7397 14.0016C14.0029 14.4754 14.2135 15.0018 14.3188 15.5281L14.4767 15.2649C15.3717 13.7384 15.3717 11.7909 14.4767 10.2644L11.5814 5.26377C10.6865 3.73728 10.6865 1.78968 11.5814 0.263189L11.7393 0C11.8446 0.526377 12.0552 1.05275 12.3184 1.52649L15.8981 7.79038ZM27.7147 18.774C27.4592 19.5152 27.357 20.0976 27.3059 20.9976C28.4811 21.5799 29.9119 21.8447 31.5981 21.8447C35.175 21.8447 37.0146 20.0976 37.0146 17.6093C37.0146 15.4916 35.8904 14.221 33.2333 13.0563L32.1091 12.5798C30.6273 11.9445 29.8097 11.2563 29.8097 10.1445C29.8097 8.97976 30.6273 8.23857 32.4668 8.23857C33.4377 8.23857 34.8174 8.45034 35.9415 8.87388C36.1459 8.23857 36.2992 7.55033 36.3503 6.70326C35.175 6.27972 33.8976 6.06796 32.5179 6.06796C29.1454 6.06796 27.4592 7.65621 27.4592 10.1445C27.4592 12.421 28.7877 13.5857 30.7806 14.4857L31.8536 14.9093C33.7954 15.8093 34.613 16.3916 34.613 17.6622C34.613 18.9858 33.4888 19.6211 31.547 19.6211C30.4229 19.6211 28.8899 19.3564 27.7147 18.774ZM49.1505 10.3292V20.9794H46.9057L46.7988 19.6869C46.1574 20.6175 45.2488 21.2379 43.6988 21.2379C40.8126 21.2379 38.835 19.1699 38.835 15.6026C38.835 11.8802 40.9195 9.70875 44.9815 9.70875C46.585 9.76045 47.9212 9.91555 49.1505 10.3292ZM46.7233 11.6364V18.5589C46.0808 19.0418 45.3312 19.3638 44.3139 19.4175C42.1723 19.4175 41.2621 17.8076 41.2621 15.5538C41.2621 13.0853 42.44 11.5291 44.9564 11.5291C45.6525 11.5291 46.2414 11.5291 46.7233 11.6364ZM61.2865 13.9396V21.2379H58.886V14.3627C58.886 12.6175 58.2992 11.8242 55.8987 11.8242C55.3119 11.8242 54.6718 11.8771 53.9783 11.9828V21.2379H51.5778V10.3434C53.1248 9.97318 54.8318 9.70875 55.952 9.70875C60.0062 9.76164 61.2865 11.2953 61.2865 13.9396ZM69.6778 19.4299C69.2111 19.6445 68.5369 19.7518 67.8626 19.7518C66.7217 19.7518 66.0474 19.1615 66.0474 17.7663V12.3464H69.5741C69.6778 11.7025 69.7297 11.0049 69.7816 10.2536H66.0474V6.06796C65.3214 6.06796 64.4397 6.17528 63.7136 6.44359V18.0883C63.7136 20.7714 65.1658 21.8447 67.4477 21.8447C68.0701 21.8447 68.7962 21.7373 69.4185 21.469C69.5223 20.8251 69.626 20.0738 69.6778 19.4299ZM80.7039 10.3292V20.9794H78.4591L78.3522 19.6869C77.7108 20.6175 76.8022 21.2379 75.2522 21.2379C72.366 21.2379 70.3884 19.1699 70.3884 15.6026C70.3884 11.8802 72.4729 9.70875 76.5349 9.70875C78.1384 9.76045 79.4211 9.91555 80.7039 10.3292ZM78.2767 11.6364V18.5589C77.6877 19.0418 76.8846 19.3638 75.8673 19.4175C73.7257 19.4175 72.8155 17.8076 72.8155 15.5538C72.8155 13.0853 73.9934 11.5291 76.5098 11.5291C77.2058 11.5291 77.7948 11.5291 78.2767 11.6364ZM92.8398 13.9396V21.2379H90.3993V14.3627C90.3993 12.6175 89.8158 11.8242 87.4284 11.8242C86.8448 11.8242 86.2081 11.8771 85.5184 11.9828V21.2379H83.1311V10.3434C84.6696 9.97318 86.3673 9.70875 87.4814 9.70875C91.5135 9.76164 92.8398 11.2953 92.8398 13.9396ZM104.976 20.979V6.06796C104.178 6.06796 103.327 6.11973 102.583 6.32683V9.84749C101.998 9.74394 101.413 9.69216 100.775 9.69216C96.734 9.69216 94.6603 11.8667 94.6603 15.5944C94.6603 19.1669 96.6277 21.2379 99.499 21.2379C101.094 21.2379 101.998 20.6166 102.636 19.6329L102.743 20.979H104.976ZM102.549 18.5589V11.7438C101.906 11.6364 101.264 11.5291 100.621 11.5291C98.2118 11.5291 97.0874 13.0317 97.0874 15.5538C97.0874 17.8076 97.9976 19.4175 100.139 19.4175C101.103 19.3638 101.906 19.0418 102.549 18.5589ZM109.255 16.46H117.005C117.112 15.8368 117.112 15.3175 117.112 14.5905C117.112 11.8899 115.615 9.70875 112.141 9.70875C108.293 9.70875 106.796 12.2535 106.796 15.4214C106.796 19.0567 108.72 21.2379 112.782 21.2379C114.119 21.2379 115.241 21.0301 116.363 20.5627C116.477 20.0863 116.563 19.5324 116.642 19.0285L116.642 19.028L116.642 19.0272C116.675 18.8175 116.706 18.6165 116.738 18.4335C115.562 19.0048 114.225 19.2644 112.889 19.2644C110.698 19.2644 109.575 18.3816 109.255 16.46ZM109.223 14.5631H114.684C114.684 12.6528 113.721 11.5291 112.061 11.5291C110.294 11.5853 109.384 12.5966 109.223 14.5631ZM124.791 11.93C124.895 11.454 125 10.6078 125 9.86741C124.651 9.7969 124.163 9.77339 123.675 9.74988C123.431 9.73813 123.187 9.72638 122.96 9.70875C121.652 9.70875 119.926 9.97318 118.932 10.3434V21.2379H121.286V11.93C121.861 11.8771 122.437 11.8242 123.012 11.8242C123.647 11.8242 124.145 11.8702 124.676 11.9194L124.791 11.93Z"
        fill={customBrand}
      />
    </svg>
  )
}