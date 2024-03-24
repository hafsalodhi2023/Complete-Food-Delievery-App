import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-center w-100 "
        style={{ height: "80vh" }}
      >
        <form className="w-50 p-5 bg-success rounded border border-success">
          <div className="mb-4">
            <label
              for="exampleInputEmail1"
              className="form-label text-white fw-medium fs-5"
            >
              Username :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-4">
            <label
              for="exampleInputEmail1"
              className="form-label text-white fw-medium fs-5"
            >
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-4">
            <label
              for="exampleInputPassword1"
              className="form-label text-white fw-medium fs-5"
            >
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-4">
            <label
              for="exampleInputPassword1"
              className="form-label text-white fw-medium fs-5"
            >
              Location :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
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
