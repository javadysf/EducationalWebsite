import React from "react";

const Progressbar = ({ title, width }) => {
  return (
    <div className="bg-white rounded-lg border shadow block p-2 flex flex-col gap-2 ">
      <h3 className="text-xs">{title}</h3>
      <div className="w-full h-8 bg-gray-300 rounded-full border-4 inner-shadow box-shadow-s">
        <div
          style={{
            "background-image":
              "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
          }}
          className={`inner ${width} h-full text-center text-xs text-white bg-amber-500 rounded-full ltr-linear-infinite`}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
