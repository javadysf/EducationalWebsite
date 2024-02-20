import React from "react";

const TopHeader = ({ header, bg }) => {
  return (
    <div className="w-full lg:h-20 border-b-2  border-b-amber-300 lg:border-transparent lg:mt-10 border-t-2 border-t-transparent flex justify-center">
      <h2
        className={`relative top-3 px-5 text-2xl lg:text-4xl font-semibold ${bg}`}
      >
        {header}
      </h2>
    </div>
  );
};

export default TopHeader;
