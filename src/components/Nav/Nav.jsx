import React from 'react'
import './Nav.css'
import IMG1 from '../../assets/resumelogo.png'


const Nav = () => {
    return (
        <header className="navbar1">
            <img src={IMG1} alt="logo_img" className='logo_img1' />
            <div className="navbar_options">
                <ul className='navbar_menu'>
                    <li><a href="" className='btn' >LOGIN</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav