import React, { useState, useEffect } from "react";
import SearchAndFilter from "./SearchAndFilter";
import trashicon from "../../../assets/img/userpanel/trash.png";
import UserCourses from "../UserCourses";
import data from "../../../core/sevices/storage/storage";

const index = () => {
  const [item, setitem] = useState(data.data);

  const searchedvalue = (searched) => {
    const result = data.data.filter((item) => item.name.includes(searched));
    setitem(result);
  };

  return (
    <div className="flex flex-col gap-8 p-12 max-md:p-4">
      <h1 className="text-2xl font-black max-md:text-xs"> دوره های من</h1>
      <div className="h-0.5 bg-amber-300" />
      <SearchAndFilter changes={searchedvalue} />
      <h3>
        تعداد دوره های شما : <span className="text-amber-300">3 از 45</span>
      </h3>
      <UserCourses data={item} actionIcon={trashicon} />
    </div>
  );
};

export default index;
