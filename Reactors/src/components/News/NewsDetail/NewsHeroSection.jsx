import { SvgLinkdin } from "../../TutorsIntro/Svg/SvgLinkdin";
import { SvgNews } from "../../TutorsIntro/Svg/SvgNews";
import CircularFrame from "../../common/CircularFrame/CircularFrame";
import { SvgCourse } from "./../../TutorsIntro/Svg/SvgCourse";

const badEntry = [null, undefined, ""];

export const NewsHeroSection = ({
  title,
  summery,
  img,
  category,
  linkdin,
  newsCount,
  courseCounts,
  defaultImgNode,
}) => {
  return (
    <div className="w-[90%] lg:w-[80%] mt-2 block lg:flex lg:flex-nowrap shrink-0 mx-auto lg:mt-24">
      <div className="w-full order-2 lg:w-[50%] text-2xl lg:text-3xl mt-16 lg:mt-11 lg:pt-18 lg:order-none">
        {linkdin === undefined ? (
          <div className="flex w-full justify-center lg:justify-start">
            <span className="rounded-full text-sm border border-gray-300 text-gray-600 px-4 py-2">
              {category}
            </span>
          </div>
        ) : null}

        <h2 className="text-center mt-8 lg:text-right drop-shadow-md">
          {title}
        </h2>
        {linkdin === undefined ? (
          <p className="hidden lg:block text-xl text-gray-700 mt-10 w-[90%] drop-shadow-md">
            {summery}
          </p>
        ) : (
          <>
            <div className="flex mx-auto lg:mx-0 justify-center lg:justify-start gap-2 mt-10 w-[90%] drop-shadow-md">
              <SvgLinkdin className="w-5 h-5 lg:w-7 lg:h-7" />
              <span className="text-base lg:text-xl text-gray-700 hover:border-b-[1px] border-gray-500 cursor-pointer">
                {linkdin}
              </span>
            </div>
            <div className="flex mx-auto lg:mx-0 justify-center lg:justify-start gap-4 mt-10 w-[90%] drop-shadow-md">
              <div className="flex justify-center gap-1 items-center text-base rounded-full px-5 py-2 bg-white shadow-shadow1">
                <SvgNews className="w-7 h-7" />
                {newsCount}
              </div>
              <div className="flex justify-center gap-1 items-center text-base rounded-full px-5 py-2 bg-white shadow-shadow1">
                <SvgCourse className="w-7 h-7" />
                {courseCounts}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-full flex justify-center mt-18 lg:hidden">
        {badEntry.includes(img) ? (
          <CircularFrame
            style={"w-64 h-64"}
            ball1={"bottom-[21%] left-[0%]"}
            ball2={"bottom-[8%] right-[10%]"}
            ball3={"top-[3%] left-[17%]"}
            ball4={"-top-[4%] left-[10%]"}
            defaultNode={defaultImgNode}
          />
        ) : (
          <CircularFrame
            img={img}
            style={"w-64 h-64"}
            ball1={"bottom-[21%] left-[0%]"}
            ball2={"bottom-[8%] right-[10%]"}
            ball3={"top-[3%] left-[17%]"}
            ball4={"-top-[4%] left-[10%]"}
          />
        )}
      </div>
      <div className="hidden lg:flex justify-center">
        {badEntry.includes(img) ? (
          <CircularFrame defaultNode={defaultImgNode} style={"w-128 h-128"} />
        ) : (
          <CircularFrame img={img} style={"w-128 h-128"} />
        )}
      </div>
    </div>
  );
};
