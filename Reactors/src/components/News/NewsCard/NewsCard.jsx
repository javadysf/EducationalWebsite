import { CircularNews } from "./CircularNews/CircularNews";
import { Link } from "react-router-dom";
import { SvgDate } from "./../Svg/SvgDate";
import SvgView from "./../Svg/SvgView";
import SvgLike from "./../Svg/SvgLike";
import { shortenText } from "./../../../core/utils/shortenText";
import { DefImgNews } from "../Svg/DefImgNews";

export const NewsCard = ({ id, title, des, date, img, views, likes, rate }) => {
  return (
    <div className="border border-transparent bg-stone-100 shadow-md rounded-3xl xl:h-128 lg:mx-[1.5%] lg:w-[30%] lg:h-112  md:mx-[2.5%] md:w-[45%] w-full h-118 mt-48">
      <div className="border border-transparent w-full h-[35%] flex flex-shrink-0 flex-wrap justify-center">
        {img !== null ? (
          <CircularNews style="-top-24" img={img} />
        ) : (
          <CircularNews
            style="-top-24"
            defaultNode={<DefImgNews width={"64px"} height={"64px"} />}
          />
        )}
      </div>
      <div className="w-full h-[64%] relative">
        <div className="w-[90%] mx-auto text-lg text-gray-600 flex justify-center items-center">
          <span className="order-2 mx-2">{date}</span>
          <SvgDate className="w-5 h-5 opacity-70 " />
        </div>
        <h2 className="w-[90%] mx-auto text-xl text-center pt-8">
          <Link
            className="border-black hover:border-b-[1px] pb-1"
            to={`detail/${id}`}
          >
            {title}
          </Link>
        </h2>
        <p className=" w-[80%] mx-auto text-lg text-center pt-8 text-gray-700">
          {shortenText(des, 100, "fa")}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-14 border border-transparent flex justify-around items-center">
          <div className="flex gap-1 items-center">
            <span className="text-gray-700">{views}</span>
            <SvgView width="25px" height="25px" className="opacity-75" />
          </div>
          <div className="relative w-[100px] h-6 bg-starDisable bg-repeat-x bg-[length:20px_20px]">
            <div
              className="absolute left-0 top-0 h-full bg-star bg-repeat-x bg-[length:20px_20px]"
              style={{ width: `${rate * 20}px` }}
            ></div>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-gray-700">{likes}</span>
            <SvgLike width="25px" height="25px" className="opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
};
