import React from "react";
import { ImageCircular } from "./ImageCircular/ImageCircular";

export const ProfileImage = ({ img }) => {
  return (
    <div className="w-full h-[45%] flex justify-center items-center">
      <ImageCircular img={img} />
    </div>
  );
};
