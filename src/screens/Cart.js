import React from "react";
export default function Cart() {
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col" className="text-success">
                #
              </th>
              <th scope="col" className="text-success">
                Name
              </th>
              <th scope="col" className="text-success">
                Quantity
              </th>
              <th scope="col" className="text-success">
                Option
              </th>
              <th scope="col" className="text-success">
                Amount
              </th>
              <th scope="col" className="text-success"></th>
            </tr>
          </thead>
          <tbody>
            {/*data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <Delete
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>{" "}
                </td>
              </tr>
                    ))*/}
          </tbody>
        </table>
        {/* <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div> */}
        <div>
          <button className="btn bg-success text-white mt-5 ">
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
