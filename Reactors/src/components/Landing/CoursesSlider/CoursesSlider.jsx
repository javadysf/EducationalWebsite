import { useState, useEffect } from "react";

import Button2 from "../../common/Button2/Button2";
import TopHeader from "./../../common/TopHeader/TopHeader";
import { Link } from "react-router-dom";
import { getCoursesTop } from "./../../../core/sevices/api/getCoursesTop";
import { removeDecimal } from "../../../core/functions/functions";

export const CoursesSlider = ({ header }) => {
  const [currPage, setCurrPage] = useState(0);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "دوره جامع آموزش جاوااسکریپت",
      tutor: "محمد رضوی",
      capacity: 30,
      price: "200هزار تومان",
    },
    {
      id: 2,
      title: "دوره جامع آموزش ریکت",
      tutor: "محمد رضوی",
      capacity: 30,
      price: "200هزار تومان",
    },
    {
      id: 3,
      title: "دوره جامع آموزش سی شارپ",
      tutor: "محمد رضوی",
      capacity: 30,
      price: "200هزار تومان",
    },
    {
      id: 4,
      title: "دوره جامع آموزش انگولار",
      tutor: "محمد رضوی",
      capacity: 30,
      price: "200هزار تومان",
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getCoursesTop(5);
        setCourses(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  const slides = courses.map(
    ({ courseId, title, teacherName, cost, levelName, statusName }) => {
      return (
        <div
          key={courseId}
          className="relative shrink-0 w-full h-full flex items-center justify-center scale-90 md:scale-110 md:mt-5 lg:scale-150"
        >
          <div className="relative w-72 h-72 rounded-full flex justify-center items-center shadow-2xl bg-neutral-900 animate-puffIn">
            <div className="flex flex-col justify-around w-[71%] h-[71%] text-white">
              <p className="w-full text-xl text-center text-amber-300">
                {title}
              </p>
              <p className="w-full text-center text-sm">مدرس :{teacherName}</p>
              <p className="w-full text-center text-sm"> سطح : {levelName}</p>
              <p className="w-full text-center text-sm">وضعیت : {statusName}</p>
              <div className="flex justify-center mt-5">
                <Link to={`/coursedetails/${courseId}`}>
                  <button className="text-amber-300 text-sm rounded-full px-4 py-2 lg:bg-amber-400 lg:text-black">
                    جزییات بیشتر
                  </button>
                </Link>
              </div>
            </div>
            <div className="absolute rounded-full w-[60%] h-[60%] -left-28 top-24 bg-amber-400 overflow-hidden flex flex-col justify-center items-center">
              <p className="text-xl drop-shadow-lg">{removeDecimal(cost)}</p>
              <p className="text-4xl drop-shadow-lg">تومان</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const goNext = () => {
    const isLastPage = currPage === slides.length - 1;
    isLastPage ? setCurrPage(0) : setCurrPage(currPage + 1);
  };

  const goPrev = () => {
    const isFirstPage = currPage === 0;
    isFirstPage ? setCurrPage(slides.length - 1) : setCurrPage(currPage - 1);
  };
  return (
    <div
      id="slider"
      className="w-full h-112 lg:h-150 bg-gray-100 flex flex-wrap content-start overflow-hidden opacity-0
    "
    >
      <TopHeader header={header} bg={"bg-gray-100"} />
      <div className="relative w-full h-[60%] mt-8 flex justify-center transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="#fff"
          stroke="#fff"
          viewBox="0 0 32 32"
          className="absolute left-6 top-18 w-12 h-28 cursor-pointer opacity-70 z-10 lg:hidden"
          onClick={goNext}
        >
          <g>
            <g fill="none" fillRule="evenodd" strokeWidth="1.088">
              <g fill="#000" transform="translate(-256 -1087)">
                <path d="M279 1102h-10.586l4.122-4.12c.39-.39.39-1.02 0-1.42a1.002 1.002 0 00-1.415 0l-5.657 5.66a.986.986 0 00-.259.88c-.055.31.02.64.259.88l5.657 5.66a1.002 1.002 0 101.415-1.42l-4.122-4.12H279c.552 0 1-.45 1-1s-.448-1-1-1h0zm-7 15c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14h0zm0-30c-8.836 0-16 7.16-16 16s7.164 16 16 16 16-7.16 16-16-7.164-16-16-16h0z"></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          onClick={goPrev}
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="#fff"
          stroke="#fff"
          viewBox="0 0 32 32"
          className="absolute right-6 top-18 w-12 h-28 cursor-pointer opacity-70 z-10 rotate-180 lg:hidden"
        >
          <g>
            <g fill="none" fillRule="evenodd" strokeWidth="1.088">
              <g fill="#000" transform="translate(-256 -1087)">
                <path d="M279 1102h-10.586l4.122-4.12c.39-.39.39-1.02 0-1.42a1.002 1.002 0 00-1.415 0l-5.657 5.66a.986.986 0 00-.259.88c-.055.31.02.64.259.88l5.657 5.66a1.002 1.002 0 101.415-1.42l-4.122-4.12H279c.552 0 1-.45 1-1s-.448-1-1-1h0zm-7 15c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14h0zm0-30c-8.836 0-16 7.16-16 16s7.164 16 16 16 16-7.16 16-16-7.164-16-16-16h0z"></path>
              </g>
            </g>
          </g>
        </svg>
        {slides[currPage]}
      </div>
      <div className="hidden lg:flex lg:justify-center lg:gap-5 w-full mb-8">
        <div
          onClick={goNext}
          className="w-12 h-12 rounded-full cursor-pointer bg-neutral-900 flex justify-center items-center drop-shadow-2xl"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-full h-full scale-50 rotate-180"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title />{" "}
              <g id="Complete">
                {" "}
                <g id="arrow-left">
                  {" "}
                  <g>
                    {" "}
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="7.6 7 2.5 12 7.6 17"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />{" "}
                    <line
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="21.5"
                      x2="4.8"
                      y1="12"
                      y2="12"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div
          onClick={goPrev}
          className="w-12 h-12 rounded-full cursor-pointer bg-neutral-900 flex justify-center items-center drop-shadow-2xl"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-full h-full scale-50"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title />{" "}
              <g id="Complete">
                {" "}
                <g id="arrow-left">
                  {" "}
                  <g>
                    {" "}
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="7.6 7 2.5 12 7.6 17"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />{" "}
                    <line
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="21.5"
                      x2="4.8"
                      y1="12"
                      y2="12"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className="w-full flex justify-center lg:border-b-2 border-gray-200 lg:h-10 md:mt-6">
        <div className="px-8 bg-gray-100 lg:relative lg:top-3">
          <Link to={"/courses"}>
            <Button2
              title={"مشاهده همه دوره ها"}
              customStyle={"mt-3 lg:mt-0"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
