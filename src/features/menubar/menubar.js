import React from 'react'
import './menubar.css'
import { NavLink} from 'react-router-dom'

function MenuBar(){
    return(
        <div>
            <header className='menubar'>
                <NavLink className='menubar-item' to="/about">About</NavLink>
                <NavLink className='menubar-item'>Yes</NavLink>
                <NavLink className='menubar-item'>Yes</NavLink>
            </header>
        </div>
    )
}

export default MenuBar