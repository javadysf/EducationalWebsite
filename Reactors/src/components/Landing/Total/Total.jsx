import { useEffect } from "react";
import TotalBlock from "./TotalBlock/TotalBlock";

import MasterSvg from "./../../../assets/img/Total/chalkboard-teacher-fill-custom.svg";
import StudentSvg from "./../../../assets/img/Total/student-fill-custom.svg";
import CourseSvg from "./../../../assets/img/Total/book-custom.svg";
import CircularFrame from "./../../common/CircularFrame/CircularFrame";
import FrameImg from "../../../assets/img/Total/annie-spratt-QckxruozjRg-unsplash (1).png";
import { getLandingReport } from "./../../../core/sevices/api/getLandingReport";
import { useState } from "react";

export const Total = ({ mainTitle, des, callToAction }) => {
  const [blocks, setBlocks] = useState([
    { id: 0, title: "استاد", count: 53, img: MasterSvg, alt: "master" },
    { id: 1, title: "دانشجو", count: 2950, img: StudentSvg, alt: "student" },
    { id: 2, title: "دوره", count: 231, img: CourseSvg, alt: "course" },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getLandingReport();
        setBlocks([
          {
            id: 0,
            title: "استاد",
            count: res.teacherCount,
            img: MasterSvg,
            alt: "master",
          },
          {
            id: 1,
            title: "دانشجو",
            count: res.studentCount,
            img: StudentSvg,
            alt: "student",
          },
          {
            id: 2,
            title: "دوره",
            count: res.courseCount,
            img: CourseSvg,
            alt: "course",
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  return (
    <div id="total" className="opacity-0">
      {/* Mobile */}
      <div className="lg:hidden w-full h-64 bg-white flex items-center">
        <div className="w-full h-44 flex">
          {blocks.map(({ id, title, count, img, alt }) => {
            return (
              <TotalBlock
                key={id}
                title={title}
                count={count}
                img={img}
                alt={alt}
              />
            );
          })}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex h-138 w-full pt-16 bg-white flex-row justify-around">
        <div className="w-1/3 h-full flex flex-wrap content-start">
          <h2 className="text-center text-5xl h-1/6 w-full drop-shadow-lg mb-14">
            {mainTitle}
          </h2>
          {blocks.map(({ id, title, count, img, alt }) => {
            return (
              <TotalBlock
                key={id}
                title={title}
                count={count}
                img={img}
                alt={alt}
              />
            );
          })}
          <p className="text-xl text-gray-700 mx-auto my-10 w-[85%] text-center">
            {des}
          </p>
          {callToAction}
        </div>
        <CircularFrame img={FrameImg} />
      </div>
    </div>
  );
};
