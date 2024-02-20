import React from "react";

const BannerSearch = ({ placeholder }) => {
  return (
    <div
      className="bg-amber-400 bg-opacity-70 backdrop-blur-md w-4/5 sm:w-2/3 h-10 md:h-14 lg:w-1/2 2xl:w-1/3 lg:h-20 rounded-full overflow-hidden"
      style={{ direction: "rtl" }}
    >
      <input
        type="text"
        className="w-full h-full bg-transparent text-sm text-white placeholder:text-xs placeholder:drop-shadow-md md:placeholder:text-base md:text-lg lg:placeholder:text-2xl lg:text-3xl placeholder:text-white pr-5 pl-10 lg:pr-10 lg:pl-24 outline-none"
        placeholder={placeholder}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        className="absolute cursor-pointer left-3.5 top-2.5 w-5 h-5 md:left-4.5 md:top-3.5 md:w-7 md:h-7 lg:left-6 lg:top-[1.5rem] lg:w-9 lg:h-9"
        viewBox="0 0 16 16"
      >
        {" "}
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          fill="#ffffff"
        ></path>{" "}
      </svg>
    </div>
  );
};

export default BannerSearch;
