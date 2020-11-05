import React from 'react'

export default props => {
  const { 'data-brand': brand } = props
  return (
    <svg {...props} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2965 0C5.05785 0 8.63095e-05 5.04864 8.63095e-05 11.2761C8.63095e-05 17.5035 5.05785 22.5518 11.2965 22.5518C17.5352 22.5518 22.5926 17.5035 22.5926 11.2761C22.5926 5.04864 17.5352 0 11.2965 0Z"
        fill={brand}
      />
      <path
        d="M17.6114 15.0251C17.6114 15.5579 17.1653 15.9856 16.6259 15.9572C16.1202 15.9306 15.7412 15.4777 15.7412 14.9722V12.9102C15.7412 12.5232 15.4267 12.2096 15.0393 12.2096H12.9337C12.5459 12.2096 12.2318 12.5232 12.2318 12.9102V15.7257C12.2318 16.2585 11.7854 16.6862 11.246 16.6578C10.7406 16.6312 10.3616 16.1783 10.3616 15.6728V12.9102C10.3616 12.5232 10.0468 12.2096 9.65973 12.2096H7.55409C7.16595 12.2096 6.8522 12.5232 6.8522 12.9102V15.0251C6.8522 15.5579 6.40581 15.9856 5.86641 15.9572C5.3607 15.9306 4.98169 15.4777 4.98169 14.9722V7.52706C4.98169 6.99495 5.42773 6.56652 5.96678 6.59489C6.47284 6.62117 6.8522 7.07447 6.8522 7.57996V9.64187C6.8522 10.029 7.16595 10.3425 7.55409 10.3425H9.65973C10.0468 10.3425 10.3616 10.029 10.3616 9.64187V6.82645C10.3616 6.29433 10.8073 5.8659 11.3467 5.89428C11.8524 5.92055 12.2318 6.37385 12.2318 6.87934V9.64187C12.2318 10.029 12.5459 10.3425 12.9337 10.3425H15.0393C15.4267 10.3425 15.7412 10.029 15.7412 9.64187V7.57996C15.7412 7.07447 16.1202 6.62117 16.6259 6.59489C17.1653 6.56652 17.6114 6.99495 17.6114 7.52706V15.0251Z"
        fill="white"
      />
    </svg>
  )
}
