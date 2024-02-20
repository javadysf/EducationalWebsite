import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TopTitle } from "../../common/TopTitle/TopTitle";
import { NewsHeroSection } from "../../News/NewsDetail/NewsHeroSection";
import { getTeacherDetail } from "./../../../core/sevices/api/getTeacherDetail";
import { SvgDefProfile } from "./../Svg/SvgDefProfile";

export const TutorsDetail = () => {
  const [teacherDetail, setTeacherDetail] = useState({
    skills: [],
    histories: [
      {
        singleJob: null,
      },
    ],
    teacherId: 2,
    fullName: "unknown F-unknown L",
    linkdinProfileLink: "https://web.telegram.org/",
    pictureAddress:
      "https://acadapi.etacorealtime.ir\\Pictures\\ProfileImageThumbnail\\photo1699951161_1ad0d8e1-ac21-4e60-a92d-c1f196663671.jpeg",
    courseCounts: 6,
    newsCount: 2,
  });

  const params = useParams();
  const teacherId = params.id;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getTeacherDetail(teacherId);
        setTeacherDetail(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  return (
    <>
      <div className="w-[90%] mx-auto">
        <TopTitle title={"جزییات استاد"} />
        <NewsHeroSection
          title={teacherDetail.fullName}
          linkdin={teacherDetail.linkdinProfileLink}
          img={teacherDetail.pictureAddress}
          courseCounts={teacherDetail.courseCounts}
          newsCount={teacherDetail.newsCount}
          defaultImgNode={<SvgDefProfile className="w-16 h-16" />}
        />
      </div>
    </>
  );
};
