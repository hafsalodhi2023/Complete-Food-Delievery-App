import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (response.status === 400) {
      alert(json.message);
    } else {
      alert(json.success);
      navigate("/");
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
          <button
            type="submit"
            className="btn border-2 border-white text-white rounded"
          >
            Submit
          </button>
          <Link
            to="/register"
            className="m-3 border-2 text-white btn btn-danger"
          >
            I' m a New User
          </Link>
        </form>
      </div>
    </>
  );
}
