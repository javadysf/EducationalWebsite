import React from "react";

const FeedChanger = ({ active, setActive }) => {
  return (
    <ul className="w-full h-10 flex justify-center mt-10">
      <li
        onClick={() => {
          setActive("news");
        }}
        className={`w-fit text-lg text-gray-500 border-l-2 border-gray px-4 py-2 cursor-pointer`}
        style={active === "news" ? { color: "rgb(251, 191, 36)" } : null}
      >
        اخبار
      </li>
      <li
        onClick={() => {
          setActive("articles");
        }}
        className={`w-fit text-lg text-gray-500 px-4 py-2 cursor-pointer`}
        style={active === "articles" ? { color: "rgb(251, 191, 36)" } : null}
      >
        مقالات
      </li>
    </ul>
  );
};

export default FeedChanger;
