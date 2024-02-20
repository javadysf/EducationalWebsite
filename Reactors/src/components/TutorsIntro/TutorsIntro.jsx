import { useState, useEffect } from "react";
import { TopTitle } from "../common/TopTitle/TopTitle";
import { TutorsCard } from "./TutorsCard/TutorsCard";
import { getAllTeachers } from "../../core/sevices/api/getAllTeachers";
import { Loading } from "../common/Loading/Loading";

export const TutorsIntro = () => {
  const [tutors, setTutors] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const result = await getAllTeachers();
      setTutors(result);
      setIsLoading(false);
    };
    fetch();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="w-[90%] mx-auto py-10">
        <TopTitle title={"معرفی اساتید"} />
        <div className="w-full flex justify-center flex-shrink-0 pt-32 lg:pb-20">
          <div className="w-full flex justify-center flex-shrink-0 flex-wrap gap-24">
            {tutors.map(
              (
                {
                  teacherId,
                  fullName,
                  linkdinProfileLink,
                  pictureAddress,
                  courseCounts,
                  newsCount,
                },
                index
              ) => {
                return (
                  <TutorsCard
                    index={index}
                    key={index}
                    id={teacherId}
                    tutor={fullName}
                    linkedin={linkdinProfileLink}
                    img={pictureAddress}
                    courseCount={courseCounts}
                    newsCount={newsCount}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
