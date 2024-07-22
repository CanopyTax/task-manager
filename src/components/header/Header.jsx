import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Canopy Logo" className="logo" />
      <h1>Task Manager</h1>
    </header>
  );
}

export default Header;
