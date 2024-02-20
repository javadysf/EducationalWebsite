import { useEffect } from "react";
import { Total } from "./Total/Total";
import Button2 from "../common/Button2/Button2";
import { CoursesSlider } from "./CoursesSlider/CoursesSlider";
import Feed from "./Feed/Feed";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";

export const Landing = () => {
  const observerOpt = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-toTop");
      }
    });
  }, observerOpt);

  useEffect(() => {
    observer.observe(document.querySelector("#total"));
    observer.observe(document.querySelector("#slider"));
  }, []);

  return (
    <div className="overflow-hidden">
      <Banner
        searchPlaceHolder={"هر چی میخواهی جست و جو کن..."}
        header={
          " با 13 سال سابقه مفتخریم با قوی ترین کادر آموزشی به صورت حضوری و آنلاین به شما عزیزان خدمت رسانی کنیم"
        }
      />
      <Total
        mainTitle={"سابقه ی سپهر"}
        des={
          "با ثبت نام در سایت دسترسی به خدمات را برای خود سریع تر و آسان تر کنید"
        }
        callToAction={
          <Link className="w-full flex justify-center" to={"/register"}>
            <Button2 title={"ثبت نام"} customStyle={"my-10"} />
          </Link>
        }
      />
      <CoursesSlider header={"دوره های آموزشگاه"} />
      <Feed header={"جدیدترین مقالات"} />
    </div>
  );
};
