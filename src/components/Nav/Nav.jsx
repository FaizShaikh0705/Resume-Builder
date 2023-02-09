import React from 'react'
import './Nav.css'
import IMG1 from '../../assets/resumelogo.png'


const Nav = () => {
    return (
        <header className="navbar1">
            <img src={IMG1} alt="logo_img" className='logo_img1' />
            <div className="navbar_options">
                <ul className='navbar_menu'>
                    <li><a href="/Login" className='btn' target={"_blank"}>LOGIN</a></li>
                    <li><a href="/Signup" className='btn'target={"_blank"}>SIGNUP</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav