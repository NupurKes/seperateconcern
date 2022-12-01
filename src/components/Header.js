import React from "react";
import "./Header.css";
import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";
import { LoggedInContext } from "../App";
import { useContext } from 'react'
import { Button } from "@mui/material";
import LogoutButton from "./LogoutButton";


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

  // const buttonStyle = {
  //   backgroundColor: "green",
  //   border: "none",
  //   color: "white",
  //   padding: "15px 32px",
  //   textAlign: "center",
  //   textDecoration: "none",
  //   display: "inline-block",
  //   fontSize: "16px",
  //   };
    
  return (
    <div>
      <div>
      
        <HomeButton />
      </div>
      <div>
      <nav>
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

        <span className="text-white">
      {isLoggedIn ? "Welcome" : "Please login"}
      </span>
      {isLoggedIn && <LogoutButton />} 
        

        {/* <NavLink to ="/">
      <button style={buttonStyle}>
      {" "}
      <p>Home</p>
    </button>
    </NavLink> */}
    </nav>
      </div>
      
    </div>
  );
}
