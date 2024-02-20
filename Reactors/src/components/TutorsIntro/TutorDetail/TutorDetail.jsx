import { useParams } from "react-router-dom";
import RegisterComments from "../../common/RegisterComments/RegisterComments";
import Comments from "../../common/Comments/Comments";
import { NewDescription } from "./../../News/NewsDetail/NewDescription";
import { NewsHeroSection } from "./../../News/NewsDetail/NewsHeroSection";
import { TopTitle } from "../../common/TopTitle/TopTitle";
import { useEffect } from "react";
import getTeacherById from "../../../core/sevices/api/GetTeacherById";
import { useState } from "react";

export const TutorDetail = () => {
  const params = useParams();
  const teacherId = params.id;

  const [teacherDetail, setTeacherDetail] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const result = await getTeacherById(teacherId);
      setTeacherDetail(result);
    };
    fetch();
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <TopTitle title={"جزییات استاد"} />
      <NewsHeroSection
        title={teacherDetail.fullname}
        summery={teacherDetail.linkdinProfileLink}
        img={teacherDetail.pictureAddress}
      />
      <NewDescription description={selTutor.des} />
      <div className="flex justify-center mt-24">
        <RegisterComments background={"bg-gray-100"} />
      </div>
      <Comments commentsList={selTutor.comments} />
    </div>
  );
};
