import React from 'react'

export default props => {
  const { 'data-brand': brand, 'data-text': text } = props
  return (
    <svg {...props} viewBox="0 0 144 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.23572 3.20744C3.86138 3.4231 3.38534 3.29861 3.17144 2.92778L2.43766 1.65748C2.22375 1.28665 2.3535 0.811496 2.72784 0.595835C3.10218 0.380174 3.57821 0.504662 3.79212 0.875493L4.52589 2.14579C4.7398 2.51662 4.61005 2.99177 4.23572 3.20744Z"
        fill={brand}
      />
      <path
        d="M6.26259 2.94094C5.84529 2.8296 5.5972 2.40354 5.70766 1.99063L6.08726 0.573052C6.19772 0.16014 6.62553 -0.0844505 7.04283 0.0268866C7.46012 0.138224 7.70822 0.564285 7.59776 0.977197L7.21816 2.39477C7.1077 2.80768 6.67989 3.05227 6.26259 2.94094Z"
        fill={brand}
      />
      <path
        d="M8.42533 3.87109C8.20967 3.49675 8.33416 3.02072 8.70499 2.80681L9.97528 2.07304C10.3461 1.85913 10.8213 1.98888 11.0369 2.36322C11.2526 2.73756 11.1281 3.21359 10.7573 3.4275L9.48698 4.16127C9.11703 4.37518 8.64187 4.24543 8.42533 3.87109Z"
        fill={brand}
      />
      <path
        d="M2.71735 7.16827C2.93301 7.54261 2.80853 8.01864 2.4377 8.23255L1.1674 8.96632C0.796569 9.18023 0.321414 9.05048 0.105754 8.67614C-0.109907 8.30181 0.0145798 7.82577 0.385411 7.61187L1.65571 6.87809C2.02654 6.66418 2.50169 6.79393 2.71735 7.16827Z"
        fill={brand}
      />
      <path
        d="M2.9927 4.82929C2.88136 5.24659 2.4553 5.49469 2.04238 5.38423L0.62481 5.00463C0.211898 4.89417 -0.0326927 4.46635 0.0786444 4.04906C0.189981 3.63176 0.616043 3.38366 1.02895 3.49413L2.44653 3.87372C2.85944 3.98418 3.10403 4.412 2.9927 4.82929Z"
        fill={brand}
      />
      <path
        d="M14.4533 24.9997C14.4498 24.9997 14.4463 24.9997 14.4419 24.9997C14.25 24.9989 14.0571 24.9726 13.8686 24.9208C13.2988 24.7648 12.8245 24.3975 12.5326 23.8846L10.7801 20.8119L8.07381 22.3557C7.41368 22.7335 6.61591 22.7449 5.94263 22.3872C5.2711 22.0304 4.83451 21.3642 4.77665 20.6041L3.67293 6.06627C3.60718 5.20713 4.03148 4.40761 4.78104 3.9798C5.53147 3.55286 6.43531 3.59494 7.14103 4.0885L19.0892 12.4432C19.7134 12.8798 20.0649 13.5942 20.0298 14.3552C19.9948 15.1161 19.5784 15.7956 18.9165 16.1725L16.2102 17.7163L17.9626 20.7891C18.2546 21.3011 18.3291 21.8972 18.173 22.4661C18.017 23.036 17.6488 23.5103 17.1368 23.8022L15.5457 24.7095C15.2117 24.8998 14.8347 24.9997 14.4533 24.9997ZM14.4647 22.7826C14.4656 22.7826 14.4647 22.7826 14.4647 22.7826V22.7826ZM11.0615 18.3116C11.1912 18.3116 11.3219 18.3291 11.4499 18.3642C11.8286 18.4677 12.1442 18.7122 12.3379 19.0533L14.349 22.5801C14.4086 22.6853 14.5428 22.7221 14.648 22.6616L15.8455 21.9787C15.9507 21.9191 15.9875 21.7841 15.927 21.6789L13.9037 18.1591C13.503 17.4569 13.7485 16.56 14.4507 16.1585L17.5155 14.4113C17.6549 14.3315 17.6646 14.1334 17.5322 14.0413L6.24595 6.17586C6.09429 6.06978 5.88827 6.18813 5.9023 6.37223L6.96833 20.0886C6.9806 20.2491 7.15681 20.342 7.2962 20.2613L10.3374 18.5045C10.5618 18.3765 10.8099 18.3116 11.0615 18.3116Z"
        fill={brand}
      />
      <path
        d="M35.7907 8.61475V19.1006H33.6122V16.8169C33.3474 17.591 32.8854 18.1897 32.2297 18.6149C31.5731 19.0401 30.8086 19.2523 29.9372 19.2523C28.7248 19.2523 27.7517 18.8586 27.0196 18.0723C26.2867 17.2859 25.9203 16.1629 25.9203 14.7032V8.61475H28.0804V14.4762C28.0804 15.4274 28.3197 16.1611 28.8001 16.674C29.2806 17.1886 29.9372 17.4454 30.7709 17.4454C31.63 17.4454 32.3182 17.1667 32.8363 16.6082C33.3544 16.0498 33.6131 15.238 33.6131 14.172V8.61475H35.7907Z"
        fill={text}
      />
      <path
        d="M46.2862 9.62378C47.0183 10.4102 47.3856 11.5332 47.3856 12.9919V19.1015H45.2255V13.2199C45.2255 12.281 44.9853 11.5542 44.5057 11.0405C44.0253 10.5268 43.3687 10.2699 42.5358 10.2699C41.6767 10.2699 40.9885 10.546 40.4704 11.0975C39.9523 11.6498 39.6937 12.4581 39.6937 13.5241V19.1006H37.5336V8.61474H39.6937V10.9177C39.9716 10.1314 40.4389 9.52209 41.0955 9.09077C41.7521 8.65945 42.5095 8.44379 43.3687 8.44379C44.5811 8.44379 45.5542 8.83653 46.2862 9.62378Z"
        fill={text}
      />
      <path
        d="M49.1284 4.65571C49.3808 4.41463 49.7157 4.29453 50.1321 4.29453C50.5486 4.29453 50.8869 4.41551 51.1456 4.65571C51.4042 4.8968 51.5339 5.20188 51.5339 5.5692C51.5339 5.9374 51.4042 6.23547 51.1456 6.46428C50.8869 6.69222 50.5486 6.80618 50.1321 6.80618C49.7157 6.80618 49.3808 6.69222 49.1284 6.46428C48.8759 6.23547 48.7496 5.9374 48.7496 5.5692C48.7496 5.20188 48.875 4.89767 49.1284 4.65571ZM51.2122 8.61476V19.1006H49.0521V8.61476H51.2122Z"
        fill={text}
      />
      <path
        d="M57.256 16.8554L60.2113 8.61475H62.5231L58.5439 19.1015H55.9296L51.9513 8.61475H54.2631L57.256 16.8554Z"
        fill={text}
      />
      <path
        d="M72.8853 14.2859H64.8524C64.8901 15.3642 65.1864 16.1637 65.743 16.6836C66.2989 17.2044 66.987 17.4639 67.8085 17.4639C68.5282 17.4639 69.1375 17.2806 69.6363 16.9124C70.1352 16.5451 70.442 16.0559 70.5551 15.4475H72.8669C72.7275 16.1839 72.4373 16.837 71.9955 17.4077C71.5536 17.9785 70.9785 18.4256 70.271 18.7491C69.5636 19.0725 68.7746 19.2347 67.9032 19.2347C66.8924 19.2347 65.999 19.0191 65.2223 18.5877C64.4456 18.1564 63.8363 17.5349 63.3945 16.7231C62.9517 15.9113 62.7317 14.9531 62.7317 13.8493C62.7317 12.7579 62.9526 11.8067 63.3945 10.9949C63.8363 10.1831 64.4456 9.56154 65.2223 9.12934C65.999 8.69802 66.8924 8.48236 67.9032 8.48236C68.9262 8.48236 69.8196 8.69539 70.584 9.1197C71.3485 9.54489 71.935 10.1287 72.3461 10.8704C72.7564 11.6121 72.9615 12.4405 72.9615 13.354C72.9615 13.7091 72.9361 14.0194 72.8853 14.2859ZM70.4324 11.5744C70.1737 11.1115 69.8196 10.7687 69.3716 10.5469C68.9227 10.3251 68.4335 10.2138 67.9032 10.2138C67.0572 10.2138 66.3497 10.4742 65.7816 10.994C65.2135 11.5148 64.9041 12.2819 64.8532 13.297H70.783C70.8076 12.6115 70.691 12.0373 70.4324 11.5744Z"
        fill={text}
      />
      <path
        d="M77.8683 9.04257C78.5249 8.64281 79.2823 8.44293 80.1415 8.44293V10.8029H79.4971C78.5494 10.8029 77.7885 11.0344 77.2143 11.4973C76.6392 11.9601 76.3525 12.7246 76.3525 13.7906V19.1006H74.1924V8.61476H76.3525V10.6697C76.7058 9.985 77.2108 9.44234 77.8683 9.04257Z"
        fill={text}
      />
      <path
        d="M87.2742 9.42303C88.0132 10.0516 88.4647 10.8923 88.6287 11.9452H86.5825C86.494 11.3745 86.2511 10.9142 85.8531 10.5653C85.4551 10.2164 84.9274 10.042 84.2707 10.042C83.7281 10.042 83.3073 10.1717 83.011 10.4321C82.7138 10.6925 82.5656 11.044 82.5656 11.4885C82.5656 11.819 82.6726 12.0846 82.8873 12.288C83.1021 12.4914 83.3704 12.6501 83.693 12.764C84.0147 12.878 84.4732 13.0051 85.0668 13.1445C85.8496 13.3225 86.4843 13.5057 86.9709 13.6959C87.4574 13.8862 87.8738 14.1877 88.2219 14.5998C88.569 15.0127 88.7426 15.5738 88.7426 16.2847C88.7426 17.1597 88.4112 17.8706 87.7485 18.4159C87.0857 18.9621 86.1915 19.2347 85.0676 19.2347C83.7666 19.2347 82.7146 18.9305 81.9134 18.3212C81.1112 17.712 80.6282 16.8625 80.4642 15.771H82.5674C82.6305 16.3417 82.883 16.8055 83.3248 17.1605C83.7666 17.5165 84.3479 17.6935 85.0676 17.6935C85.5857 17.6935 85.9925 17.5577 86.2897 17.2841C86.586 17.0115 86.7351 16.6661 86.7351 16.247C86.7351 15.8788 86.6211 15.5878 86.394 15.3712C86.167 15.1556 85.8829 14.9881 85.541 14.8672C85.2 14.7462 84.7327 14.6226 84.1392 14.4963C83.3809 14.3184 82.7655 14.1413 82.2921 13.9633C81.8187 13.7853 81.4145 13.4969 81.0797 13.0972C80.7448 12.6974 80.5773 12.1547 80.5773 11.4701C80.5773 10.582 80.9087 9.86224 81.5715 9.30994C82.2342 8.75851 83.1539 8.48236 84.3277 8.48236C85.5533 8.48149 86.5352 8.79533 87.2742 9.42303Z"
        fill={text}
      />
      <path
        d="M90.1251 4.65571C90.3775 4.41463 90.7124 4.29453 91.1288 4.29453C91.5461 4.29453 91.8837 4.41551 92.1423 4.65571C92.4009 4.8968 92.5306 5.20188 92.5306 5.5692C92.5306 5.9374 92.4009 6.23547 92.1423 6.46428C91.8828 6.69222 91.5453 6.80618 91.1288 6.80618C90.7124 6.80618 90.3775 6.69222 90.1251 6.46428C89.8726 6.23547 89.7463 5.9374 89.7463 5.5692C89.7463 5.20188 89.8726 4.89767 90.1251 4.65571ZM92.2089 8.61476V19.1006H90.0497V8.61476H92.2089Z"
        fill={text}
      />
      <path
        d="M100.583 9.18548C101.253 9.65538 101.72 10.2769 101.985 11.051V5.01779H104.163V19.1015H101.985V16.6652C101.719 17.4393 101.252 18.0609 100.583 18.5299C99.913 18.9998 99.1047 19.2339 98.1579 19.2339C97.2488 19.2339 96.437 19.0182 95.7234 18.5869C95.0098 18.1556 94.4505 17.534 94.0464 16.7222C93.6422 15.9104 93.4397 14.9522 93.4397 13.8485C93.4397 12.757 93.6413 11.8058 94.0464 10.9941C94.4505 10.1823 95.0098 9.5607 95.7234 9.1285C96.437 8.69718 97.2488 8.48152 98.1579 8.48152C99.1047 8.48152 99.913 8.71646 100.583 9.18548ZM96.5194 11.3079C95.9443 11.9233 95.6577 12.7702 95.6577 13.8485C95.6577 14.9268 95.9452 15.7737 96.5194 16.3891C97.0945 17.0045 97.8616 17.3122 98.8216 17.3122C99.4282 17.3122 99.9709 17.1693 100.451 16.8844C100.931 16.5986 101.31 16.1962 101.588 15.6755C101.865 15.1556 102.005 14.5463 102.005 13.8485C102.005 13.1629 101.865 12.558 101.588 12.0312C101.31 11.5052 100.932 11.0984 100.451 10.8135C99.9709 10.5277 99.4282 10.3848 98.8216 10.3848C97.8607 10.3848 97.0937 10.6925 96.5194 11.3079Z"
        fill={text}
      />
      <path
        d="M112.518 9.18547C113.188 9.65537 113.661 10.2769 113.939 11.051V8.61476H116.098V19.1006H113.939V16.6652C113.661 17.4393 113.188 18.0609 112.518 18.5299C111.848 18.9998 111.04 19.2339 110.093 19.2339C109.184 19.2339 108.372 19.0182 107.658 18.5869C106.945 18.1556 106.386 17.534 105.981 16.7222C105.577 15.9104 105.375 14.9522 105.375 13.8485C105.375 12.757 105.576 11.8058 105.981 10.994C106.386 10.1822 106.945 9.56069 107.658 9.12849C108.372 8.69717 109.184 8.48151 110.093 8.48151C111.041 8.48151 111.849 8.71645 112.518 9.18547ZM108.454 11.3079C107.879 11.9233 107.593 12.7702 107.593 13.8485C107.593 14.9268 107.88 15.7736 108.454 16.3891C109.03 17.0045 109.797 17.3122 110.757 17.3122C111.363 17.3122 111.906 17.1693 112.386 16.8844C112.866 16.5986 113.245 16.1962 113.523 15.6755C113.8 15.1556 113.94 14.5463 113.94 13.8485C113.94 13.1629 113.8 12.558 113.523 12.0311C113.245 11.5051 112.867 11.0984 112.386 10.8134C111.906 10.5277 111.363 10.3848 110.757 10.3848C109.797 10.3848 109.03 10.6925 108.454 11.3079Z"
        fill={text}
      />
      <path
        d="M124.454 9.18548C125.123 9.65538 125.591 10.2769 125.855 11.051V5.01779H128.034V19.1015H125.855V16.6652C125.59 17.4393 125.123 18.0609 124.454 18.5299C123.784 18.9998 122.976 19.2339 122.029 19.2339C121.12 19.2339 120.308 19.0182 119.594 18.5869C118.881 18.1556 118.321 17.534 117.917 16.7222C117.513 15.9104 117.311 14.9522 117.311 13.8485C117.311 12.757 117.512 11.8058 117.917 10.9941C118.321 10.1823 118.881 9.5607 119.594 9.1285C120.308 8.69718 121.12 8.48152 122.029 8.48152C122.976 8.48152 123.784 8.71646 124.454 9.18548ZM120.389 11.3079C119.814 11.9233 119.528 12.7702 119.528 13.8485C119.528 14.9268 119.815 15.7737 120.389 16.3891C120.965 17.0045 121.732 17.3122 122.692 17.3122C123.298 17.3122 123.841 17.1693 124.321 16.8844C124.801 16.5986 125.18 16.1962 125.458 15.6755C125.735 15.1556 125.875 14.5463 125.875 13.8485C125.875 13.1629 125.735 12.558 125.458 12.0312C125.18 11.5052 124.802 11.0984 124.321 10.8135C123.841 10.5277 123.298 10.3848 122.692 10.3848C121.732 10.3848 120.965 10.6925 120.389 11.3079Z"
        fill={text}
      />
      <path
        d="M139.401 14.2859H131.368C131.406 15.3642 131.703 16.1637 132.259 16.6836C132.814 17.2044 133.503 17.4639 134.324 17.4639C135.044 17.4639 135.653 17.2806 136.152 16.9124C136.651 16.5451 136.958 16.0559 137.071 15.4475H139.382C139.243 16.1839 138.953 16.837 138.511 17.4077C138.068 17.9785 137.494 18.4256 136.787 18.7491C136.079 19.0725 135.29 19.2347 134.419 19.2347C133.408 19.2347 132.515 19.0191 131.738 18.5877C130.961 18.1564 130.352 17.5349 129.91 16.7231C129.467 15.9113 129.247 14.9531 129.247 13.8493C129.247 12.7579 129.468 11.8067 129.91 10.9949C130.352 10.1831 130.961 9.56154 131.738 9.12934C132.515 8.69802 133.408 8.48236 134.419 8.48236C135.442 8.48236 136.335 8.69539 137.1 9.1197C137.864 9.54489 138.451 10.1287 138.862 10.8704C139.272 11.6121 139.477 12.4405 139.477 13.354C139.476 13.7091 139.451 14.0194 139.401 14.2859ZM136.948 11.5744C136.688 11.1115 136.335 10.7687 135.887 10.5469C135.438 10.3251 134.949 10.2138 134.419 10.2138C133.573 10.2138 132.865 10.4742 132.297 10.994C131.729 11.5148 131.42 12.2819 131.369 13.297H137.299C137.323 12.6115 137.206 12.0373 136.948 11.5744Z"
        fill={text}
      />
      <path
        d="M143.43 17.3262C143.43 17.8259 143.26 18.2467 142.92 18.5886C142.579 18.9305 142.16 19.1015 141.663 19.1015C141.165 19.1015 140.746 18.9305 140.406 18.5886C140.066 18.2467 139.896 17.8259 139.896 17.3262C139.896 16.8265 140.066 16.4057 140.406 16.0638C140.746 15.7219 141.165 15.551 141.663 15.551C142.16 15.551 142.579 15.7219 142.92 16.0638C143.26 16.4057 143.43 16.8265 143.43 17.3262Z"
        fill={brand}
      />
    </svg>
  )
}
