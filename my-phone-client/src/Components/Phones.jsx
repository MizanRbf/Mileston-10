import React from "react";
import { Link, useLoaderData } from "react-router";
import Phone from "./Phone";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h1>Phones:{phones.length}</h1>
      {phones.map((phone) => (
        <li>
          <Link to={`/phone/${phone.id}`}>{phone.brand}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
