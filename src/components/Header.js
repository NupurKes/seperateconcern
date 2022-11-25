import React from "react";
import "./Header.css";
import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>

      <NavLink className={({ isActive }) =>
           isActive ? "link-active" : "link-inactive" }
           to="/" > Home
           
        </NavLink>

        
        <NavLink className={({ isActive }) =>
           isActive ? "link-active" : "link-inactive" }
           to="/about" > About
           
        </NavLink>

        <NavLink className={({ isActive }) =>
           isActive ? "link-active" : "link-inactive" }
           to="/contact" > Contact

</NavLink>
      </div>
    </div>
  );
}
