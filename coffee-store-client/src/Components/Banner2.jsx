import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-base-300">
      <div className="flex justify-around py-10 gap-30 max-w-[1200px] mx-auto px-10">
        <div>
          <img src="/images/icons/1.png" alt="" />
          <h1 className="text-xl font-bold my-2">Awesome Aroma</h1>
          <p className="text-sm">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="/images/icons/2.png" alt="" />
          <h1 className="text-xl font-bold my-2">High Quality</h1>
          <p className="text-sm">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src="/images/icons/3.png" alt="" />
          <h1 className="text-xl font-bold my-2">Pure Grades</h1>
          <p className="text-sm">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src="/images/icons/4.png" alt="" />
          <h1 className="text-xl font-bold my-2">Proper Roasting</h1>
          <p className="text-sm">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
