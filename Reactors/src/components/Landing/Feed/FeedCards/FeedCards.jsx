import FeedCircularFrame from "../FeedCircularFrame/FeedCircularFrame";
import { Link } from "react-router-dom";
import { dateConverterFull } from "../../../../core/functions/functions";
import { SvgDate } from "./../../../News/Svg/SvgDate";
import { shortenText } from "./../../../../core/utils/shortenText";
import { DefImgNews } from "./../../../News/Svg/DefImgNews";

export const FeedCards = ({ feedList }) => {
  const limit = 5;
  const badEntry = [null, undefined, ""];
  return (
    <div className="w-full h-fit flex justify-center flex-shrink-0 pt-20 lg:pb-20 lg:pt-32">
      <div className="w-full flex justify-center flex-shrink-0 flex-wrap gap-24">
        {feedList
          ? feedList["news"].map(
              (
                {
                  id,
                  title,
                  updateDate,
                  miniDescribe,
                  currentImageAddressTumb,
                  newsCatregoryName,
                  newsCatregoryId,
                },
                index
              ) => {
                if (index >= limit) {
                  return null;
                }
                return (
                  <div
                    key={id}
                    className="feedCards relative w-3/4 lg:w-[65%] h-fit lg:h-96 rounded-4xl bg-stone-100 drop-shadow-lg py-4 lg:mb-28 lg:bg-white lg:drop-shadow-none flex justify-center opacity-0"
                  >
                    <div
                      style={index % 2 === 0 ? { order: "2" } : { order: "1" }}
                      className="lg:ml-14"
                    >
                      <div className="w-full text-left py-5 px-4 lg:px-0 text-gray-500 flex items-center gap-3 justify-end lg:justify-start mr-0 ">
                        <Link to={`/news/${newsCatregoryId}`}>
                          <div className="hidden lg:block rounded-full text-xs border border-black text-black px-4 py-2 opacity-60">
                            {newsCatregoryName}
                          </div>
                        </Link>

                        <div className="flex justify-center items-center gap-1">
                          <SvgDate className="w-5 h-5 opacity-60" />
                          <span>{dateConverterFull(updateDate)}</span>
                        </div>
                      </div>
                      <div className="flex justify-end w-full">
                        <h3 className="w-[53%] sm:w-[70%] h-[125px] lg:h-[90px] lg:w-full px-3 lg:px-0 text-xl lg:text-2xl text-black d font-semibold text-right drop-shadow-md">
                          {title}
                        </h3>
                      </div>
                      <p className="w-[80%] mx-auto lg:mx-0 text-center lg:text-right text-gray-700 lg:max-h-20 overflow-hidden ">
                        {shortenText(miniDescribe, 100, "fa")}
                      </p>
                      <div className="flex justify-center lg:justify-start mt-6 sm:mt-9">
                        <Link to={`/news/detail/${id}`}>
                          <button className="text-lg text-amber-400 lg:rounded-full lg:bg-amber-400 lg:text-black px-6 py-2 lg:relative lg:shadow-shadow1">
                            جزییات بیشتر
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:w-1/2 h-full flex justify-center items-center order-1">
                      {badEntry.includes(currentImageAddressTumb) ? (
                        <FeedCircularFrame
                          defaultNode={
                            <DefImgNews className="w-18 h-18 lg:w-24 lg:h-24 " />
                          }
                        />
                      ) : (
                        <FeedCircularFrame img={currentImageAddressTumb} />
                      )}
                    </div>
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
};
