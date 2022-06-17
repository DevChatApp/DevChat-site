// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Help from './Components/Pages/Help';
import Offer from './Components/Pages/Offer';
import Register from './Components/Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
  );
}

export default App;
