import React from "react";

const Description = ({details}) => {
  return (
    <div className="flex justify-center  p-8">
      <span className="flex flex-col flex-wrap gap-2 rounded-xl p-8  bg-gray-200  w-[80%]">
        <h1 className="text-2xl text-amber-300 font-black">توضیحات</h1>
        <p>
        {details}
        </p>
      </span>
    </div>
  );
};

export default Description;
