// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Help from './Components/Pages/Help';
import Offer from './Components/Pages/Offer';
import Register from './Components/Pages/Register';

import DarkModeToggle from "react-dark-mode-toggle";
import {createContext, useState} from "react";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
        <Router>
          <Navbar /> 
          <div className="switch">
            <DarkModeToggle onChange={toggleTheme} checked={theme === "dark"} size={60}/>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
