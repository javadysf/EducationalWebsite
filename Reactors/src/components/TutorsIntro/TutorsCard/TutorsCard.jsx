import { Link } from "react-router-dom";
import FeedCircularFrame from "../../Landing/Feed/FeedCircularFrame/FeedCircularFrame";
import { shortenText } from "./../../../core/utils/shortenText";
import { SvgLinkdin } from "../Svg/SvgLinkdin";
import { SvgCourse } from "./../Svg/SvgCourse";
import { SvgNews } from "../Svg/SvgNews";
import { SvgDefProfile } from "../Svg/SvgDefProfile";
import SvgArrowLeft from "./../Svg/SvgArrowLeft";

const badEntry = [undefined, null, ""];

export const TutorsCard = ({
  id,
  tutor,
  linkedin,
  img,
  index,
  courseCount,
  newsCount,
}) => {
  return (
    <>
      <div
        key={id}
        className="relative w-[90%] sm:w-[75%] lg:w-[65%] h-fit rounded-4xl bg-stone-100 drop-shadow-lg lg:mb-28 lg:bg-transparent flex justify-center"
      >
        <div
          style={index % 2 === 0 ? { order: "2" } : { order: "1" }}
          className="lg:ml-14 w-[75%]"
        >
          <div className="w-full flex justify-center sm:justify-end md:justify-center lg:justify-start mt-20 sm:mt-0 pt-6 sm:pt-4 "></div>
          <div className="flex justify-center sm:justify-end md:justify-center lg:justify-start w-full">
            <h3 className="h-fit py-5 lg:h-[90px] lg:w-full text-xl  lg:text-2xl text-black font-semibold text-center lg:text-right ">
              {badEntry.includes(tutor) ? "<Untitled>" : tutor}
            </h3>
          </div>
          <div className="w-full flex justify-center gap-5 break-words text-xs lg:justify-start lg:flex-col lg:gap-0 md:text-base text-gray-500 text-center lg:text-right overflow-hidden">
            <div className="flex gap-1 items-center">
              <SvgNews className="mx-[3px]" width="24px" height="24px" />
              <span className="hidden lg:block">اخبار:</span>
              {newsCount}
            </div>
            <div className="flex gap-1 items-center">
              <SvgCourse className="w-7 h-7" />
              <span className="hidden lg:block">دوره ها:</span>
              {courseCount}
            </div>
            <div className="lg:hidden flex gap-1 justify-center items-center">
              <Link to={`tutorsdetail/${id}`}>جزییات بیشتر</Link>
              <SvgArrowLeft className="w-3 h-3 opacity-90" />
            </div>
          </div>
          <div className="w-full justify-center items-center gap-3 lg:justify-start text-center py-3 md:py-5 text-neutral-500 flex mt-4 mr-0">
            <SvgLinkdin className="w-5 h-5" />
            <a
              href={linkedin}
              className="w-fit sm:w-auto text-xs md:text-sm shrink break-words hover:border-b-[1px] hover:border-neutral-400"
            >
              {linkedin !== null
                ? shortenText(linkedin, 25, "en")
                : "<No Link>"}
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 h-full flex justify-center items-center order-1">
          {badEntry.includes(img) ? (
            <FeedCircularFrame
              hoverNode={
                <Link className="text-xl text-white" to={`tutorsdetail/${id}`}>
                  جزییات بیشتر
                </Link>
              }
              defaultNode={<SvgDefProfile width="64px" height="64px" />}
            />
          ) : (
            <FeedCircularFrame
              img={img}
              hoverNode={
                <Link
                  className="hidden lg:block text-xl text-white"
                  to={`tutorsdetail/${id}`}
                >
                  جزییات بیشتر
                </Link>
              }
            />
          )}
        </div>
      </div>
    </>
  );
};
