import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const getStyle = ({ isActive }) => (isActive ? { color: "white" } : {});
  return (
    <nav>
      <NavLink style={getStyle} to="/">
        Dashboard
      </NavLink>
      <NavLink style={getStyle} to="/department">
        Departments
      </NavLink>
      <NavLink style={getStyle} to={`/products`}>
        Products
      </NavLink>
    </nav>
  );
};

export default SideBar;
