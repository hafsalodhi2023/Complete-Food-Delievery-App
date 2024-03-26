import React from "react";

export default function Card(props) {
  const options = props.options;
  const priceOptions = Object.keys(options);

  return (
    <div className="card m-4" style={{ maxWidth: "350px", minHeight: "400px" }}>
      <img
        src={props.imgSrc}
        className="card-img-top w-100"
        alt="Lamb Kebab Skewers"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <p className="card-text" style={{ fontSize: "16px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          labore.
        </p>
        <div className="d-flex flex-row align-items-center flex-wrap">
          <select
            className=" h-100 mb-1 bg-success text-white fs-6 rounded"
            style={{ border: "none", width: "7rem", marginRight: "1rem" }}
          >
            {Array.from(Array(6), (e, i) => (
              <option className="text-white fs-6" key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            className="h-100  bg-success text-white fs-6 rounded"
            style={{ border: "none", width: "7rem", marginRight: "1rem" }}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data.toUpperCase()}
                </option>
              );
            })}
          </select>
          <div className="mt-2 fs-5 fw-bold " style={{ paddingLeft: "1rem" }}>
            Total Price:
          </div>
        </div>
      </div>
    </div>
  );
}
