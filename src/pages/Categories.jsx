import React from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const user = {
    name: "ali",
    type: "admin",
  };

  if (user.type !== "admin") {
    return <Navigate to={"/"} />; // direk dışarı atıyor.
  }

  return (
    <div className="d-flex gap-5 p-5">
      <aside className="d-flex flex-column gap-3 ">
        <NavLink to={"/categories/romance"}>romance</NavLink>
        <NavLink to={"/categories/fantasy"}>fantasy</NavLink>
        <NavLink to={"/categories/biography"}>biography</NavLink>
        <NavLink to={"/categories/children"}>children</NavLink>
        <NavLink to={"/categories/fiction"}>fiction</NavLink>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
