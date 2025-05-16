import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FormAddCoffee from "./FormAddCoffee";
import { Link } from "react-router";

const AddCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  // Handle Add Coffee
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // Create Coffees Collection in DB
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee to db", data);

        if (data.insertedId) {
          // alert('added successfully')
          newCoffee._id = data.insertedId;
          const newCoffees = [...coffees, newCoffee];
          setCoffees(newCoffees);
          form.reset();
        }
      });

    // Read Coffees Collection from DB
  };

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-568px)]">
        <Link to="/" className="text-xl font">
          Back to Home
        </Link>
        <FormAddCoffee handleAddCoffee={handleAddCoffee}></FormAddCoffee>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AddCoffee;
