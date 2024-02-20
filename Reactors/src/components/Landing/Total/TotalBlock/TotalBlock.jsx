import React from "react";

const TotalBlock = ({ title, count, img, alt }) => {
  return (
    <div className="w-1/3 h-full lg:h-1/6 flex justify-center flex-wrap">
      <img src={img} alt={alt} className="w-16 h-16 lg:hidden" />
      <p className="text-2xl drop-shadow-md lg:text-amber-400 lg:text-2xl h-1/4 w-full text-center font-semibold">
        {count}
      </p>
      <h3 className="text-center text-2xl text-gray-700 h-1/3 w-full">
        {title}
      </h3>
    </div>
  );
};

export default TotalBlock;
