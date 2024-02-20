import React from "react";
import { CircularNews } from "../../News/NewsCard/CircularNews/CircularNews";
import ProgressBar from "@ramonak/react-progress-bar";
import { toJalali } from "../../../core/functions/Utils";

const Herosection = ({ details }) => {

  return (
    <div className="flex justify-between p-32 max-md:flex-col-reverse max-md:gap-8 max-md:p-8">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-4xl font-black">{details.title}</h1>
        <span className="flex gap-1 text-gray-500">
          <h4 className="font-black"> مدرس</h4> : <h4>{details.teacherName}</h4>{" "}
        </span>
        <span className="flex gap-1">
          <h3>  وضعیت دوره </h3> :{" "}
          <h3 className="text-gray-500"> {details.courseStatusName}</h3>{" "}
        </span>
        <div className="h-0.5 bg-gray-300" />
        <span className="flex gap-1">
          <h3>سطح  </h3> : <h3 className="text-gray-500">{details.courseLevelName}</h3>
        </span>
        <span className="flex gap-1">
          <h3>تاریخ شروع دوره</h3> : <h3 className="text-gray-500">{toJalali(details.startTime)}</h3>{" "}
        </span>
        <span className="flex gap-1">
          <h3>تاریخ پایان دوره</h3> :{" "}
          <h3 className="text-gray-500"> {toJalali(details.endTime)}</h3>{" "}
        </span>
        <div className="h-0.5 bg-gray-300" />
        <span className="flex gap-1">
          <h3>ظرفیت باقی مانده</h3> :{details.capacity-details.currentRegistrants} نفر{" "}
        </span>
        <ProgressBar completed={details.currentRegistrants/details.capacity*100} bgColor="#FEDE31" />
        <div className="h-0.5 bg-gray-300" />
        <span>تکنولوژی ها : </span>
        {details.techs}
        <h3></h3>
      </div>
      <div className="flex ">
        <CircularNews
          style="w-96 h-96 max-md:w-32 max-md:h-32"
          img={details.imageAddress}
        />
      </div>
    </div>
  );
};

export default Herosection;
