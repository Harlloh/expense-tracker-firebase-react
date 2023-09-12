import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae velit
        non eaque voluptas, maiores id accusamus omnis nisi est perspiciatis!
      </p>
      <p>
        go to the home page <NavLink to="/">Homepage.</NavLink>
      </p>
    </div>
  );
}
