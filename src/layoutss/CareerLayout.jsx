import React from "react";
import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div>
      <h1>CareerLayout</h1>
      <Outlet />
    </div>
  );
}
