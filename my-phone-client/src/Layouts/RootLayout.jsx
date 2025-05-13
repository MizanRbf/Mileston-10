import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const RootLayout = () => {
  return (
    <>
      <div>
        <header className="max-w-[1200px] mx-auto px-10">
          <Header></Header>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
