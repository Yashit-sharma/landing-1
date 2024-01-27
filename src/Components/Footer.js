import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
   <>
   
    <div className="ft-wrapper">
        <div className="left-ft">
            <p>Nexcent</p>
            <p>
                Copyright © 2020 Nexcent ltd.
                <br></br>
               All rights reserved
            </p>
            <ul className='ft-list'>
                <li className='ft-items'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="black">
<path opacity="0.1" fill-rule="" clip-rule="" d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z" fill=""/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0008 8.13843C13.6833 8.13843 13.3924 8.14856 12.4822 8.18998C11.5737 8.23158 10.9536 8.37541 10.4111 8.58643C9.84981 8.80439 9.37372 9.09595 8.8994 9.57044C8.42473 10.0448 8.13317 10.5209 7.9145 11.0819C7.70294 11.6247 7.55894 12.245 7.51805 13.1531C7.47734 14.0633 7.46667 14.3543 7.46667 16.6718C7.46667 18.9894 7.47699 19.2793 7.51823 20.1896C7.56001 21.098 7.70383 21.7181 7.91468 22.2607C8.13282 22.822 8.42437 23.2981 8.89887 23.7724C9.37301 24.247 9.8491 24.5393 10.41 24.7573C10.9529 24.9683 11.5732 25.1121 12.4815 25.1537C13.3917 25.1951 13.6824 25.2053 15.9997 25.2053C18.3175 25.2053 18.6074 25.1951 19.5176 25.1537C20.4261 25.1121 21.0469 24.9683 21.5898 24.7573C22.1509 24.5393 22.6263 24.247 23.1004 23.7724C23.5751 23.2981 23.8667 22.822 24.0853 22.2609C24.2951 21.7181 24.4391 21.0979 24.4818 20.1898C24.5227 19.2795 24.5333 18.9894 24.5333 16.6718C24.5333 14.3543 24.5227 14.0635 24.4818 13.1532C24.4391 12.2448 24.2951 11.6247 24.0853 11.0821C23.8667 10.5209 23.5751 10.0448 23.1004 9.57044C22.6258 9.09577 22.1511 8.80421 21.5893 8.58643C21.0453 8.37541 20.4249 8.23158 19.5164 8.18998C18.6062 8.14856 18.3164 8.13843 15.9981 8.13843H16.0008ZM15.2353 9.6762C15.4625 9.67584 15.716 9.6762 16.0008 9.6762C18.2792 9.6762 18.5492 9.68438 19.449 9.72526C20.281 9.76331 20.7326 9.90233 21.0334 10.0191C21.4316 10.1738 21.7155 10.3587 22.014 10.6574C22.3127 10.956 22.4976 11.2405 22.6526 11.6387C22.7694 11.9392 22.9086 12.3907 22.9464 13.2227C22.9873 14.1223 22.9962 14.3925 22.9962 16.6699C22.9962 18.9472 22.9873 19.2175 22.9464 20.117C22.9084 20.949 22.7694 21.4006 22.6526 21.701C22.4979 22.0993 22.3127 22.3828 22.014 22.6813C21.7153 22.98 21.4318 23.1649 21.0334 23.3195C20.7329 23.4369 20.281 23.5755 19.449 23.6136C18.5494 23.6545 18.2792 23.6634 16.0008 23.6634C13.7222 23.6634 13.4521 23.6545 12.5526 23.6136C11.7205 23.5752 11.269 23.4362 10.968 23.3194C10.5698 23.1647 10.2853 22.9798 9.98666 22.6811C9.68799 22.3825 9.5031 22.0987 9.34808 21.7003C9.23128 21.3999 9.09208 20.9483 9.05421 20.1163C9.01332 19.2167 9.00514 18.9465 9.00514 16.6677C9.00514 14.389 9.01332 14.1202 9.05421 13.2206C9.09226 12.3886 9.23128 11.937 9.34808 11.6362C9.50275 11.238 9.68799 10.9535 9.98666 10.6549C10.2853 10.3562 10.5698 10.1713 10.968 10.0163C11.2688 9.89896 11.7205 9.76029 12.5526 9.72206C13.3398 9.68651 13.6448 9.67584 15.2353 9.67406V9.6762ZM20.5558 11.0931C19.9905 11.0931 19.5318 11.5512 19.5318 12.1168C19.5318 12.6821 19.9905 13.1408 20.5558 13.1408C21.1212 13.1408 21.5799 12.6821 21.5799 12.1168C21.5799 11.5514 21.1212 11.0931 20.5558 11.0931ZM16.0008 12.2896C13.5807 12.2896 11.6186 14.2517 11.6186 16.6718C11.6186 19.0919 13.5807 21.0532 16.0008 21.0532C18.4209 21.0532 20.3824 19.0919 20.3824 16.6718C20.3824 14.2517 18.4209 12.2896 16.0008 12.2896ZM16.0008 13.8274C17.5717 13.8274 18.8453 15.1008 18.8453 16.6718C18.8453 18.2427 17.5717 19.5163 16.0008 19.5163C14.4298 19.5163 13.1563 18.2427 13.1563 16.6718C13.1563 15.1008 14.4298 13.8274 16.0008 13.8274Z" fill="white"/>
                </svg>
                </li>
                <li className='ft-items'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="">
  <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z" fill=""/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.6767L15.5544 14.2304L14.9948 14.1626C12.9579 13.9027 11.1784 13.0214 9.66756 11.5413L8.92891 10.8069L8.73865 11.3492C8.33575 12.5582 8.59316 13.8349 9.43253 14.6936C9.8802 15.1682 9.77948 15.2359 9.00725 14.9535C8.73865 14.8631 8.50363 14.7953 8.48124 14.8292C8.4029 14.9083 8.6715 15.9365 8.88414 16.3432C9.17513 16.9082 9.76828 17.4618 10.4174 17.7895L10.9658 18.0493L10.3167 18.0606C9.68994 18.0606 9.66756 18.0719 9.73471 18.3092C9.95854 19.0436 10.8427 19.8232 11.8276 20.1622L12.5214 20.3995L11.9171 20.761C11.0218 21.2808 9.96973 21.5745 8.91772 21.5971C8.41409 21.6084 8 21.6536 8 21.6875C8 21.8005 9.36538 22.4332 10.16 22.6818C12.5438 23.4162 15.3753 23.0998 17.5017 21.8457C19.0126 20.9531 20.5235 19.1792 21.2286 17.4618C21.6091 16.5466 21.9896 14.8744 21.9896 14.0722C21.9896 13.5524 22.0232 13.4847 22.6499 12.8632C23.0192 12.5017 23.3662 12.1062 23.4333 11.9932C23.5452 11.7785 23.534 11.7785 22.9633 11.9706C22.012 12.3096 21.8777 12.2644 22.3477 11.756C22.6947 11.3944 23.1088 10.7391 23.1088 10.547C23.1088 10.5131 22.9409 10.5696 22.7506 10.6713C22.5492 10.7843 22.1015 10.9537 21.7658 11.0554L21.1614 11.2475L20.613 10.8747C20.3108 10.6713 19.8856 10.4453 19.6617 10.3775C19.0909 10.2193 18.218 10.2419 17.7032 10.4227C16.3042 10.9311 15.4201 12.2418 15.5208 13.6767Z" fill="white"/>
                </svg>
                </li>
                <li className='ft-items'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z" fill=""/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6677 11.1714C23.4021 11.3729 23.9804 11.9667 24.1767 12.7207C24.5333 14.0872 24.5333 16.9385 24.5333 16.9385C24.5333 16.9385 24.5333 19.7897 24.1767 21.1564C23.9804 21.9104 23.4021 22.5041 22.6677 22.7057C21.3369 23.0718 16 23.0718 16 23.0718C16 23.0718 10.6631 23.0718 9.33218 22.7057C8.59783 22.5041 8.0195 21.9104 7.82323 21.1564C7.46667 19.7897 7.46667 16.9385 7.46667 16.9385C7.46667 16.9385 7.46667 14.0872 7.82323 12.7207C8.0195 11.9667 8.59783 11.3729 9.33218 11.1714C10.6631 10.8052 16 10.8052 16 10.8052C16 10.8052 21.3369 10.8052 22.6677 11.1714ZM14.4 14.5385V19.8718L18.6667 17.2052L14.4 14.5385Z" fill="white"/>
                </svg>
                </li>
            </ul>
        </div>
        <div className="right-ft">
            <div className="r-1">
            <p>Company</p>
            <ul className="r-list">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
            </ul>
            </div>

            <div className='r-2'>
            <p>Support</p>
            <ul className="r-list">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className='r-3'>
            <p>Stay up to Date</p>  
            <input type="text" className='r-input' placeholder='Your Email' />
            </div>
        </div>
    </div>
   </>
  )
}