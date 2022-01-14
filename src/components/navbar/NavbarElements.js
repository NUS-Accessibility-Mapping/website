import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
    color: #6f5acd;
    font-size: calc(1vw + 1.5vmin);
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #291f80;
    }

    @media (max-width: 800px) {
        font-size: calc(1vw + 2vmin);
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
