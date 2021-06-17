import React from "react"

const BackBtn = props => {
  return (
    <svg {...props} viewBox="0 0 42 30" fill={props.color}>
      <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM42 13L2 13V17L42 17V13Z" />
    </svg>
  )
}

const ArrowRight = props => {
  return (
    <svg {...props} viewBox="0 0 34 55" fill={props.color}>
      <path d="M33.4164 27.0435L1.30609 54.2195L0.821627 0.450539L33.4164 27.0435Z" />
    </svg>
  )
}

const ChevronRight = props => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M19.7043 12L11.2123 3.273C11.1423 3.20267 11.0871 3.11917 11.0496 3.02734C11.0122 2.93551 10.9933 2.83717 10.9942 2.738C10.995 2.63884 11.0155 2.54082 11.0544 2.44962C11.0934 2.35843 11.15 2.27586 11.2211 2.2067C11.2922 2.13754 11.3763 2.08317 11.4685 2.04672C11.5607 2.01027 11.6593 1.99248 11.7584 1.99437C11.8576 1.99626 11.9554 2.01779 12.0461 2.05772C12.1369 2.09765 12.2189 2.15519 12.2873 2.227L21.2873 11.477C21.4235 11.617 21.4997 11.8047 21.4997 12C21.4997 12.1953 21.4235 12.383 21.2873 12.523L12.2873 21.773C12.2189 21.8448 12.1369 21.9023 12.0461 21.9423C11.9554 21.9822 11.8576 22.0037 11.7584 22.0056C11.6593 22.0075 11.5607 21.9897 11.4685 21.9533C11.3763 21.9168 11.2922 21.8625 11.2211 21.7933C11.15 21.7241 11.0934 21.6416 11.0544 21.5504C11.0155 21.4592 10.995 21.3612 10.9942 21.262C10.9933 21.1628 11.0122 21.0645 11.0496 20.9727C11.0871 20.8808 11.1423 20.7973 11.2123 20.727L19.7053 12H19.7043Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronLeft = props => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.29642 12L12.7884 3.27303C12.8583 3.2027 12.9136 3.1192 12.951 3.02737C12.9885 2.93554 13.0073 2.8372 13.0065 2.73803C13.0057 2.63887 12.9852 2.54085 12.9462 2.44965C12.9073 2.35846 12.8506 2.27589 12.7796 2.20673C12.7085 2.13757 12.6244 2.0832 12.5322 2.04675C12.4399 2.01031 12.3414 1.99251 12.2423 1.9944C12.1431 1.99629 12.0453 2.01782 11.9545 2.05775C11.8638 2.09768 11.7818 2.15522 11.7134 2.22703L2.71342 11.477C2.57719 11.617 2.50098 11.8047 2.50098 12C2.50098 12.1954 2.57719 12.383 2.71342 12.523L11.7134 21.773C11.7818 21.8448 11.8638 21.9024 11.9545 21.9423C12.0453 21.9822 12.1431 22.0038 12.2423 22.0057C12.3414 22.0075 12.4399 21.9898 12.5322 21.9533C12.6244 21.9169 12.7085 21.8625 12.7796 21.7933C12.8506 21.7242 12.9073 21.6416 12.9462 21.5504C12.9852 21.4592 13.0057 21.3612 13.0065 21.262C13.0073 21.1629 12.9885 21.0645 12.951 20.9727C12.9136 20.8809 12.8583 20.7974 12.7884 20.727L4.29542 12H4.29642Z"
        fill="black"
      />
    </svg>
  )
}

const WaterIcon = props => (
  <svg
    {...props}
    viewBox="0 0 29 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.6563 21.8749C22.6563 27.9158 19.5053 31.7186 14.5 31.7186C9.49467 31.7186 6.34375 27.9158 6.34375 21.8749C6.34375 15.3924 12.1908 6.64101 13.984 4.10966C14.0478 4.01973 14.127 3.94753 14.2161 3.89803C14.3052 3.84852 14.4022 3.82289 14.5003 3.82289C14.5984 3.82289 14.6953 3.84852 14.7845 3.89803C14.8736 3.94753 14.9528 4.01973 15.0166 4.10966C16.8092 6.64101 22.6563 15.3924 22.6563 21.8749Z"
      stroke="black"
      stroke-miterlimit="10"
    />
    <path
      d="M19.4844 22.4218C19.4844 23.7272 19.0547 24.9791 18.2899 25.9021C17.5251 26.8252 16.4878 27.3437 15.4062 27.3437"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const BasketballIcon = props => {
  return (
    <svg viewBox="0 0 29 30" {...props} fill={props.color}>
      <path
        d="M14.5 1.87502C11.9907 1.87502 9.53766 2.64478 7.45121 4.08698C5.36476 5.52917 3.73857 7.57902 2.77828 9.9773C1.818 12.3756 1.56674 15.0146 2.05629 17.5606C2.54584 20.1066 3.75421 22.4452 5.52859 24.2808C7.30297 26.1164 9.56366 27.3664 12.0248 27.8728C14.4859 28.3793 17.037 28.1193 19.3553 27.1259C21.6736 26.1325 23.6552 24.4503 25.0493 22.2919C26.4434 20.1335 27.1875 17.5959 27.1875 15C27.1837 11.5203 25.8457 8.18418 23.4672 5.72362C21.0886 3.26307 17.8638 1.87899 14.5 1.87502ZM25.3297 14.0625H19.9738C20.2009 11.6366 21.0583 9.31939 22.4551 7.35658C24.1142 9.19441 25.1268 11.5566 25.3297 14.0625ZM15.4063 14.0625V3.79689C17.4785 3.97548 19.4569 4.76913 21.1038 6.08252C19.4082 8.39823 18.3873 11.1669 18.1613 14.0625H15.4063ZM13.5938 14.0625H10.8388C10.6127 11.1669 9.59183 8.39823 7.89616 6.08252C9.54317 4.76947 11.5216 3.97615 13.5938 3.79783V14.0625ZM13.5938 15.9375V26.2031C11.5215 26.0245 9.54307 25.2309 7.89616 23.9175C9.59183 21.6018 10.6127 18.8332 10.8388 15.9375H13.5938ZM15.4063 15.9375H18.1613C18.3875 18.8333 19.4088 21.6019 21.1048 23.9175C19.4575 25.2307 17.4788 26.0241 15.4063 26.2022V15.9375ZM6.54313 7.35658C7.94054 9.31919 8.79857 11.6364 9.02626 14.0625H3.67122C3.8736 11.5569 4.88556 9.19467 6.54404 7.35658H6.54313ZM3.67032 15.9375H9.02626C8.7991 18.3635 7.94171 20.6806 6.54494 22.6435C4.88581 20.8056 3.8732 18.4434 3.67032 15.9375ZM22.4569 22.6435C21.0595 20.6808 20.2014 18.3636 19.9738 15.9375H25.3279C25.1255 18.4432 24.1135 20.8054 22.4551 22.6435H22.4569Z"
        fill="black"
      />
    </svg>
  )
}

const StreetLightIcon = props => {
  return (
    <svg
      {...props}
      fill={props.color}
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M24.375 6.75015V15.7502H5.625V6.75015H24.375ZM5.625 4.50015C5.12772 4.50015 4.65081 4.73721 4.29917 5.15916C3.94754 5.58112 3.75 6.15342 3.75 6.75015V15.7502C3.75 16.3469 3.94754 16.9192 4.29917 17.3411C4.65081 17.7631 5.12772 18.0002 5.625 18.0002H24.375C24.8723 18.0002 25.3492 17.7631 25.7008 17.3411C26.0525 16.9192 26.25 16.3469 26.25 15.7502V6.75015C26.25 6.15342 26.0525 5.58112 25.7008 5.15916C25.3492 4.73721 24.8723 4.50015 24.375 4.50015H5.625ZM14.0625 2.25015L14.58 1.0059C14.6188 0.912002 14.6787 0.832969 14.7529 0.777715C14.8271 0.722461 14.9127 0.693184 15 0.693184C15.0873 0.693184 15.1729 0.722461 15.2471 0.777715C15.3214 0.832969 15.3812 0.912002 15.42 1.0059L15.9375 2.25015H14.0625ZM14.04 22.5002H15.96C16.5919 23.9536 17.2294 25.4927 17.7413 26.8854C18.0713 27.7764 18.3375 28.5729 18.5156 29.2299C18.6056 29.5584 18.6675 29.8284 18.7069 30.0399C18.7265 30.1506 18.7409 30.2625 18.75 30.3751C18.75 31.8714 17.4056 33.7501 15 33.7501C12.5944 33.7501 11.25 31.8714 11.25 30.3751C11.25 30.3751 11.25 30.3459 11.2575 30.2874C11.2631 30.2267 11.2763 30.1456 11.295 30.0399C11.3325 29.8284 11.3944 29.5584 11.4825 29.2299C11.6625 28.5751 11.9288 27.7764 12.2569 26.8854C12.7706 25.4904 13.41 23.9536 14.04 22.5002ZM17.0906 20.2502H12.9094C11.31 23.8389 9.375 28.5527 9.375 30.3751C9.375 33.4801 11.8931 36.0001 15 36.0001C18.1069 36.0001 20.625 33.4801 20.625 30.3751C20.625 28.5527 18.69 23.8389 17.0906 20.2502Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

const RoadIcon = props => {
  return (
    <svg viewBox="0 0 27 31" {...props} fill={props.color}>
      <path
        d="M10.9688 12.5938H16.0313V14.5313H10.9688V12.5938Z"
        fill="black"
      />
      <path
        d="M21.465 7.75003L20.3934 3.34222C20.2915 2.93806 20.0782 2.58273 19.7855 2.32949C19.4928 2.07624 19.1365 1.93872 18.7701 1.93753H8.22994C7.8636 1.93893 7.50752 2.07654 7.21502 2.32977C6.92252 2.58301 6.70934 2.93822 6.60741 3.34222L5.51053 7.75003H3.375V9.68753H5.0625V16.4688C5.06295 16.9825 5.24088 17.475 5.55725 17.8382C5.87362 18.2015 6.30258 18.4058 6.75 18.4063V21.3125H8.4375V18.4063H18.5625V21.3125H20.25V18.4063C20.6974 18.4058 21.1264 18.2015 21.4428 17.8382C21.7591 17.475 21.9371 16.9825 21.9375 16.4688V9.68753H23.625V7.75003H21.465ZM8.23078 3.87503H18.7709L19.9758 8.71878H7.02506L8.23078 3.87503ZM20.25 12.5938H18.5625V14.5313H20.25V16.4688H6.75V14.5313H8.4375V12.5938H6.75V10.6563H20.25V12.5938Z"
        fill="black"
      />
      <path d="M1.6875 15.5H3.375V29.0625H1.6875V15.5Z" fill="black" />
      <path d="M23.625 15.5H25.3125V29.0625H23.625V15.5Z" fill="black" />
      <path d="M12.6562 20.3438H14.3438V23.25H12.6562V20.3438Z" fill="black" />
      <path
        d="M12.6562 25.1875H14.3438V29.0625H12.6562V25.1875Z"
        fill="black"
      />
    </svg>
  )
}

const SecurityIcon = props => {
  return (
    <svg viewBox="0 0 32 38" {...props} fill={props.color}>
      <path
        d="M3.2002 9.49991C3.2002 8.49208 3.53734 7.52554 4.13745 6.8129C4.73757 6.10026 5.5515 5.69991 6.40019 5.69991H19.2002C20.0489 5.69991 20.8628 6.10026 21.4629 6.8129C22.063 7.52554 22.4002 8.49208 22.4002 9.49991V11.1985L27.6082 7.71961C27.7298 7.63842 27.8672 7.59641 28.0068 7.59777C28.1463 7.59913 28.2831 7.6438 28.4036 7.72735C28.5241 7.8109 28.6241 7.93042 28.6936 8.07405C28.7632 8.21767 28.7999 8.38041 28.8002 8.54611V21.8499C28.8001 22.0159 28.7634 22.1789 28.6938 22.3228C28.6241 22.4667 28.5239 22.5864 28.4032 22.67C28.2824 22.7536 28.1454 22.7982 28.0056 22.7993C27.8658 22.8004 27.7283 22.7581 27.6066 22.6764L22.4002 19.1899V20.8999C22.4002 21.9077 22.063 22.8743 21.4629 23.5869C20.8628 24.2995 20.0489 24.6999 19.2002 24.6999H16.0002V26.5999C16.0002 28.6156 15.3259 30.5486 14.1257 31.9739C12.9254 33.3992 11.2976 34.1999 9.60019 34.1999H5.60019C5.38802 34.1999 5.18454 34.0998 5.03451 33.9217C4.88448 33.7435 4.80019 33.5019 4.80019 33.2499V29.4499C4.80019 29.198 4.88448 28.9563 5.03451 28.7782C5.18454 28.6 5.38802 28.4999 5.60019 28.4999H8.80019C9.43671 28.4999 10.0472 28.1996 10.4973 27.6652C10.9473 27.1307 11.2002 26.4058 11.2002 25.6499V24.6999H6.40019C5.5515 24.6999 4.73757 24.2995 4.13745 23.5869C3.53734 22.8743 3.2002 21.9077 3.2002 20.8999V9.49991ZM12.8002 24.6999V25.6499C12.8002 26.9097 12.3788 28.1179 11.6286 29.0087C10.8785 29.8995 9.86106 30.3999 8.80019 30.3999H6.40019V32.2999H9.60019C10.8732 32.2999 12.0941 31.6994 12.9943 30.6304C13.8945 29.5615 14.4002 28.1116 14.4002 26.5999V24.6999H12.8002ZM6.40019 22.7999H19.2002C19.6245 22.7999 20.0315 22.5997 20.3316 22.2434C20.6316 21.8871 20.8002 21.4038 20.8002 20.8999V9.49991C20.8002 8.99599 20.6316 8.51272 20.3316 8.1564C20.0315 7.80008 19.6245 7.59991 19.2002 7.59991H6.40019C5.97585 7.59991 5.56888 7.80008 5.26882 8.1564C4.96877 8.51272 4.80019 8.99599 4.80019 9.49991V20.8999C4.80019 21.4038 4.96877 21.8871 5.26882 22.2434C5.56888 22.5997 5.97585 22.7999 6.40019 22.7999ZM22.4082 13.3759V17.0125L27.2002 20.2235V10.1725L22.4082 13.374V13.3759Z"
        fill="black"
      />
    </svg>
  )
}

const CommuntityIcon = props => {
  return (
    <svg
      viewBox="0 0 31 37"
      {...props}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3649 26.1241C27.8157 25.8182 27.1321 25.4375 25.8792 25.4375C24.6264 25.4375 23.9428 25.8182 23.3936 26.1241C22.9224 26.3865 22.5503 26.5938 21.7272 26.5938C20.9041 26.5938 20.5321 26.3865 20.0609 26.1241C19.5117 25.8182 18.8283 25.4375 17.5754 25.4375C16.3225 25.4375 15.639 25.8183 15.0899 26.1241C14.6187 26.3865 14.2467 26.5938 13.4237 26.5938C12.6007 26.5938 12.2287 26.3865 11.7576 26.1241C11.2084 25.8182 10.525 25.4375 9.27215 25.4375C8.01931 25.4375 7.3358 25.8183 6.78664 26.1241C6.31552 26.3865 5.94346 26.5938 5.12045 26.5938C4.29744 26.5938 3.92537 26.3865 3.45426 26.1241C2.9051 25.8183 2.22159 25.4375 0.96875 25.4375V27.75C1.79176 27.75 2.16382 27.9573 2.63494 28.2198C3.1841 28.5256 3.86761 28.9063 5.12045 28.9063C6.37329 28.9063 7.0568 28.5255 7.60596 28.2198C8.07707 27.9574 8.44913 27.75 9.27215 27.75C10.0952 27.75 10.4672 27.9573 10.9382 28.2198C11.4874 28.5256 12.1708 28.9063 13.4237 28.9063C14.6765 28.9063 15.36 28.5255 15.9092 28.2198C16.3803 27.9574 16.7524 27.75 17.5754 27.75C18.3983 27.75 18.7705 27.9573 19.2416 28.2198C19.7908 28.5256 20.4743 28.9063 21.7272 28.9063C22.9801 28.9063 23.6637 28.5256 24.2129 28.2198C24.684 27.9574 25.0562 27.75 25.8792 27.75C26.7023 27.75 27.0745 27.9573 27.5456 28.2198C28.0948 28.5257 28.7784 28.9063 30.0312 28.9063V26.5938C29.2082 26.5938 28.836 26.3865 28.3649 26.1241Z"
        fill="black"
      />
      <path
        d="M25.8792 32.375C24.6264 32.375 23.9428 32.7557 23.3936 33.0615C22.9224 33.3239 22.5503 33.5313 21.7272 33.5313C20.9041 33.5313 20.5321 33.324 20.0609 33.0615C19.5117 32.7557 18.8283 32.375 17.5754 32.375C16.3225 32.375 15.639 32.7558 15.0899 33.0615C14.6187 33.3239 14.2467 33.5313 13.4237 33.5313C12.6007 33.5313 12.2287 33.324 11.7576 33.0615C11.2084 32.7557 10.525 32.375 9.27215 32.375C8.01931 32.375 7.3358 32.7558 6.78664 33.0615C6.31552 33.3239 5.94346 33.5313 5.12045 33.5313C4.29744 33.5313 3.92537 33.324 3.45426 33.0615C2.9051 32.7558 2.22159 32.375 0.96875 32.375V34.6875C1.79176 34.6875 2.16382 34.8948 2.63494 35.1572C3.1841 35.4631 3.86761 35.8438 5.12045 35.8438C6.37329 35.8438 7.0568 35.463 7.60596 35.1572C8.07707 34.8948 8.44913 34.6875 9.27215 34.6875C10.0952 34.6875 10.4672 34.8948 10.9382 35.1572C11.4874 35.4631 12.1708 35.8438 13.4237 35.8438C14.6765 35.8438 15.36 35.463 15.9092 35.1572C16.3803 34.8948 16.7524 34.6875 17.5754 34.6875C18.3983 34.6875 18.7705 34.8948 19.2416 35.1572C19.7908 35.4631 20.4743 35.8438 21.7272 35.8438C22.9801 35.8438 23.6637 35.4631 24.2129 35.1572C24.684 34.8948 25.0562 34.6875 25.8792 34.6875C26.7023 34.6875 27.0745 34.8948 27.5456 35.1572C28.0948 35.4631 28.7784 35.8438 30.0312 35.8438V33.5313C29.2082 33.5313 28.836 33.324 28.3649 33.0615C27.8157 32.7557 27.1321 32.375 25.8792 32.375Z"
        fill="black"
      />
      <path
        d="M15.0156 19.6562H23.7344V23.7031H25.6719V8.37398C25.6711 7.67215 25.8495 6.98668 26.1833 6.40886L29.2088 1.15623H26.8576L24.5866 5.09876C24.0304 6.06182 23.7331 7.20426 23.7344 8.37398V11.5625H15.0156V8.37398C15.0149 7.67215 15.1932 6.98668 15.527 6.40886L18.5526 1.15623H16.2013L13.9304 5.09876C13.3741 6.06182 13.0769 7.20426 13.0781 8.37398V23.7031H15.0156V19.6562ZM15.0156 13.875H23.7344V17.3437H15.0156V13.875Z"
        fill="black"
      />
    </svg>
  )
}

export {
  BackBtn,
  ArrowRight,
  WaterIcon,
  BasketballIcon,
  StreetLightIcon,
  RoadIcon,
  SecurityIcon,
  CommuntityIcon,
  ChevronRight,
  ChevronLeft,
}
