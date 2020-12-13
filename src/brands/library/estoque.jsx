import React from 'react'

export default props => {
  const { 'data-brand': brand, 'data-text': text } = props
  return (
    <svg {...props} viewBox="0 0 106 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.9029 14.8058C19.5719 14.8058 19.2492 14.8403 18.9355 14.9003L15.9232 8.86402C16.9488 7.93115 17.598 6.59005 17.598 5.09711C17.598 2.2867 15.3113 0 12.5 0C9.68868 0 7.40289 2.2867 7.40289 5.09711C7.40289 6.59278 8.0539 7.93479 9.08314 8.86856L6.06725 14.9003C5.75356 14.8394 5.42988 14.8049 5.09801 14.8049C2.2867 14.8058 0 17.0925 0 19.9029C0 22.7133 2.2867 25 5.09801 25C7.51291 25 9.53684 23.3107 10.0596 21.0522H14.9413C15.4641 23.3107 17.488 25 19.9029 25C22.7133 25 25.0009 22.7133 25.0009 19.9029C25.0009 17.0925 22.7133 14.8058 19.9029 14.8058ZM12.5 2.29852C14.043 2.29852 15.2986 3.55415 15.2986 5.09711C15.2986 6.09634 14.7685 6.96738 13.9793 7.4629C13.9684 7.46836 13.9566 7.47018 13.9457 7.47563C13.9229 7.48654 13.9048 7.50291 13.8829 7.51564C13.4738 7.75113 13.0055 7.89569 12.5 7.89569C10.957 7.89569 9.70141 6.64006 9.70141 5.09711C9.70141 3.55415 10.957 2.29852 12.5 2.29852ZM11.0916 9.99236C11.5399 10.1215 12.0117 10.1951 12.5009 10.1951C12.9928 10.1951 13.4665 10.1215 13.9166 9.99054L16.8361 15.8405C15.8996 16.5497 15.2149 17.5716 14.9413 18.7527H10.0596C9.78597 17.5726 9.10223 16.5506 8.16664 15.8414L11.0916 9.99236ZM5.09801 22.7015C3.55506 22.7015 2.29943 21.4458 2.29943 19.9029C2.29943 18.3599 3.55506 17.1043 5.09801 17.1043C6.64097 17.1043 7.8966 18.3599 7.8966 19.9029C7.89569 21.4458 6.64097 22.7015 5.09801 22.7015ZM19.9029 22.7015C18.3599 22.7015 17.1043 21.4458 17.1043 19.9029C17.1043 18.3599 18.3599 17.1043 19.9029 17.1043C21.4458 17.1043 22.7015 18.3599 22.7015 19.9029C22.7015 21.4458 21.4458 22.7015 19.9029 22.7015Z"
        fill={brand}
      />
      <path
        d="M105.372 17.0725C105.372 17.578 105.2 18.0036 104.855 18.35C104.512 18.6955 104.088 18.8682 103.584 18.8682C103.08 18.8682 102.657 18.6955 102.313 18.35C101.968 18.0045 101.797 17.5789 101.797 17.0725C101.797 16.567 101.968 16.1415 102.313 15.7951C102.657 15.4495 103.08 15.2768 103.584 15.2768C104.088 15.2768 104.512 15.4495 104.855 15.7951C105.2 16.1415 105.372 16.567 105.372 17.0725Z"
        fill={brand}
      />
      <path
        d="M39.2893 14.0429H31.1627C31.2009 15.134 31.5009 15.9423 32.0637 16.4688C32.6256 16.9952 33.3221 17.258 34.1531 17.258C34.8814 17.258 35.4978 17.0725 36.0025 16.6997C36.5071 16.3278 36.8171 15.8332 36.9317 15.2168H39.2702C39.1293 15.9614 38.8356 16.6224 38.3883 17.1998C37.9409 17.7771 37.359 18.2299 36.6444 18.5572C35.9288 18.8846 35.1305 19.0482 34.2486 19.0482C33.2266 19.0482 32.3219 18.83 31.5364 18.3936C30.7508 17.9572 30.1334 17.3289 29.687 16.5069C29.2397 15.6859 29.016 14.7158 29.016 13.5992C29.016 12.4955 29.2397 11.5326 29.687 10.7106C30.1343 9.88962 30.7508 9.26043 31.5364 8.8231C32.3219 8.38667 33.2266 8.16846 34.2486 8.16846C35.2842 8.16846 36.1879 8.38394 36.9608 8.81401C37.7336 9.24407 38.3283 9.83415 38.7429 10.5852C39.1584 11.3362 39.3657 12.1736 39.3657 13.0983C39.3657 13.4592 39.3402 13.7738 39.2893 14.0429ZM36.8071 11.2998C36.5453 10.8316 36.187 10.4842 35.7342 10.2597C35.2805 10.0351 34.785 9.92326 34.2486 9.92326C33.3921 9.92326 32.6765 10.186 32.1019 10.7125C31.5273 11.2389 31.2136 12.0154 31.1627 13.0419H37.1617C37.1872 12.3491 37.069 11.7681 36.8071 11.2998Z"
        fill={text}
      />
      <path
        d="M47.0613 9.12316C47.8087 9.75871 48.2661 10.6088 48.4315 11.6744H46.3612C46.2721 11.0971 46.0257 10.6316 45.623 10.2788C45.2202 9.92601 44.6865 9.74962 44.0227 9.74962C43.4736 9.74962 43.048 9.88145 42.748 10.1442C42.4479 10.4079 42.2979 10.7643 42.2979 11.2126C42.2979 11.5462 42.4061 11.8163 42.6234 12.0218C42.8407 12.2273 43.1126 12.3873 43.4381 12.5027C43.7645 12.6182 44.2273 12.7464 44.8283 12.8873C45.6202 13.0674 46.2621 13.2529 46.7549 13.4456C47.2468 13.6384 47.6687 13.943 48.0197 14.3603C48.3706 14.7776 48.5461 15.3459 48.5461 16.0642C48.5461 16.9498 48.2106 17.669 47.5396 18.2208C46.8686 18.7727 45.9648 19.0492 44.8274 19.0492C43.5108 19.0492 42.447 18.7409 41.636 18.1254C40.8241 17.5089 40.3358 16.6497 40.1694 15.545H42.297C42.3607 16.1224 42.6162 16.5915 43.0635 16.9507C43.5108 17.3098 44.0982 17.4898 44.8274 17.4898C45.3511 17.4898 45.763 17.3525 46.063 17.0761C46.3631 16.8006 46.514 16.4506 46.514 16.0269C46.514 15.655 46.3994 15.3595 46.1694 15.1413C45.9394 14.9231 45.652 14.7531 45.3065 14.6312C44.9619 14.5094 44.4892 14.3839 43.8882 14.2557C43.1217 14.0757 42.4989 13.8966 42.0197 13.7166C41.5405 13.5365 41.1314 13.2447 40.7932 12.841C40.4549 12.4364 40.2858 11.8881 40.2858 11.1944C40.2858 10.2961 40.6213 9.56777 41.2923 9.0086C41.9633 8.45034 42.8926 8.17121 44.0809 8.17121C45.3202 8.1703 46.314 8.48852 47.0613 9.12316Z"
        fill={text}
      />
      <path
        d="M55.1788 17.0088V18.9155H53.8368C52.7121 18.9155 51.8593 18.6427 51.2783 18.0972C50.6964 17.5516 50.4063 16.6433 50.4063 15.3731V10.1742H48.8925V8.30483H50.4063V5.66718H52.6103V8.30483H55.1597V10.1724H52.6103V15.4095C52.6103 16.0132 52.7221 16.4306 52.9458 16.6615C53.1694 16.8924 53.5622 17.0079 54.125 17.0079H55.1788V17.0088Z"
        fill={text}
      />
      <path
        d="M63.9574 8.82493C64.7748 9.26136 65.414 9.89054 65.8741 10.7125C66.3342 11.5344 66.5642 12.4973 66.5642 13.6011C66.5642 14.7176 66.3342 15.6868 65.8741 16.5088C65.414 17.3307 64.7748 17.9599 63.9574 18.3954C63.1401 18.8318 62.219 19.0501 61.197 19.0501C60.1742 19.0501 59.2577 18.8318 58.4466 18.3954C57.6347 17.959 56.9964 17.3271 56.53 16.4988C56.0636 15.6705 55.8308 14.7049 55.8308 13.6011C55.8308 12.4973 56.0636 11.5344 56.53 10.7125C56.9964 9.89145 57.6356 9.26226 58.4466 8.82493C59.2586 8.3885 60.1751 8.17029 61.197 8.17029C62.219 8.17029 63.1401 8.3885 63.9574 8.82493ZM59.645 10.4615C59.1722 10.7179 58.7922 11.1134 58.5048 11.6453C58.2175 12.1781 58.0739 12.8291 58.0739 13.5993C58.0739 14.3821 58.2175 15.0367 58.5048 15.5632C58.7922 16.0896 59.1722 16.4806 59.645 16.7379C60.1178 16.9943 60.6351 17.1225 61.198 17.1225C61.7599 17.1225 62.2772 16.9943 62.75 16.7379C63.2228 16.4815 63.6029 16.0896 63.8902 15.5632C64.1775 15.0367 64.3211 14.3821 64.3211 13.5993C64.3211 12.8291 64.1775 12.1772 63.8902 11.6453C63.6029 11.1125 63.2219 10.7179 62.75 10.4615C62.2772 10.2051 61.7599 10.076 61.198 10.076C60.6351 10.0769 60.1169 10.2051 59.645 10.4615Z"
        fill={text}
      />
      <path
        d="M74.4999 8.80585C75.1391 9.21681 75.6182 9.78781 75.9374 10.5197V8.30486H78.1222V23.959H75.9374V16.5842C75.6046 17.3544 75.1191 17.9581 74.4808 18.3945C73.8416 18.8309 73.0815 19.0492 72.2005 19.0492C71.2803 19.0492 70.4429 18.8246 69.6892 18.3754C68.9354 17.9263 68.3444 17.2944 67.9162 16.4788C67.488 15.6641 67.2743 14.7167 67.2743 13.6384C67.2743 12.56 67.488 11.6099 67.9162 10.7889C68.3444 9.96783 68.9354 9.32865 69.6892 8.87313C70.4429 8.41761 71.2803 8.18939 72.2005 8.18939C73.0942 8.18939 73.8607 8.39488 74.4999 8.80585ZM70.4166 11.0489C69.8156 11.6717 69.5155 12.5346 69.5155 13.6384C69.5155 14.7422 69.8128 15.5959 70.4066 16.1996C71.0012 16.8034 71.7704 17.1043 72.716 17.1043C73.3034 17.1043 73.8398 16.9661 74.3262 16.6906C74.8118 16.4142 75.2009 16.0142 75.4955 15.4868C75.7892 14.9604 75.9365 14.3312 75.9365 13.5993C75.9365 12.8801 75.7892 12.2582 75.4955 11.7317C75.2009 11.2053 74.8118 10.8043 74.3262 10.5279C73.8407 10.2515 73.3043 10.1142 72.716 10.1142C71.784 10.1151 71.0176 10.4261 70.4166 11.0489Z"
        fill={text}
      />
      <path
        d="M89.623 8.30487V18.9146H87.419V16.6043C87.1508 17.3871 86.6844 17.9945 86.0197 18.4236C85.3551 18.8537 84.5822 19.0692 83.7003 19.0692C82.4737 19.0692 81.49 18.6709 80.748 17.8754C80.0061 17.0798 79.637 15.9433 79.637 14.4676V8.30487H81.8218V14.2357C81.8218 15.1986 82.0646 15.9396 82.5501 16.4597C83.0356 16.9798 83.7003 17.2398 84.5431 17.2398C85.4124 17.2398 86.1088 16.9579 86.6325 16.3924C87.1562 15.8278 87.419 15.0058 87.419 13.9275V8.30487H89.623Z"
        fill={text}
      />
      <path
        d="M101.123 14.0429H92.9962C93.0343 15.134 93.3344 15.9423 93.8972 16.4688C94.4591 16.9952 95.1556 17.258 95.9866 17.258C96.7149 17.258 97.3313 17.0725 97.836 16.6997C98.3406 16.3278 98.6506 15.8332 98.7652 15.2168H101.104C100.963 15.9614 100.669 16.6224 100.222 17.1998C99.7744 17.7771 99.1925 18.2299 98.4779 18.5572C97.7623 18.8846 96.964 19.0482 96.0821 19.0482C95.0601 19.0482 94.1554 18.83 93.3699 18.3936C92.5843 17.9572 91.9678 17.3289 91.5205 16.5069C91.0732 15.6859 90.8495 14.7158 90.8495 13.5992C90.8495 12.4955 91.0732 11.5326 91.5205 10.7106C91.9678 9.88962 92.5843 9.26043 93.3699 8.8231C94.1554 8.38667 95.0601 8.16846 96.0821 8.16846C97.1177 8.16846 98.0205 8.38394 98.7943 8.81401C99.5671 9.24407 100.162 9.83415 100.576 10.5852C100.992 11.3362 101.199 12.1736 101.199 13.0983C101.199 13.4592 101.174 13.7738 101.123 14.0429ZM98.6406 11.2998C98.3788 10.8316 98.0205 10.4842 97.5677 10.2597C97.114 10.0351 96.6185 9.92326 96.0821 9.92326C95.2256 9.92326 94.51 10.186 93.9354 10.7125C93.3608 11.2389 93.0471 12.0154 92.9962 13.0419H98.9952C99.0207 12.3491 98.9025 11.7681 98.6406 11.2998Z"
        fill={text}
      />
    </svg>
  )
}