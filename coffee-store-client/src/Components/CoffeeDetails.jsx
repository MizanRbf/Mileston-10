import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { category, quantity, photo } = coffee;
  return (
    <div className="max-w-[1200px] mx-auto my-20 px-10">
      <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
        <Link className="font text-xl" to="/">
          Go Home
        </Link>
      </button>
      <div className="bg-base-300 flex items-center justify-between p-6  rounded-sm">
        <div>
          <img className="w-30 h-40" src={photo} alt="" />
        </div>
        <div>
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Price:</span> {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
