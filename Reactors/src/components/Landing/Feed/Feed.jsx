import { useEffect, useState } from "react";
import TopHeader from "../../common/TopHeader/TopHeader";
import { FeedCards } from "./FeedCards/FeedCards";
import Button2 from "../../common/Button2/Button2";
import { Link } from "react-router-dom";
import { getAllNews } from "./../../../core/sevices/api/getAllNews";

const Feed = ({ header }) => {
  const [news, setNews] = useState();
  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slideInLeft", "opacity-100");
      }
    });
  }, options);

  useEffect(() => {
    const elements = [...document.getElementsByClassName("feedCards")];
    elements.forEach((element) => observer.observe(element));
  }, [news]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllNews(1, 5, "InsertDate", "DESC");
        setNews(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  return (
    <div id="feed" className="h-fit w-full bg-white animate-slideInLeft">
      <TopHeader header={header} bg={"bg-white"} />
      <FeedCards feedList={news} />
      <div className="flex justify-center lg:mt-20 mb-16 lg:border-t-2 lg:border-gray-200">
        <div className="lg:px-10 lg:py-3 lg:bg-white lg:relative lg:bottom-10">
          <Link to={"/news"}>
            <Button2
              title={"مشاهده ی بیشتر"}
              customStyle={
                "mt-[50px] lg:bg-black lg:text-white lg:mt-0 shadow-shadow1"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;
