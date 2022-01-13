import NavLinks from "./NavLinks"
import { CgMenu, CgClose } from 'react-icons/cg'
import { useState } from 'react'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open)

    const hamburgerIcon = <CgMenu className='button' size='40px' onClick={toggleOpen} />
    const closeIcon = <CgClose className='button' size='40px' onClick={toggleOpen} />

    const closeMobileMenu = () => setOpen(false)

    return (
        <div className="mobileNavigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
    )
}

export default MobileNavigation
