import React from 'react'

export default props => {
  const { 'data-brand': brand, 'data-text': text } = props
  return (
    <svg {...props} viewBox="0 0 168 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M167.22 17.0543C167.22 17.5228 167.061 17.9168 166.742 18.2371C166.423 18.5573 166.03 18.7175 165.564 18.7175C165.098 18.7175 164.706 18.5573 164.386 18.2371C164.068 17.9168 163.908 17.5228 163.908 17.0543C163.908 16.5857 164.067 16.1908 164.386 15.8705C164.705 15.5503 165.098 15.3901 165.564 15.3901C166.03 15.3901 166.423 15.5503 166.742 15.8705C167.06 16.1917 167.22 16.5857 167.22 17.0543Z"
        fill={brand}
      />
      <path
        d="M35.9815 7.28516C35.6622 7.57723 35.502 8.0731 35.502 8.77459V8.93563H37.6511V10.6835H35.502V18.7648H33.4603V10.6835H32.1283V8.93563H33.4603V8.61446C33.4603 7.41345 33.8097 6.5127 34.5076 5.91129C35.2063 5.31078 36.2536 5.04602 37.6511 5.1179V6.90212C36.8577 6.86663 36.3009 6.99401 35.9815 7.28516Z"
        fill={text}
      />
      <path
        d="M38.5564 5.22527C38.7929 4.99963 39.1068 4.88589 39.4972 4.88589C39.8875 4.88589 40.2041 4.99872 40.4471 5.22527C40.6891 5.45182 40.811 5.73661 40.811 6.08144C40.811 6.42627 40.6891 6.70651 40.4471 6.92032C40.2041 7.13414 39.8875 7.2415 39.4972 7.2415C39.1068 7.2415 38.7929 7.13414 38.5564 6.92032C38.3198 6.70651 38.2015 6.42718 38.2015 6.08144C38.2015 5.73661 38.3198 5.45091 38.5564 5.22527ZM40.5098 8.93565V18.7648H38.4854V8.93565H40.5098Z"
        fill={text}
      />
      <path
        d="M50.3654 9.88098C51.0523 10.618 51.3953 11.6707 51.3953 13.0382V18.7648H49.3709V13.252C49.3709 12.3722 49.1462 11.6907 48.6958 11.2094C48.2454 10.728 47.6304 10.4869 46.8488 10.4869C46.0436 10.4869 45.3985 10.7453 44.9135 11.263C44.4277 11.7807 44.1857 12.5387 44.1857 13.5377V18.7648H42.1613V8.93564H44.1857V11.0938C44.4459 10.3568 44.8835 9.78635 45.4995 9.38147C46.1145 8.97749 46.8251 8.7746 47.6304 8.7746C48.7677 8.77551 49.6793 9.144 50.3654 9.88098Z"
        fill={text}
      />
      <path
        d="M59.1564 9.47067C59.7832 9.91103 60.2273 10.4933 60.4884 11.2194V8.93567H62.5128V18.7648H60.4884V16.4811C60.2282 17.2071 59.7842 17.7894 59.1564 18.2289C58.5286 18.6693 57.7716 18.8895 56.8835 18.8895C56.031 18.8895 55.2704 18.6875 54.6016 18.2826C53.9329 17.8786 53.4088 17.2954 53.0303 16.5348C52.6509 15.7741 52.4617 14.8752 52.4617 13.8407C52.4617 12.818 52.6509 11.9264 53.0303 11.1648C53.4088 10.4033 53.9329 9.82096 54.6016 9.41608C55.2704 9.0121 56.031 8.8092 56.8835 8.8092C57.7716 8.81102 58.5286 9.03121 59.1564 9.47067ZM55.3468 11.4596C54.8082 12.0364 54.5389 12.8307 54.5389 13.8416C54.5389 14.8524 54.8082 15.6467 55.3468 16.2227C55.8854 16.7995 56.6042 17.0879 57.5041 17.0879C58.0727 17.0879 58.5813 16.9542 59.0317 16.6867C59.4812 16.4192 59.8369 16.0416 60.0971 15.5539C60.3574 15.0663 60.4875 14.4958 60.4875 13.8416C60.4875 13.1992 60.3574 12.6315 60.0971 12.1374C59.836 11.6443 59.4812 11.2631 59.0317 10.9956C58.5813 10.7281 58.0727 10.5943 57.5041 10.5943C56.6051 10.5943 55.8854 10.8828 55.3468 11.4596Z"
        fill={text}
      />
      <path
        d="M72.3501 9.88098C73.0371 10.618 73.3801 11.6707 73.3801 13.0382V18.7648H71.3557V13.252C71.3557 12.3722 71.1309 11.6907 70.6806 11.2094C70.2302 10.728 69.6151 10.4869 68.8336 10.4869C68.0283 10.4869 67.3832 10.7453 66.8983 11.263C66.4124 11.7807 66.1704 12.5387 66.1704 13.5377V18.7648H64.146V8.93564H66.1704V11.0938C66.4306 10.3568 66.8683 9.78635 67.4842 9.38147C68.0993 8.97749 68.8099 8.7746 69.6151 8.7746C70.7524 8.77551 71.6632 9.144 72.3501 9.88098Z"
        fill={text}
      />
      <path
        d="M82.4368 9.81908C83.2657 10.4906 83.7806 11.404 83.9817 12.5577H81.8326C81.7144 11.939 81.4268 11.4541 80.971 11.1038C80.5152 10.7535 79.9438 10.577 79.2569 10.577C78.4753 10.577 77.8247 10.8536 77.3034 11.4068C76.7821 11.96 76.5218 12.7716 76.5218 13.8415C76.5218 14.9115 76.7821 15.7268 77.3034 16.2854C77.8247 16.8441 78.4753 17.1243 79.2569 17.1243C79.9438 17.1243 80.5143 16.946 80.971 16.5893C81.4268 16.2326 81.7135 15.7449 81.8326 15.1263H83.9817C83.7806 16.2799 83.2657 17.1953 82.4368 17.8731C81.6079 18.5509 80.5598 18.8903 79.2932 18.8903C78.3461 18.8903 77.5081 18.6883 76.7802 18.2834C76.0524 17.8795 75.481 17.2962 75.067 16.5356C74.6521 15.775 74.4456 14.876 74.4456 13.8415C74.4456 12.8189 74.653 11.9272 75.067 11.1657C75.481 10.4041 76.0524 9.82181 76.7802 9.41693C77.5081 9.01296 78.3461 8.81006 79.2932 8.81006C80.5607 8.81097 81.6079 9.1467 82.4368 9.81908Z"
        fill={text}
      />
      <path
        d="M85.2071 5.22527C85.4437 4.99963 85.7576 4.88589 86.1479 4.88589C86.5382 4.88589 86.8549 4.99872 87.0978 5.22527C87.3398 5.45182 87.4617 5.73661 87.4617 6.08144C87.4617 6.42627 87.3398 6.70651 87.0978 6.92032C86.8549 7.13414 86.5382 7.2415 86.1479 7.2415C85.7576 7.2415 85.4437 7.13414 85.2071 6.92032C84.9706 6.70651 84.8523 6.42718 84.8523 6.08144C84.8523 5.73661 84.9706 5.45091 85.2071 5.22527ZM87.1606 8.93565V18.7648H85.1362V8.93565H87.1606Z"
        fill={text}
      />
      <path
        d="M95.0099 9.47067C95.6368 9.91103 96.0808 10.4933 96.3419 11.2194V8.93567H98.3664V18.7648H96.3419V16.4811C96.0817 17.2071 95.6377 17.7894 95.0099 18.2289C94.3821 18.6693 93.6251 18.8895 92.7371 18.8895C91.8846 18.8895 91.1239 18.6875 90.4552 18.2826C89.7864 17.8786 89.2623 17.2954 88.8838 16.5348C88.5044 15.7741 88.3152 14.8752 88.3152 13.8407C88.3152 12.818 88.5044 11.9264 88.8838 11.1648C89.2623 10.4033 89.7864 9.82096 90.4552 9.41608C91.1239 9.0121 91.8846 8.8092 92.7371 8.8092C93.6242 8.81102 94.3821 9.03121 95.0099 9.47067ZM91.2003 11.4596C90.6617 12.0364 90.3924 12.8307 90.3924 13.8416C90.3924 14.8524 90.6617 15.6467 91.2003 16.2227C91.739 16.7995 92.4578 17.0879 93.3576 17.0879C93.9263 17.0879 94.4349 16.9542 94.8853 16.6867C95.3347 16.4192 95.6905 16.0416 95.9507 15.5539C96.2109 15.0663 96.341 14.4958 96.341 13.8416C96.341 13.1992 96.2109 12.6315 95.9507 12.1374C95.6896 11.6443 95.3347 11.2631 94.8853 10.9956C94.4349 10.7281 93.9263 10.5943 93.3576 10.5943C92.4587 10.5943 91.739 10.8828 91.2003 11.4596Z"
        fill={text}
      />
      <path
        d="M115.014 9.88098C115.706 10.618 116.053 11.6707 116.053 13.0382V18.7648H114.029V13.252C114.029 12.3958 113.816 11.7325 113.389 11.263C112.963 10.7936 112.377 10.5588 111.631 10.5588C110.838 10.5588 110.207 10.8118 109.74 11.3167C109.272 11.8226 109.038 12.5632 109.038 13.5377V18.7648H107.014V13.252C107.014 12.3958 106.801 11.7325 106.374 11.263C105.948 10.7936 105.362 10.5588 104.616 10.5588C103.823 10.5588 103.192 10.8118 102.725 11.3167C102.257 11.8226 102.023 12.5632 102.023 13.5377V18.7648H99.9987V8.93565H102.023V10.9874C102.271 10.274 102.685 9.72722 103.266 9.34599C103.846 8.96567 104.527 8.77551 105.308 8.77551C106.125 8.77551 106.832 8.9775 107.429 9.38238C108.027 9.78727 108.462 10.3696 108.734 11.1302C109.018 10.3932 109.474 9.81638 110.102 9.39967C110.729 8.98387 111.439 8.77551 112.233 8.77551C113.395 8.77551 114.322 9.144 115.014 9.88098Z"
        fill={text}
      />
      <path
        d="M126.636 14.2519H119.107C119.143 15.2628 119.42 16.0125 119.942 16.4993C120.462 16.987 121.107 17.2308 121.877 17.2308C122.552 17.2308 123.123 17.0588 123.59 16.7131C124.058 16.3683 124.345 15.9106 124.452 15.3392H126.618C126.488 16.0289 126.216 16.6412 125.801 17.1771C125.386 17.7121 124.848 18.1315 124.185 18.4345C123.522 18.7384 122.782 18.8895 121.965 18.8895C121.018 18.8895 120.18 18.6875 119.452 18.2826C118.724 17.8786 118.153 17.2954 117.739 16.5348C117.324 15.7741 117.118 14.8752 117.118 13.8407C117.118 12.818 117.325 11.9264 117.739 11.1648C118.153 10.4033 118.724 9.82096 119.452 9.41608C120.18 9.0121 121.018 8.8092 121.965 8.8092C122.924 8.8092 123.761 9.00846 124.478 9.40698C125.194 9.80549 125.745 10.3523 126.13 11.0483C126.514 11.7435 126.706 12.5196 126.706 13.3758C126.708 13.7106 126.684 14.0026 126.636 14.2519ZM124.337 11.7098C124.094 11.2758 123.763 10.9546 123.343 10.7463C122.922 10.5388 122.464 10.4342 121.966 10.4342C121.173 10.4342 120.51 10.678 119.977 11.1657C119.444 11.6534 119.155 12.3731 119.107 13.3239H124.666C124.689 12.6824 124.58 12.1438 124.337 11.7098Z"
        fill={text}
      />
      <path
        d="M136.066 9.88098C136.753 10.618 137.096 11.6707 137.096 13.0382V18.7648H135.072V13.252C135.072 12.3722 134.846 11.6907 134.397 11.2094C133.947 10.728 133.331 10.4869 132.55 10.4869C131.744 10.4869 131.099 10.7453 130.613 11.263C130.128 11.7807 129.886 12.5387 129.886 13.5377V18.7648H127.861V8.93564H129.886V11.0938C130.146 10.3568 130.584 9.78635 131.2 9.38147C131.815 8.97749 132.526 8.7746 133.331 8.7746C134.468 8.77551 135.379 9.144 136.066 9.88098Z"
        fill={text}
      />
      <path
        d="M143.578 16.9988V18.7648H142.335C141.293 18.7648 140.503 18.5128 139.964 18.0069C139.425 17.5019 139.156 16.6603 139.156 15.4829V10.6662H137.753V8.93565H139.156V6.49179H141.199V8.93565H143.561V10.6662H141.199V15.5184C141.199 16.0771 141.301 16.4638 141.51 16.6785C141.716 16.8923 142.081 16.9997 142.602 16.9997H143.578V16.9988Z"
        fill={text}
      />
      <path
        d="M151.712 9.41693C152.469 9.82181 153.061 10.4041 153.488 11.1657C153.915 11.9272 154.128 12.8189 154.128 13.8415C154.128 14.876 153.915 15.7741 153.488 16.5356C153.062 17.2972 152.47 17.8795 151.712 18.2834C150.954 18.6883 150.101 18.8903 149.155 18.8903C148.208 18.8903 147.358 18.6883 146.607 18.2834C145.855 17.8795 145.263 17.2935 144.831 16.5265C144.398 15.7595 144.183 14.8642 144.183 13.8415C144.183 12.8189 144.398 11.9272 144.831 11.1657C145.263 10.4041 145.854 9.82181 146.607 9.41693C147.358 9.01296 148.208 8.81006 149.155 8.81006C150.101 8.81097 150.954 9.01296 151.712 9.41693ZM147.716 10.9337C147.278 11.1711 146.926 11.5378 146.659 12.0309C146.393 12.525 146.26 13.1282 146.26 13.8415C146.26 14.5667 146.394 15.1736 146.659 15.6612C146.926 16.1489 147.278 16.512 147.716 16.7494C148.153 16.9869 148.634 17.1061 149.154 17.1061C149.675 17.1061 150.154 16.9869 150.593 16.7494C151.03 16.512 151.383 16.1489 151.649 15.6612C151.916 15.1736 152.049 14.5676 152.049 13.8415C152.049 13.1282 151.916 12.5241 151.649 12.0309C151.383 11.5378 151.03 11.172 150.593 10.9337C150.155 10.6962 149.675 10.577 149.154 10.577C148.633 10.577 148.153 10.6962 147.716 10.9337Z"
        fill={text}
      />
      <path
        d="M161.256 9.69358C161.949 10.2823 162.372 11.0702 162.527 12.0574H160.609C160.526 11.5224 160.297 11.0911 159.924 10.7636C159.551 10.4369 159.057 10.2732 158.441 10.2732C157.932 10.2732 157.538 10.3951 157.26 10.6389C156.982 10.8828 156.843 11.213 156.843 11.6288C156.843 11.9382 156.943 12.1875 157.145 12.3776C157.346 12.5678 157.598 12.717 157.9 12.8235C158.202 12.9308 158.631 13.05 159.187 13.1801C159.922 13.3466 160.516 13.5195 160.972 13.6969C161.427 13.8753 161.818 14.1582 162.144 14.544C162.469 14.9307 162.632 15.4566 162.632 16.1226C162.632 16.9433 162.321 17.6093 161.7 18.1206C161.078 18.632 160.24 18.8876 159.187 18.8876C157.967 18.8876 156.981 18.6019 156.229 18.0314C155.478 17.461 155.025 16.6639 154.871 15.6413H156.842C156.901 16.1763 157.138 16.6112 157.552 16.9433C157.966 17.2763 158.511 17.4428 159.187 17.4428C159.671 17.4428 160.054 17.3154 160.332 17.0588C160.61 16.8032 160.749 16.4792 160.749 16.0871C160.749 15.7423 160.642 15.4684 160.429 15.2664C160.216 15.0644 159.95 14.907 159.631 14.7942C159.311 14.6814 158.873 14.5649 158.317 14.4466C157.606 14.2801 157.029 14.1136 156.585 13.9471C156.141 13.7806 155.763 13.5104 155.449 13.1355C155.135 12.7607 154.978 12.2521 154.978 11.6106C154.978 10.7781 155.29 10.103 155.911 9.58531C156.532 9.0676 157.394 8.8092 158.495 8.8092C159.643 8.81102 160.564 9.10491 161.256 9.69358Z"
        fill={text}
      />
      <path
        d="M13.7575 18.6047C11.7794 18.6047 10.1699 16.9952 10.1699 15.0171C10.1699 14.4166 10.6567 13.9308 11.2563 13.9308C11.8559 13.9308 12.3426 14.4166 12.3426 15.0171C12.3426 15.7969 12.9768 16.432 13.7575 16.432C14.5381 16.432 15.1723 15.7969 15.1723 15.0171C15.1723 14.2374 14.5372 13.6023 13.7575 13.6023C11.7794 13.6023 10.1699 11.9928 10.1699 10.0148C10.1699 8.03675 11.7794 6.42813 13.7575 6.42813C15.7355 6.42813 17.3459 8.03766 17.3459 10.0148C17.3459 10.6153 16.8591 11.1011 16.2596 11.1011C15.6591 11.1011 15.1732 10.6153 15.1732 10.0148C15.1732 9.23502 14.5381 8.60086 13.7584 8.60086C12.9786 8.60086 12.3436 9.23502 12.3436 10.0148C12.3436 10.7945 12.9777 11.4296 13.7584 11.4296C15.7364 11.4296 17.3468 13.0391 17.3468 15.018C17.345 16.9952 15.7355 18.6047 13.7575 18.6047Z"
        fill={brand}
      />
      <path
        d="M13.7575 20.2724C13.157 20.2724 12.6711 19.7866 12.6711 19.1861V17.5183C12.6711 16.9178 13.1579 16.4319 13.7575 16.4319C14.3571 16.4319 14.8439 16.9178 14.8439 17.5183V19.1861C14.8439 19.7857 14.3571 20.2724 13.7575 20.2724Z"
        fill={brand}
      />
      <path
        d="M13.7575 8.59994C13.157 8.59994 12.6711 8.11408 12.6711 7.51357V5.84491C12.6711 5.24441 13.1579 4.75854 13.7575 4.75854C14.3571 4.75854 14.8439 5.24441 14.8439 5.84491V7.51357C14.8439 8.11408 14.3571 8.59994 13.7575 8.59994Z"
        fill={brand}
      />
      <path
        d="M13.792 25C8.7933 25 4.05115 21.4325 2.51714 16.5165C2.3379 15.9442 2.65725 15.3346 3.23046 15.1554C3.80367 14.9771 4.41236 15.2964 4.5916 15.8687C5.82991 19.8357 9.78595 22.8264 13.792 22.8264C17.7981 22.8264 21.7541 19.8348 22.9934 15.8687C23.1726 15.2964 23.7813 14.9752 24.3545 15.1554C24.9277 15.3337 25.2471 15.9433 25.0678 16.5165C23.5329 21.4325 18.7908 25 13.792 25Z"
        fill={brand}
      />
      <path
        d="M1.08686 18.8612C0.945834 18.8612 0.802987 18.8339 0.66469 18.7757C0.1115 18.5419 -0.147808 17.905 0.0860238 17.3518L1.74195 13.4258C1.85751 13.151 2.08133 12.9354 2.36065 12.8307C2.63998 12.7252 2.95024 12.7407 3.21864 12.8708L6.71429 14.5722C7.25384 14.8351 7.47857 15.4848 7.21562 16.0243C6.95268 16.5639 6.30213 16.7895 5.76259 16.5256L3.2978 15.3265L2.08861 18.197C1.91301 18.6119 1.51085 18.8612 1.08686 18.8612Z"
        fill={brand}
      />
      <path
        d="M23.7076 9.89373C23.2445 9.89373 22.816 9.59621 22.6704 9.13036C21.4321 5.16341 17.4761 2.17273 13.47 2.17273C9.4639 2.17273 5.50695 5.16432 4.26864 9.13127C4.0894 9.70357 3.48162 10.0229 2.90751 9.8446C2.33521 9.66536 2.01494 9.05576 2.19418 8.48346C3.7291 3.56753 8.47125 0 13.47 0C18.4687 0 23.2109 3.56753 24.7449 8.48346C24.9241 9.05576 24.6038 9.66536 24.0315 9.8446C23.9233 9.87826 23.815 9.89373 23.7076 9.89373Z"
        fill={brand}
      />
      <path
        d="M24.4937 12.2521C24.33 12.2521 24.1635 12.2148 24.007 12.1365L20.5313 10.3932C19.9945 10.1239 19.778 9.47157 20.0473 8.93475C20.3166 8.39794 20.9699 8.1814 21.5058 8.45071L24.0106 9.70631L25.228 7.28155C25.4973 6.74565 26.1506 6.52911 26.6865 6.79751C27.2224 7.06683 27.4389 7.7201 27.1696 8.25601L25.4645 11.6516C25.2744 12.0328 24.8913 12.2521 24.4937 12.2521Z"
        fill={brand}
      />
    </svg>
  )
}