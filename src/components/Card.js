import React from "react";

export default function Card() {
  return (
    <>
      <div
        className="card m-4 "
        style={{
          maxHeight: "500px",
          width: "350px",
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/side-view-lamb-kebab-with-shrimps-griled-onion-sauce-board_141793-4983.jpg?t=st=1711262967~exp=1711266567~hmac=92ce5bacd0c7e184872a952b571f9318d399ed63e60a6dfa7db8601cc17783ce&w=826" // Removed extra characters after .htm
          className="card-img-top h-100 w-100 "
          alt="Lamb Kebab Skewers" // Added meaningful alt text
          style={{ objectFit: "cover" }}
        />
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
              {Array.from(Array(6), (e, i) => (
                <option className="text-white fs-6" key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
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
