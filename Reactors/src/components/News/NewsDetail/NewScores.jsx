import SvgLike from "./../Svg/SvgLike";
import SvgFavorite from "./../Svg/SvgFavorite";
import { useState } from "react";
import SvgStar from "./../Svg/SvgStar";
import { postLikeNews } from "./../../../core/sevices/api/postLikeNews";
import { toast } from "react-toastify";
import { addToFavNews } from "./../../../core/sevices/api/addToFavNews";
import { postRateNews } from "./../../../core/sevices/api/postRateNews";

export const NewScores = ({
  id,
  currentLikeCount,
  currentUserIsLike,
  isCurrentUserFavorite,
  inUsersFavoriteCount,
  currentRate,
}) => {
  const [isLiked, setIsLiked] = useState(currentUserIsLike);
  const [isFav, setIsFav] = useState(isCurrentUserFavorite);
  const [currRate, setCurrRate] = useState(0);

  const handleLike = async () => {
    try {
      const result = await postLikeNews(id);
      if (result.success) {
        toast("👍 خبر لایک شد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLiked(true);
      } else {
        toast.error("مشکلی پیش آمد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLiked(false);
      }
    } catch (error) {
      toast.error("مشکلی پیش آمد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleFav = async () => {
    try {
      const result = await addToFavNews(id);
      if (result.success) {
        toast("به علاقه مندی ها اضافه شد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLiked(true);
      } else {
        toast.error("مشکلی پیش آمد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLiked(false);
      }
    } catch (error) {
      toast.error("مشکلی پیش آمد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleRate = async (rate) => {
    setCurrRate(rate);
    try {
      const result = await postRateNews(id, rate);
      if (result.success) {
        toast("⭐ امتیاز شما ثبت گردید", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("مشکلی پیش آمد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("مشکلی پیش آمد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const rates = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-around items-center w-full lg:w-[80%] rounded-2xl mx-auto p-7 mt-6">
      <div
        className="flex gap-1 justify-center items-center cursor-pointer"
        onClick={() => handleLike()}
      >
        {isLiked ? (
          <SvgLike className="w-7 h-7" fill="#0777b7" />
        ) : (
          <SvgLike className="w-7 h-7" fill="none" />
        )}
        <span>{currentLikeCount}</span>
      </div>
      <div className="flex flex-row-reverse gap-1 justify-center items-center">
        {rates.map((rate) =>
          rate <= currRate ? (
            <SvgStar
              key={rate}
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleRate(rate)}
              fill="#FFCC00"
            />
          ) : (
            <SvgStar
              key={rate}
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleRate(rate)}
              fill="none"
            />
          )
        )}
      </div>
      <div
        className="flex gap-1 justify-center items-center cursor-pointer"
        onClick={handleFav}
      >
        {isFav ? (
          <SvgFavorite className="w-7 h-7" fill="#0777b7" />
        ) : (
          <SvgFavorite className="w-7 h-7" fill="none" />
        )}
        <span>{inUsersFavoriteCount}</span>
      </div>
    </div>
  );
};
