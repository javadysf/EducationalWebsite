import React from "react";

export const CircularNews = ({ img, style, defaultNode }) => {
  return (
    <div>
      <div
        className={`relative rounded-full w-52 h-52 border border-gray-300 scale-125 flex justify-center items-center ${style}`}
      >
        <div className="absolute top-[5%] right-[20%] w-3 h-3 bg-amber-400 rounded-full"></div>
        <div className="rounded-full border w-[90%] h-[90%] border-gray-300 flex justify-center items-center">
          <div className="absolute bottom-[5%] left-[20%] w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="rounded-full border w-[90%] h-[90%] border-gray-300 overflow-hidden">
            {defaultNode === undefined ? (
              <img src={img} alt="picture" className="w-full h-full" />
            ) : (
              defaultNode
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
