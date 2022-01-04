import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
`

export const NavMenu = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px;
    background-color: #6f5acd;
    height: 100%;
    top: 0;
    left: 0;
    padding: 50px 200px;
`