import React from "react";

import TelegramImg from "../../../assets/img/footer/telegramLogo.png";
import InstaImg from "../../../assets/img/footer/instagramLogo.png";
import FaceBookImg from "../../../assets/img/footer/facebookLogo.png";
import WhatsAppImg from "../../../assets/img/footer/whatsAppLogo.png";
import Trust1 from "../../../assets/img/footer/namad1.png";
import Trust2 from "../../../assets/img/footer/namad2.png";
import Trust3 from "../../../assets/img/footer/namad3.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigator = useNavigate();

  const pages = [
    { id: 0, title: "خانه", href: "/" },
    { id: 1, title: "دوره ها", href: "/courses" },
    { id: 2, title: "معرفی اساتید", href: "/tutors" },
    { id: 3, title: "اخبار", href: "/news" },
    { id: 4, title: "مقالات", href: "/articles" },
  ];

  const contactUs = [
    { id: 0, title: "09917877761" },
    { id: 1, title: "akbarzadeh.mohammad100@gmail.com" },
  ];

  const socials = [
    { id: 0, img: TelegramImg, alt: "Telegram" },
    { id: 1, img: InstaImg, alt: "Instagram" },
    { id: 2, img: FaceBookImg, alt: "FaceBook" },
    { id: 3, img: WhatsAppImg, alt: "WhatsApp" },
  ];

  const trusts = [
    { id: 0, img: Trust1, alt: "Trust" },
    { id: 1, img: Trust2, alt: "Trust" },
    { id: 2, img: Trust3, alt: "Trust" },
  ];

  return (
    <footer className="relative w-full h-60 lg:h-118 bg-black flex flex-shrink-0 flex-nowrap flex-col justify-end">
      <div className="w-full h-[80%] flex justify-center">
        <div className="w-[85%] flex">
          <ul className="text-white text-xs lg:text-xl w-1/3 lg:w-1/4">
            <li className="text-base text-amber-300 lg:text-3xl cursor-default">
              صفحات
            </li>
            {pages.map(({ id, title, href }) => (
              <li
                key={id}
                onClick={() => navigator(href)}
                className="rounded-md w-[80%] h-fit pl-6 pr-[2px] py-1 lg:py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all"
              >
                {title}
              </li>
            ))}
          </ul>
          <div className="w-1/3 lg:w-1/4 h-full">
            <ul className="text-white text-[9px] md:text-[14px] lg:text-xl w-full h-[70%] lg:h-[40%]">
              <li className="text-base lg:text-2xl text-amber-300 cursor-default">
                ارتباط با ما
              </li>
              {contactUs.map(({ id, title }) => (
                <li
                  key={id}
                  className="rounded-md w-[80%] h-fit pl-6 pr-[2px] py-1 max-w-[100%] lg:py-2 break-words cursor-default"
                >
                  {title}
                </li>
              ))}
            </ul>
            <div className="w-full h-[22%] flex gap-3 flex-wrap lg:hidden">
              {socials.map(({ id, img, alt }) => (
                <img
                  key={id}
                  src={img}
                  alt={alt}
                  className="w-4 h-4 cursor-pointer"
                />
              ))}
            </div>
            <ul className="hidden text-white text-[10px] lg:text-xl w-full lg:block">
              <li className="text-2xl text-amber-300 cursor-default pt-6">
                آدرس
              </li>
              <li className="rounded-md w-fit h-fit pr-[2px] py-1 cursor-default">
                مازندران،ساری،میدان 18 دی
              </li>
            </ul>
          </div>
          <div className="w-1/3 lg:w-1/4 h-full">
            <ul className="text-white text-xs md:text-[14px] w-full lg:hidden">
              <li className="text-base text-amber-300 cursor-default">آدرس</li>
              <li className="rounded-md w-fit h-fit pr-[2px] py-1 cursor-default">
                مازندران،ساری،میدان 18 دی
              </li>
            </ul>
            <div className="w-full h-[30%] flex flex-wrap gap-2 pt-5 lg:hidden">
              {trusts.map(({ id, img, alt }) => (
                <img key={id} src={img} alt={alt} className="w-9 h-9" />
              ))}
            </div>
            <div className="hidden lg:block w-full h-full">
              <h3 className="text-base lg:text-2xl text-amber-300 cursor-default">
                شبکه های اجتماعی
              </h3>
              <div className="w-full h-fit flex gap-7 flex-wrap pt-8 pr-2">
                {socials.map(({ id, img, alt }) => (
                  <img
                    key={id}
                    src={img}
                    alt={alt}
                    className="w-7 h-7 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden w-1/4 lg:block pr-6">
            {trusts.map(({ id, img, alt }) => (
              <img key={id} src={img} alt={alt} className="w-24 h-24" />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-5 lg:h-14 border-t-2 border-amber-300 lg:border-gray-700 flex justify-center lg:items-center">
        <div className="bg-black px-5 text-white text-[8px] lg:text-lg relative bottom-2.5 lg:bottom-0">
          <p>
            کلیه حقوق مادی و معنوی این سایت متعلق به{" "}
            <span className=" text-[9px] lg:text-lg text-amber-300">
              آموزشگاه سپهر
            </span>{" "}
            می باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
