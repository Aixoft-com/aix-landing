import React from "react";
import logo from './logo.png';
import "./NavBar.scss"

export const NavBar: React.FC<{}> = () => {

    return (
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contactus">Contact us</a></li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
      </nav>
)
}
