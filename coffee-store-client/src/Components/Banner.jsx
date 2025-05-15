import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/images/more/3.png)] text-white  bg-cover bg-center flex items-center justify-end pr-30">
      <div className="max-w-[50%] space-y-4 py-30">
        <h1 className="text-4xl">Would you like a Cup of Delicious Coffee?</h1>
        <p>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="rounded-xs bg-primary py-2 px-4">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
