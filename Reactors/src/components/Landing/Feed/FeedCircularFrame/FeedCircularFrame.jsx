import { Link } from "react-router-dom";

const FeedCircularFrame = ({ img, defaultNode, hoverNode }) => {
  return (
    <div
      className={
        "absolute lg:relative w-48 h-48 lg:w-96 lg:h-96 rounded-full border border-gray -right-16 sm:-right-12 -top-12 lg:-top-10 flex justify-center items-center scale-75 sm:scale-125 lg:scale-100 drop-shadow group"
      }
    >
      <div className="absolute left-[21px] top-[21px] lg:top-[86px] w-3 h-3 rounded-full bg-amber-400"></div>
      <div className="rounded-full w-[90%] h-[90%] border border-gray flex justify-center items-center">
        <div className="absolute left-[49px] bottom-[14px] lg:bottom-[81px] w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="relative rounded-full w-[90%] h-[90%] border border-gray overflow-hidden">
          {hoverNode !== undefined ? (
            <div className="absolute transition-all duration-200 left-0 right-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md">
              {hoverNode}
            </div>
          ) : null}
          {defaultNode === undefined ? (
            <img src={img} alt="feed" className="w-full h-full" />
          ) : (
            defaultNode
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedCircularFrame;
