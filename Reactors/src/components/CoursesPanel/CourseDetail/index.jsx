import React from "react";
import Herosection from "./Herosection.jsx";
import Price from "./Price.jsx";
import Description from "./Description.jsx";
import RegisterComments from "./../../common/RegisterComments/RegisterComments";
import Comments from "./../../common/Comments/Comments";
import ReactImg from "../../../assets/img/courses/reactlogo.png"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getCoursesDetails } from "../../../core/sevices/api/getCourseDetails.js";

const index = () => {
  const [details,setDetails] = useState([])
  const courseId = useParams().id;
  const coursedetail = async()=>{
    const result = await getCoursesDetails(courseId);
    setDetails(result)
  }
useEffect(()=>{
   coursedetail();
},[])

  return (
    <div className="bg-background-courses bg-contain">
      <Herosection details={details} />
      <Price details={details.cost}  courseToAdd={{
                  id: 1,
                  title: "جاوا",
                  tutor: "محمد اکبرزاده",
                  price: 480000,
                  audience: "27شرکت کننده",
                  comments: 130,
                  thumbnail: ReactImg,
                }} />
      <Description details={details.describe} />
      <div className="w-full flex justify-center p-5">
        <RegisterComments background={"bg-gray-200"} />
      </div>
      <Comments details={details}
        commentsList={[
          {
            id: 0,
            comment: "عالیه",
            user: "آرش موسوی",
            date: "15 اردیبهشت",
          },
        ]}
      />
    </div>
  );
};

export default index;
