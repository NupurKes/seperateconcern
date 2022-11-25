import React from "react";

import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "blue" }
          }
          to="/"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "blue" }
          }
          to="/about"
        >
          {" "}
          About
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "blue" }
          }
          to="/contact"
        >
          {" "}
          Contact
        </NavLink>
      </div>
    </div>
  );
}
