import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

function CareerDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialCareerData = useLoaderData();
  const [career, setCareer] = useState(initialCareerData);
  const [editedCareer, setEditedCareer] = useState(initialCareerData); // Separate state for edited data

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/careers/${id}`, editedCareer) // Corrected "jobDeatails" to "jobDetails"
      .then((res) => {
        if (res.status === 200) {
          navigate("/careers");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/careers/${id}`).then((res) => {
      if (res.status === 200) {
        navigate("/careers");
      }
    });
  };

  // Update the editedCareer state when initialCareerData changes
  useEffect(() => {
    setEditedCareer(initialCareerData);
  }, [initialCareerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCareer((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset the editedCareer state when cancelling edit
    setEditedCareer(career);
  };

  return (
    <div className="career-details">
      <h1>Job details for {career.title}</h1>
      {isEditing ? (
        <div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={editedCareer.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={editedCareer.salary}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={editedCareer.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={editedCareer.description}
              onChange={handleChange}
            />
          </div>
          {/* Add input fields for other career details */}
          <button
            type="submit"
            className="btn btn-md bg-success"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button className="btn btn-md bg-danger" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>Starting salary is {career.salary}</p>
          <p>Location: {career.location}</p>
          <div className="details">
            <p>{career.description}</p>
          </div>
          <button className="btn btn-md bg-warning" onClick={handleEditClick}>
            Edit
          </button>
          <button className="btn btn-md bg-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default CareerDetails;

//Career Details Loader
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if (!res.ok) {
    throw Error("career not found");
  }
  return res.json();
};
