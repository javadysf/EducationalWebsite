import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../../../assets/img/userpanel/home.png";

export const GoToHomeBtn = () => {
  return (
    <Link
      to="/"
      className="w-32 h-12 bg-gray-700 rounded-full flex text-xs items-center justify-center text-amber-300 gap-2  shadow-md"
    >
      بازگشت به <img className=" w-6 h-6" src={homeicon} />
    </Link>
  );
};
