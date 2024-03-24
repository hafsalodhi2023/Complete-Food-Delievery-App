import React from "react";

export const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-caption d-flex align-items-center justify-content-center "
            style={{ zIndex: "10", paddingBottom: "20rem" }}
          >
            <form className="d-flex" style={{ height: "3rem", width: "40rem" }}>
              <input
                className="form-control me-2 fw-bold fs-5 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success fw-bold fs-5 "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div
            className="carousel-item active"
            style={{ width: "100%", height: "90vh" }}
          >
            <img
              src="https://source.unsplash.com/random/600×400/?burger"
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div
            className="carousel-item "
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="https://source.unsplash.com/random/200×700/?pizza"
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="https://source.unsplash.com/random/200×700/?fastfood"
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
