import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: parseInt(qty), // Convert qty to number
      size: size,
      img: props.foodItems.img,
    });
    console.log(data);
  };
  const finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceOptions[0]); // Set initial size value
  }, []);

  return (
    <div className="card m-4" style={{ maxWidth: "350px", minHeight: "400px" }}>
      <img
        src={props.foodItems.img}
        className="card-img-top w-100"
        alt="Lamb Kebab Skewers"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodItems.name}</h5>
        <p className="card-text" style={{ fontSize: "16px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
          labore.
        </p>
        <div className="d-flex flex-row align-items-center flex-wrap">
          <select
            className=" h-100 mb-1 bg-success text-white fs-6 rounded"
            style={{ border: "none", width: "7rem", marginRight: "1rem" }}
            onChange={(e) => {
              setQty(parseInt(e.target.value)); // Convert qty to number
            }}
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
            ref={priceRef}
            onChange={(e) => {
              setSize(e.target.value);
            }}
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
            PKR. {finalPrice}/-
          </div>
        </div>
        <hr />
        <div
          className="btn bg-success text-white mx-1"
          onClick={handleAddToCart}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
}
