import React from 'react'
import './menubar.css'
import { NavLink } from 'react-router-dom'

function MenuBar() {
    return (
        <div>
            <nav className='menubar'>
                <NavLink className="menubar-item" to="/">Home</NavLink>
                <NavLink className="menubar-item" to="/About">About</NavLink>
                <NavLink className="menubar-item" to="/">Yes</NavLink>
            </nav>
        </div>
    )
}

export default MenuBar