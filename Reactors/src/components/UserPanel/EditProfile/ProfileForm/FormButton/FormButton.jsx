import React from "react";

export const FormButton = ({ title, bg, icon, isDisable, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      type={type}
      className={`${bg} px-14 py-4 rounded-xl text-base sm:text-xl text-white flex justify-between items-center gap-3 shadow-shadow1 disabled:opacity-30 disabled:bg-slate-600`}
    >
      {icon}
      {title}
    </button>
  );
};
