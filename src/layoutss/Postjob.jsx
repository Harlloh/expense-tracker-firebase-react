import React, { useState } from "react";
import axios from "axios"; // You also need to import axios
import { useNavigate } from "react-router-dom";

export default function Postjob() {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    salary: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/careers", jobDetails) // Corrected "jobDeatails" to "jobDetails"
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
    navigate("/careers");
  };

  return (
    <div className="postjob-layout">
      <form
        onSubmit={handleSubmit}
        action=""
        className="form-control w-50 gap-4"
      >
        <div className="inputs d-flex flex-column my-2">
          <label htmlFor="title">Enter Job Title</label>
          <input
            type="text"
            onChange={handleChange}
            value={jobDetails.title}
            name="title"
            placeholder="Enter the job title"
          />
        </div>
        <div className="inputs d-flex flex-column my-2">
          <label htmlFor="salary">Enter Job Salary</label>{" "}
          {/* Corrected "Salary" to "salary" */}
          <input
            type="number"
            onChange={handleChange}
            value={jobDetails.salary}
            name="salary"
            placeholder="Enter the job salary"
          />
        </div>
        <div className="inputs d-flex flex-column my-2">
          <label htmlFor="location">Enter Job Location</label>{" "}
          {/* Corrected "Location" to "location" */}
          <input
            type="text"
            onChange={handleChange}
            name="location"
            value={jobDetails.location}
            placeholder="Enter the job location"
          />
        </div>
        <div className="inputs d-flex flex-column my-2">
          <label htmlFor="description">Enter Job Description</label>{" "}
          {/* Corrected "description" to "Description" */}
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={jobDetails.description}
            placeholder="Enter the job description"
          />
        </div>
        <button
          className="btn btn-sm bg-success padding-2 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
