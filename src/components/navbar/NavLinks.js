import React from 'react'
import { NavLink } from './NavbarElements'

const NavLinks = ({ isMobile, closeMobileMenu }) => {
    return (
        <ul className='list'>
            <li className='links' onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li className='links' onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li className='links' onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/maps'>Maps</NavLink>
            </li>
            <li className='links' onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/volunteer'>Volunteer</NavLink>
            </li>
            <li className='links' onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/blogs'>Blogs</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
