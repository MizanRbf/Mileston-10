import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Error = () => {
  return (
    <div>
      <Header></Header>
      <main className="min-h-[calc(100vh-568px)] flex justify-center items-center">
        <img className="w-120" src="/images/404/404.gif" alt="" />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Error;
