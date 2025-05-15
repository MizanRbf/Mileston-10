import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[url(/images/more/15.jpg)] py-3 gap-2">
        <img
          className="h-[60px] w-[45px]"
          src="/images/more/logo1.png"
          alt=""
        />
        <h1 className="text-[30px] text-white">Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default Header;
