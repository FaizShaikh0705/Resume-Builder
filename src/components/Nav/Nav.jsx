import React from 'react'
import './Nav.css'
import IMG1 from '../../assets/resumelogo.png'
import { Link } from "react-router-dom";
import { auth } from "../../firebase"


const Nav = () => {

        const logout = () => {
            auth().signOut();
        }
        return (
            <header className="navbar1">
                <img src={IMG1} alt="logo_img" className='logo_img1' />
                <div className="navbar_options">
                    <ul className='navbar_menu'>
                        <li><Link to="/Login" className='btn' target="_blank" rel="noopener noreferrer">LOGIN</Link></li>
                        <li><Link to="/Signout" className='btn' onClick={logout} >SIGN OUT</Link></li>
                    </ul>
                </div>
            </header>
        )

    
}

export default Nav;