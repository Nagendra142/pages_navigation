import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar=()=>{
    return (
        <div style={{NavLink:"margin-left=15px"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Project">Project</NavLink>

        </div>
    )
    
}