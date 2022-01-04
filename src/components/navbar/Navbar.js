import React from 'react'
import { NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <NavMenu>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/maps'>Maps</NavLink>
                <NavLink to='/volunteer'>Volunteer</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
            </NavMenu>
        </>
    )
}

export default Navbar