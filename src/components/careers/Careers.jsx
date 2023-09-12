import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careersData = useLoaderData();
  return (
    <div className="careers">
      {careersData.map((career, index) => (
        <Link className="" to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          {/* <p>{career.salary}</p> */}
          <p>Based in: {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//careers loader
export const CareerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("could not fetch the careers");
  }
  return res.json();
};
