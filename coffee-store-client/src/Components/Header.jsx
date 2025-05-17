import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[url(/images/more/15.jpg)] py-3 px-4">
      <div className="flex items-center gap-2">
        <img
          className="h-[60px] w-[45px]"
          src="/images/more/logo1.png"
          alt=""
        />
        <h1 className="text-[30px] text-white">Espresso Emporium</h1>
      </div>
      <div className="text-white space-x-4">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
