import React from "react";
import { NavLink, Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-568px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
