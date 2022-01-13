import React from 'react'
import { NavMenu } from './NavbarElements'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <NavMenu>
                <DesktopNavigation />
                <MobileNavigation />
            </NavMenu>
        </>
    )
}

export default Navbar