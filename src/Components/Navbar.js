import React from 'react'
import '../Styles/Navbar.css'
export default function Navbar() {
  return (
    <>
    <div className="wrapper">
        <div className="logo">
        <p>Nexcent</p>
        </div>
        <div className="nav-list">
            <ul className='nav-ul'>
                <li className='items'>Home</li>
                <li className='items'>Service</li>
                <li className='items'>Feature</li>
                <li className='items'>Product</li>
            </ul>
        </div>
        <div className="buttons">
            <button id='btn1'>Login</button>
            <button id='btn2'>Sign Up</button>
        </div>
    </div>
    </>
  )
}
