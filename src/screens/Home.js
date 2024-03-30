import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [categories, setcategories] = useState([]);
  const [items, setitems] = useState([]);
  const [search, setsearch] = useState("");

  const loadItemsData = async () => {
    const response = await fetch("http://localhost:5000/api/items/", {
      method: "GET",
    });
    const json = await response.json();
    setitems(json);
  };

  const loadCategoriesData = async () => {
    const response = await fetch("http://localhost:5000/api/categories/", {
      method: "GET",
    });
    const json = await response.json();
    setcategories(json);
  };

  useEffect(() => {
    loadItemsData();
    loadCategoriesData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
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
              <div
                className="d-flex"
                style={{ height: "3rem", width: "40rem" }}
              >
                <input
                  className="form-control me-2 fw-bold fs-5 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success fw-bold fs-5 "
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div
              className="carousel-item active"
              style={{ width: "100%", height: "90vh" }}
            >
              <img
                src="https://source.unsplash.com/random/1366x768/?burger"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item "
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="https://source.unsplash.com/random/1366x768/?pizza"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="https://source.unsplash.com/random/1366x768/?small-cake"
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
      </div>
      <div className="">
        <>
          {categories.length !== 0
            ? categories.map((category) => (
                <div key={category._id} className="fs-3 m-3 row mb-3">
                  {category.CategoryName}
                  <hr />
                  {items.length !== 0 ? (
                    items
                      .filter(
                        (item) =>
                          item.CategoryName === category.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => (
                        <div
                          className="col-12 col-md-6 col-lg-4"
                          key={filterItems._id}
                        >
                          <Card
                            foodItems={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      ))
                  ) : (
                    <div key={`no-data-${category._id}`}>No Data Found</div>
                  )}
                </div>
              ))
            : ""}
        </>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
