import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/navBar.css";
import img from "../../Assests/Logo_Koala.png"

function NavBar() {
  return (
    <div className="navbar">
        <div className="logo">
          <Link to='/'>
            <img src={img} alt="logo" />
          </Link>
        </div>
      <div className="links">
        <Link to='/Products'>Products</Link>
        <Link to='/Cart'>Shop</Link>
        <Link to='/About us'>About us</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
