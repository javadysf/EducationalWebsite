import React from "react";
import { CircularNews } from "../../../News/NewsCard/CircularNews/CircularNews";
import Button2 from "../../../common/Button2/Button2";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn";

export const CardItem = ({ thumbnail, title, price, tutor, id }) => {
  return (
    <div
      key={id}
      className="relative w-[75%] h-fit shadow-shadow1 flex flex-col lg:flex-row rounded-2xl "
    >
      <div className="w-full flex justify-center lg:w-[25%] lg:block">
        <CircularNews
          img={thumbnail}
          style={
            "!-top-16 !relative !lg:absolute lg:!top-0 lg:!left-28 lg:!scale-150"
          }
        />
      </div>
      <div className="grow-[1] py-4 px-5">
        <h1 className="text-3xl drop-shadow-md">{title}</h1>
        <p className="text-lg my-4 text-neutral-600">
          قیمت:
          <span className="text-xl font-semibold px-2 ">{price}</span>
        </p>
        <p className="text-lg my-4 text-neutral-600">
          مدرس:
          <span className="text-xl font-semibold px-2 ">{tutor}</span>
        </p>
        <Button2
          title={"جزییات محصول"}
          customStyle={"!text-sm !px-4 !py-2 !mt-3 !bg-amber-300"}
        />
      </div>
      <DeleteBtn idToDelete={id} title={title} />
    </div>
  );
};
