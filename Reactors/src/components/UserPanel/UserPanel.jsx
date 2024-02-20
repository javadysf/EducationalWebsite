import { useState, useEffect } from "react";
import { getUserInfo } from "./../../core/sevices/api/getUserInfo";
import SvgAddress from "./Svg/SvgAddress";
import SvgTelegram from "./Svg/SvgTelegram";
import { SvgLinkdin } from "./../TutorsIntro/Svg/SvgLinkdin";
import SvgEmail from "./Svg/SvgEmail";
import SvgPhone from "./Svg/SvgPhone";
import SvgNationalCode from "./Svg/SvgNationalCode";
import { Link } from "react-router-dom";
import { dateConverterFull } from "../../core/functions/functions";
import SvgBirthday from "./Svg/SvgBirthday";
import SvgGender from "./Svg/SvgGender";
import SvgArrowLeft from "./../TutorsIntro/Svg/SvgArrowLeft";
import ProgressBar from "@ramonak/react-progress-bar";
import { Loading } from "./../common/Loading/Loading";
import { toJalali } from "../../core/functions/Utils";

export const UserPanel = () => {
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await getUserInfo();
        setUserInfo(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full py-10 flex justify-center items-center">
          <div className="w-[95%] overflow-hidden flex flex-col lg:flex-row bg-white border border-gray-300 rounded-4xl shadow-shadow1">
            <div className="w-full lg:w-[25%] flex justify-center items-center border-l-[1px] border-gray-300">
              <div className="w-[80%] py-10 flex flex-col gap-5">
                <div className="w-full flex justify-center">
                  <div className="w-40 h-40 rounded-full shadow-shadow1  overflow-hidden">
                    <img
                      className="w-full h-full"
                      src={userInfo.currentPictureAddress}
                      alt="User Pic"
                    />
                  </div>
                </div>
                <h2 className="text-center text-2xl font-bold drop-shadow-md">
                  {userInfo.fName + " " + userInfo.lName}
                </h2>
                <p className=" text-center opacity-75">{userInfo.userAbout}</p>
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="py-4 text-gray-600">درصد تکمیل پروفایل:</p>
                  <ProgressBar
                    className="w-[70%] sm:w-[40%] lg:w-[80%]"
                    barContainerClassName="shadow-shadow1 rounded-full"
                    baseBgColor="rgb(156, 163, 175)"
                    bgColor="rgb(251, 191, 36)"
                    labelSize="12px"
                    animateOnRender={true}
                    completed={userInfo.profileCompletionPercentage}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[75%]">
              <div className="w-full h-[33%] flex justify-center border-b-[1px] border-gray-300">
                <div className="w-[90%] h-full">
                  <h3 className="pt-5 opacity-60">اطلاعات پروفایل</h3>
                  <div className="w-full py-5 lg:py-0 lg:h-14 mt-4 flex flex-col gap-4 lg:flex-row justify-between">
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgAddress className="w-6 h-6" />
                      <span>آدرس:</span>
                      <span>{userInfo.homeAdderess}</span>
                    </div>
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgPhone className="w-6 h-6" />
                      <span>شماره تلفن:</span>
                      <span>{userInfo.phoneNumber}</span>
                    </div>
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgNationalCode className="w-7 h-7" />
                      <span>کد ملی:</span>
                      <span>{userInfo.nationalCode}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[33%] flex justify-center border-b-[1px] border-gray-300">
                <div className="w-[90%] h-full">
                  <h3 className="pt-5 opacity-60">راه های ارتباطی</h3>
                  <div className="w-full py-5 lg:py-0 lg:h-14 mt-4 flex flex-col gap-4 lg:flex-row justify-between">
                    <div className="h-full text-sm flex gap-2 items-center">
                      <SvgTelegram className="w-6 h-6" />
                      <Link
                        to={userInfo.telegramLink}
                        className="border-b-[1px] border-transparent hover:border-gray-600"
                      >
                        {userInfo.telegramLink}
                      </Link>
                    </div>
                    <div className="h-full text-sm flex gap-2 items-center">
                      <SvgLinkdin className="w-6 h-6" />
                      <Link
                        to={userInfo.linkdinProfile}
                        className="border-b-[1px] border-transparent hover:border-gray-600"
                      >
                        {userInfo.linkdinProfile}
                      </Link>
                    </div>
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgEmail className="w-6 h-6" />
                      <span>{userInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[35%] flex justify-center border-b-[1px] border-gray-300">
                <div className="w-[90%] h-full">
                  <h3 className="pt-5 opacity-60">اطلاعات شخصی</h3>
                  <div className="w-full py-5 lg:py-0 lg:h-14 mt-4 flex flex-col gap-4 lg:flex-row justify-between">
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgBirthday className="w-6 h-6" />
                      <span>تاریخ تولد:</span>
                      <span>{toJalali(userInfo.birthDay)}</span>
                    </div>
                    <div className="h-full text-sm flex gap-2 items-center cursor-default">
                      <SvgGender className="w-6 h-6" />
                      <span>جنسیت:</span>
                      <span>{userInfo.gender ? "آقا" : "خانم"}</span>
                    </div>
                    <div className="h-full text-sm flex gap-1 items-center">
                      <SvgArrowLeft className="w-5 h-5 order-2" />
                      <Link
                        to={"editprofile"}
                        className="border-b-[1px] border-transparent hover:border-gray-600 order-1"
                      >
                        ویرایش اطلاعات
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
