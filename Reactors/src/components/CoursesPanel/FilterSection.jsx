import React from "react";
import { useState, useEffect } from "react";
import { getCourseLevel, getCourseType } from "../../core/sevices/api/courses";

const FilterSection = ({ setfilterlevel , setFilterType }) => {
  const [courseLevel, setCourseLevel] = useState([]);
  const [courseType, setCourseType] = useState([]);

  //get the course level from api
  const getCourseLevels = async () => {
    const levels = await getCourseLevel();
    setCourseLevel(levels);
  };
  // get the course type from api
  const getCourseTypes = async () => {
    const levels = await getCourseType();
    setCourseType(levels);
  };

  //put the selected level into the item(parent state)
  const setLevel = (e) => {
    (e.target.checked)?setfilterlevel(e.target.value):setfilterlevel("")
  };
  //put the selected type into the item(parent state)
  const setType = (e) => {
    (e.target.checked)?setFilterType(e.target.value):setFilterType("")
  };

  useEffect(() => {
    getCourseLevels();
    getCourseTypes();
  }, []);

  return (
    <div className=" flex flex-col gap-2 w-[160px] h-96 p-2 text-sm rounded-full bg-[#020617] text-amber-300 border-solid border-amber-300 border-4 rounded-t">
      <h1 className="font-black text-lg text-white">فیلتر دوره ها </h1>
      <h1 className="font-black text-sm">درجه دوره </h1>
      {courseLevel.map((item) => {
        return (
          <div className="flex gap-2 text-white">
            <h3 className="w-24">{item.levelName}</h3>
            <input
              onClick={setLevel}
              value={item.id}
              className="w-4"
              type="checkbox"
            />
          </div>
        );
      })}
      <h1 className="font-black text-sm">نوع دوره </h1>
      {courseType.map((item) => {
        return (
          <div className="flex gap-2 text-white">
            <h3 className="w-24">{item.typeName}</h3>
            <input
              onClick={setType}
              value={item.id}
              className="w-4"
              type="checkbox"
            />
          </div>
        );
      })}
      <h1 className="font-black text-sm">نوع تکنولوژی </h1>
      {courseType.map((item) => {
        return (
          <div className="flex gap-2 text-white">
            <h3 className="w-24">{item.typeName}</h3>
            <input className="w-4" type="checkbox" />
          </div>
        );
      })}
    </div>
  );
};

export default FilterSection;
