import { Field } from "formik";

import SearchIcon from "./../../../assets/img/searchBox/search.png";

export const NewsSearch = ({ name, placeholder, onChange, value }) => {
  return (
    <div className="relative min-w-[70%] sm:min-w-[25%] max-md:w-36 h-12 bg-gray-100 border border-amber-400 rounded-3xl px-5">
      <Field
        name={name}
        as="input"
        className="w-full h-full outline-none bg-transparent pl-7 "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <img
        src={SearchIcon}
        alt="search icon"
        className="absolute left-3 top-[12px] w-6 h-6 opacity-50"
      />
    </div>
  );
};
