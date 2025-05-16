import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router";
import UpdateCard from "./UpdateCard";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-568px)]">
        <Link to="/" className="text-xl font">
          Back to Home
        </Link>
        <UpdateCard coffee={coffee}></UpdateCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default UpdateCoffee;
