import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    orange: {
      main: "#ffb600"
    },
    blue: {
      main: "#002eff"
    }
  }
});

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return ( 
        <nav className="navigation">
            <a href="/" className="brand-name">DevChat</a>
            <button className="hamburger" onClick={handleToggle}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            <div className="container">
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <ThemeProvider theme={theme}>
                    <Button variant="" className="li">
                        <NavLink className="nav-link" onClick={() => closeMenu()} to="/">Accueil</NavLink>
                    </Button>
                    <Button variant="" className="li">
                        <NavLink className="nav-link" onClick={() => closeMenu()} to="/contact">Discussion</NavLink>
                    </Button>
                    <Button variant="" className="li">
                        <NavLink className="nav-link" onClick={() => closeMenu()} to="/help">Besoin d'Aide</NavLink>
                    </Button>
                    <Button variant="" className="li">
                        <NavLink className="nav-link" onClick={() => closeMenu()} to="/offer">Offre d'Emploie</NavLink>
                    </Button>
                    <Button variant="" className="li">
                        <NavLink className="nav-link" onClick={() => closeMenu()} to="/login">Connexion</NavLink>
                    </Button>
                    <Button variant="contained" color="orange" className="li">
                        <NavLink className="nav-link white" onClick={() => closeMenu()} to="/register">Nouveau ?</NavLink>
                    </Button>
                </ThemeProvider>
                </ul>
            </div>
        </nav>
     ); 
}
 
export default Navbar;
