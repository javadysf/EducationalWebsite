import React from "react";
import { useSelector } from "react-redux";

export const TotalPrice = ({ totalPrice }) => {
  return (
    <div>
      <h3 className="pt-4 text-xl sm:text-2xl">قیمت کل:</h3>
      <p className="text-xl sm:text-3xl py-4 font-semibold">
        {" "}
        {totalPrice} تومان
      </p>
    </div>
  );
};
