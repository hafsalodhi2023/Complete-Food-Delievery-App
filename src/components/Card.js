import React from "react";

export default function Card() {
  return (
    <>
      <div className="card mt-3" style={{ maxHeight: "360px", width: "300px" }}>
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            labore.
          </p>
          <div className="container w-100">
            <select
              className="m-2 h-100 w-25 bg-success text-white fs-6 rounded"
              style={{ border: "none" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option className="text-white fs-6" key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 w-25 bg-success text-white fs-6 rounded"
              style={{ border: "none" }}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5 fw-bold">Total Price</div>
          </div>
        </div>
      </div>
    </>
  );
}
