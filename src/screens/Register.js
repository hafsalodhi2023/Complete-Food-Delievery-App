import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();

      if (response.status === 400) {
        alert("Enter Valid Credentials.");
      }

      if (response.status === 403) {
        alert(json.message);
      }

      if (response.status === 200) {
        alert("Created User Successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center w-100"
        style={{ height: "80vh" }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-50 p-5 bg-success rounded border border-success"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="form-label text-white fw-medium fs-5"
            >
              Username :
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={credentials.username}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="form-label text-white fw-medium fs-5"
            >
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label text-white fw-medium fs-5"
            >
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="form-label text-white fw-medium fs-5"
            >
              Location :
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={credentials.location}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="btn border-2 border-white text-white rounded"
          >
            Submit
          </button>
          <Link to="/login" className="m-3 border-2 text-white btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
