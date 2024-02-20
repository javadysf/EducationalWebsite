import React,{useState} from "react";
import SearchAndFilter from "../MyCourses/SearchAndFilter";
import UserCourses from "../UserCourses";
import basketicon from "../../../assets/img/coursedetail/basketicon.png";
import data from "../../../core/sevices/storage/storage"

const index = () => {
  const [item, setitem] = useState(data.data);

  const searchedvalue = (searched) => {
    const result = data.data.filter((item) => item.name.includes(searched));
    setitem(result);
  };
  return (
    <div className="flex flex-col gap-8 p-12 max-md:p-px">
      <h1 className="text-2xl font-black"> لیست دوره ها</h1>
      <div className="h-0.5 bg-amber-300" />
      <SearchAndFilter changes={searchedvalue} />
      <h3>تعداد کل دوره ها : <span className="text-amber-300">{data.data.length}</span></h3>
      <UserCourses data={item} actionIcon={basketicon} />
    </div>
  );
};

export default index;
