import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-home">
        <img src="/home-icon.png" alt="Home" className="home-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
