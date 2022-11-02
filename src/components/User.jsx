import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Outlet />
      <h1>User.... </h1>
      <ul>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default User;
