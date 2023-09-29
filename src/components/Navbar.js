import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h1>FurniShop</h1>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="menu">
        <MenuIcon />
      </div>
    </div>
  );
}
