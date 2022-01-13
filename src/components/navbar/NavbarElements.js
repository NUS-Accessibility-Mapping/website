import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
    color: #6f5acd;
    font-size: 30px;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #291f80;
    }
`

export const NavMenu = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px;
    background-color: #e8e2ff;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
`
