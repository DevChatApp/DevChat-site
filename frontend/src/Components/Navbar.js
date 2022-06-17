import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';


const Navbar = () => {
    return ( 
        <nav className="nav-wrapper">
            <div className="container">
                <ul className="right">
                    <Button variant="contained">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Button>
                    <Button variant="contained">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Button>
                    <Button variant="contained">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </Button>
                </ul>
            </div>
        </nav>
     ); 
}
 
export default Navbar;

/* <li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li> */