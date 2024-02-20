const CircularFrame = ({
  img,
  style,
  ball1,
  ball2,
  ball3,
  ball4,
  ball5,
  defaultNode,
}) => {
  return (
    <div
      className={`relative shrink-0 rounded-full border border-gray-300 w-128 h-128 flex justify-center items-center scale-105 drop-shadow-md ${style}`}
    >
      <div className="rounded-full border border-gray-300 w-[85%] h-[85%] overflow-hidden">
        {defaultNode === undefined ? (
          <img src={img} alt="frame" className="w-full h-full" />
        ) : (
          defaultNode
        )}
      </div>
      <div
        className={`absolute w-7 h-7 rounded-full bg-amber-300 ${
          ball1 === undefined ? "left-[5%] bottom-[21%]" : ball1
        }`}
      ></div>
      <div
        className={`absolute w-7 h-7 rounded-full bg-gray-300 ${
          ball2 === undefined ? "right-[10%] bottom-[14%]" : ball2
        }`}
      ></div>
      <div
        className={`absolute w-7 h-7 rounded-full bg-gray-300 ${
          ball3 === undefined ? "left-[17%] top-[8%]" : ball3
        }`}
      ></div>
      <div
        className={`absolute w-16 h-16 rounded-full border border-gray-300 ${
          ball4 === undefined ? "left-[13.5%] top-[4.5%]" : ball4
        }`}
      >
        <div
          className={`absolute w-4 h-4 rounded-full bg-gray-300 ${
            ball5 === undefined ? "left-[10%] -bottom-[4%]" : ball5
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CircularFrame;
