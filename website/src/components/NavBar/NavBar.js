import React from 'react'
import './NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';

const navBar = props => (
    <header className="nav_bar">
        <nav className="nav_bar_nav">
            <div className="hamburger_arrow"><MenuIcon style={{color: "white"}}/></div>
            <div className="spacer"/>
            <div className="title"><a href="/">Harvey Cash</a></div>
        </nav>
    </header>
)

export default navBar