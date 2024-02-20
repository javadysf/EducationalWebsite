import React, { useEffect, useState } from "react";

import BannerImg from "../../../assets/img/banner/banner2.png";
import BannerSearch from "./BannerSearch";
import Typewriter from "typewriter-effect";

const Banner = ({ header, searchPlaceHolder }) => {
  return (
    <div
      id="banner"
      className="relative w-full h-96 md:h-132 lg:h-138 bg-black overflow-hidden"
    >
      <img
        src={BannerImg}
        alt="banner img"
        className="relative w-full scale-[4] sm:scale-[2] xl:scale-100"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black from-15% to-transparent flex justify-center content-center gap-12 2xl:gap-20 flex-wrap">
        <h3
          id="bannerHeader"
          className="text-white drop-shadow-md text-center text-base lg:text-3xl w-5/6 lg:w-2/3 md:text-xl md:w-4/5 2xl:text-4xl"
        >
          <Typewriter
            onInit={(tw) => {
              tw.typeString(header).start();
            }}
            options={{ delay: "80" }}
          />
        </h3>
        <BannerSearch placeholder={searchPlaceHolder} />
      </div>
    </div>
  );
};

export default Banner;
