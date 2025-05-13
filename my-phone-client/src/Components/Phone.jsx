import React from "react";
import { useLoaderData } from "react-router";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h1>{phone.brand}</h1>
      <p>{phone.price}</p>
    </div>
  );
};

export default Phone;
