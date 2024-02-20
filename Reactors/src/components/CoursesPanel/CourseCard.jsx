import React from "react";
import { CircularNews } from "../News/NewsCard/CircularNews/CircularNews";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "./../../redux/features/shoppingCard/shoppingCardSlice";
import { toast } from "react-toastify";
import StarRatingComponent from "react-star-rating-component";
import { removeDecimal } from "../../core/functions/functions";
import teachericon from "../../assets/img/courses/teachericon.png";
import reacticon from "../../assets/img/courses/reactlogo.png";
import price from "../../assets/img/courses/price.png";
import audience from "../../assets/img/courses/audience.png";
import commnets from "../../assets/img/courses/comments.png";
import SAButton from "../common/SAButton/SAButton";

const CourseCard = ({ item, courseToAdd }) => {
  const dispatch = useDispatch();
  const handleAddToCard = (ToAdd) => {
    dispatch(addToCard(ToAdd));
    toast.success("با موفقیت به سبد خرید اضافه شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="w-[350px] h-[600px] relative  ">
      <div className="flex flex-col p-2 absolute gap-8 max-sm:gap-12 bg-stone-100 shadow-md rounded-3xl bottom-px ">
      <div className="border mt-[-100px] border-transparent w-full flex flex-shrink-0 flex-wrap justify-center max-sm:top-[5px]">
        <CircularNews img={item.tumbImageAddress} />
      </div>
        <div className="flex flex-col">
        <h1 className=" text-2xl font-black">{item.title} </h1>
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={item.courseRate}
        />
         <span className="text-amber-400 text-xs ">({item.levelName})</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 ">
          <span className="flex w-40 text-md gap-2 items-center ">
            <img className="w-6 h-6" src={teachericon} />{" "}
            <h4 className="text-sm" >{item.teacherName}</h4>
          </span>
          <span className="flex w-40 text-md gap-2 items-center ">
            <img className="w-6 h-6" src={price} />{" "}
            <p className="text-sm">{removeDecimal(item.cost)} تومان</p>{" "}
          </span>
          <span className="flex w-40 text-sm gap-2 items-center ">
            <img className="w-6 h-6" src={audience} /> {item.currentRegistrants}{" "}
            شرکت کننده
          </span>
          <span className="flex w-40 text-sm gap-2 items-center ">
            <img className="w-6 h-6" src={commnets} /> {item.commandCount} نظر
          </span>
        </div>
        <Link
          to={`/coursedetails/${item.courseId}`}
          className="text-amber-700 drop-shadow-sm font-black p-2"
        >
          جزییات بیشتر
        </Link>
        <SAButton
          onClick={() => handleAddToCard(courseToAdd)}
          style="bg-basket w-16 bg-cover bottom-[-5px] left-[-5px] h-16 absolute"
          name=" "
        />
      </div>
    </div>
  );
};

export default CourseCard;
