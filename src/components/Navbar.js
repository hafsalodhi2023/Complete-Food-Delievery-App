import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 text-uppercase fw-bold " to="/">
          go food
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>

              <Link className="btn bg-white text-success mx-1" to="/register">
                Register
              </Link>
            </div>
          ) : (
            <>
              <div
                className="btn bg-white text-success mx-1"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                My Cart &nbsp;
                <Badge pill bg="success">
                  3
                </Badge>
              </div>
              <div
                className="btn bg-white text-danger mx-1"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  navigate("/login");
                }}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
