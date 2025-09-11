import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidenav.css";

export default function SideNav() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Calci<br />Express</div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/math"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Math
        </NavLink>
        <NavLink
          to="/physics"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Physics
        </NavLink>
         <NavLink
          to="/string"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          String
        </NavLink>

        <NavLink
          to="/javascript"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Javascript
        </NavLink>
        <NavLink
          to="/misc"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          MISC
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <button className="mode-toggle">Change Mode</button>
      </div>
    </aside>
  );
}
