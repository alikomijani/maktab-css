import React from "react";
import { NavLink } from "react-router-dom";
import "./toolbar.style.css";
import clsx from "clsx";
export function Toolbar() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              clsx(isActive && "active", isPending && "pending")
            }
          >
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/users"
            className={({ isActive, isPending }) =>
              clsx(isActive && "active", isPending && "pending")
            }
          >
            Users List
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/create-user"
            className={({ isActive, isPending }) =>
              clsx(isActive && "active", isPending && "pending")
            }
          >
            Create User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
