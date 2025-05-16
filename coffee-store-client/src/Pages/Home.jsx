import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../Components/CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="my-10">
        <div className="text-center">
          <h1 className=" text-4xl mb-4">Our Popular Products</h1>

          <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
            <Link className="font text-xl" to="/addCoffee">
              Add Coffee
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
