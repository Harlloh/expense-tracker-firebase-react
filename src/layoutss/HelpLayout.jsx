import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet.
      </p>
      <nav>
        <ul className=" list-style-none">
          <li className="text-white">
            <NavLink to="faq">Faq</NavLink>
          </li>
          <li className="text-white">
            <NavLink to="contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
