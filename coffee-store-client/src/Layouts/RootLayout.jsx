import React from "react";
import { NavLink, Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Banner2 from "../Components/Banner2";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Banner></Banner>
        <Banner2></Banner2>
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
