import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Register() {
  const baseURL = "https://food-delievery-app-rho.vercel.app/";

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  const [pstatus, setPstatus] = useState(false);

  let navigate = useNavigate();

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${baseURL}api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();

    if (response.status === 403) {
      alert(json.message);
    } else if (response.status === 400) {
      alert(json.error.message);
    } else if (response.status === 200) {
      alert(json.success);
      navigate("/login");
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
              required
              autoComplete="off"
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
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label text-white fw-medium fs-5"
            >
              Password :
            </label>
            {pstatus ? (
              <div style={{ position: "relative" }}>
                <FontAwesomeIcon
                  onClick={() => {
                    setPstatus(!pstatus);
                  }}
                  icon={faEyeSlash}
                  style={{
                    position: "absolute",
                    right: "10",
                    top: "calc(1/2)",
                    transform: "translateY(50%)",
                    color: "#606468",
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={changeHandler}
                  required
                  autoComplete="off"
                />
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <FontAwesomeIcon
                  onClick={() => {
                    setPstatus(!pstatus);
                  }}
                  icon={faEye}
                  style={{
                    position: "absolute",
                    right: "10",
                    top: "calc(1/2)",
                    transform: "translateY(50%)",
                    color: "#606468",
                  }}
                />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={changeHandler}
                  required
                  autoComplete="off"
                />
              </div>
            )}
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
              required
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="btn border-2 border-white text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
