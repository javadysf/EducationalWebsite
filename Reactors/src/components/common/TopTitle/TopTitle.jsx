import React from "react";

export const TopTitle = ({ title }) => {
  return (
    <h1 className="w-full text-gray-900 text-3xl drop-shadow border-0 text-center lg:drop-shadow-none lg:text-right  lg:border-b-[3px] border-amber-300 pb-7 mt-6 lg:mt-12">
      {title}
    </h1>
  );
};
