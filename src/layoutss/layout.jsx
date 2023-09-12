import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Breadcrumbs from "../Breadcrumbs";

const links = [
  {
    id: 1,
    value: "Home",
    to: "/",
  },
  {
    id: 2,
    value: "Login",
    to: "login",
  },
  {
    id: 3,
    value: "Help",
    to: "help",
  },
  {
    id: 4,
    value: "Careers",
    to: "careers",
  },
  {
    id: 5,
    value: "Post a Job",
    to: "postjob",
  },
];
function Layout() {
  return (
    <div className="main-layout  text-white root-layout">
      <header>
        <nav className="bg-black text-white d-flex align-content-center justify-content-between p-4">
          <h1>Router Lesson</h1>
          <ul className=" list-style-none">
            {links.map((link) => (
              <li key={link.id} className="text-white">
                <NavLink to={link.to}>{link.value}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}

export default Layout;
