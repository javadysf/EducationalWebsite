import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegisterComments from "../../common/RegisterComments/RegisterComments";
import Comments from "../../common/Comments/Comments";
import { NewDescription } from "./NewDescription";
import { NewsHeroSection } from "./NewsHeroSection";
import { TopTitle } from "../../common/TopTitle/TopTitle";
import { getNewWithId } from "./../../../core/sevices/api/getNewWithId";
import { Loading } from "./../../common/Loading/Loading";
import { createNewsComment } from "./../../../core/sevices/api/createNewsComment";
import { NewsAdditionalInfo } from "./NewsAdditionalInfo";
import { dateConverterFull } from "../../../core/functions/functions";
import { NewScores } from "./NewScores";
import { DefImgNews } from "./../Svg/DefImgNews";

export const NewsDetail = () => {
  const params = useParams();
  const [selNew, setSelNew] = useState({
    commentDtos: [
      {
        newsId: "2b1e295d-0373-ee61-b6c7-ca6d3e095498",
        parentId: null,
        id: "e0816bbb-9d88-ee11-b6c7-ca6d3e095898",
        userIpAddress: "2.179.198.181",
        title: "dfgdffd",
        describe: "ssssssssssssssssss",
        userId: 10,
        inserDate: "2023-11-21T22:12:34.07",
        commentLike: 0,
        replyCount: 0,
      },
    ],
    detailsNewsDto: {
      id: "1b1e293d-0373-ee11-b6c7-ca6d3e095898",
      title: "News1------------------------------------------------",
      googleTitle: "News1------------------------------------------------",
      googleDescribe:
        "------------------------------------------------------------------------------------------",
      miniDescribe: "News1------------------------------------------------",
      describe: "News1------------------------------------------------",
      keyword: "News1------------------------------------------------",
      shortLink: null,
      currentImageAddress: null,
      currentImageAddressTumb: null,
      insertDate: "2023-10-25T10:23:46.913",
      updateDate: "2023-10-25T10:23:46.913",
      currentRate: 3,
      currentView: 91,
      currentLikeCount: 17,
      isSlider: false,
      active: true,
      userId: 2,
      addUserFullName: "unknown F-unknown L",
      newsCatregoryId: 1,
      newsCatregoryName: "مقالات",
      commentsCount: 31,
      inUsersFavoriteCount: 24,
      currentUserIsLike: true,
      likeId: "89134b11-4e85-ee11-b6c7-ca6d3e095898",
      currentUserFavoriteId: "00000000-0000-0000-0000-000000000000",
      isCurrentUserFavorite: false,
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const result = await getNewWithId(params.id);
      setSelNew(result);
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-[90%] mx-auto">
          <TopTitle title={"جزییات خبر"} />
          <NewsHeroSection
            title={selNew.detailsNewsDto.title}
            summery={selNew.detailsNewsDto.miniDescribe}
            img={selNew.detailsNewsDto.currentImageAddress}
            category={selNew.detailsNewsDto.newsCatregoryName}
            defaultImgNode={<DefImgNews className="w-24 h-24" />}
          />
          <NewsAdditionalInfo
            currentView={selNew.detailsNewsDto.currentView}
            insertDate={dateConverterFull(selNew.detailsNewsDto.insertDate)}
            addUserFullName={selNew.detailsNewsDto.addUserFullName}
            updateDate={dateConverterFull(selNew.detailsNewsDto.updateDate)}
          />
          <NewDescription description={selNew.detailsNewsDto.describe} />
          <NewScores
            id={selNew.detailsNewsDto.id}
            currentLikeCount={selNew.detailsNewsDto.currentLikeCount}
            currentUserIsLike={selNew.detailsNewsDto.currentUserIsLike}
            isCurrentUserFavorite={selNew.detailsNewsDto.isCurrentUserFavorite}
            currentRate={selNew.detailsNewsDto.currentRate}
            inUsersFavoriteCount={selNew.detailsNewsDto.inUsersFavoriteCount}
          />
          <div className="flex justify-center mt-24">
            <RegisterComments
              background={"bg-gray-100"}
              registerFunc={createNewsComment}
              id={selNew.detailsNewsDto.id}
            />
          </div>
          <Comments commentsList={selNew.commentDtos} />
        </div>
      )}
    </>
  );
};
