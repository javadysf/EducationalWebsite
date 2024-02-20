import { useState } from "react";
import { getReplies } from "./../../../core/sevices/api/getReplies";
import SvgDown from "./../Comments/Svg/SvgDown";
import SvgHeart from "./../Comments/Svg/SvgHeart";
import { postCommentLike } from "./../../../core/sevices/api/postCommentLike";
import { toast } from "react-toastify";
import { Replies } from "./Replies/Replies";
import { SvgDoubleQuotes } from "./../Comments/Svg/SvgDoubleQuotes";
import { SvgDate } from "../Comments/Svg/SvgDate";

export const CommentCard = ({
  containerStyle,
  id,
  user,
  title,
  comment,
  date,
  commentLike,
  replyCount,
}) => {
  const [replies, setReplies] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isRepliesShowing, setIsRepliesShowing] = useState(false);

  const showReplies = async (commentId) => {
    if (isRepliesShowing) {
      setIsRepliesShowing(false);
    } else {
      const result = await getReplies(commentId);
      setReplies(result);
      setIsRepliesShowing(true);
    }
  };

  const postLike = async (commentId) => {
    const result = await postCommentLike(commentId, true);
    if (result.success) {
      if (!isLiked) {
        toast("❤️ لایک شما ثبت شد", {
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
        setIsLiked(false);
      }
    } else {
      toast("💔 مشکلی پیش آمد، دوباره امتحان کنید ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div
        className={`bg-amber-200 text-black rounded-2xl shadow w-full h-fit px-4 py-6 ${containerStyle}`}
      >
        <h3 className="text-lg">
          <SvgDoubleQuotes width="42px" height="42px" />
          {user}
        </h3>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-gray-500 break-words mt-4">{comment}</p>
        <div className="flex justify-between gap-1 mt-18">
          <div className="text-gray-500 flex gap-2 justify-start items-center">
            <SvgDate width="20px" height="20px" />
            <span>{date}</span>
          </div>
          <div
            className="text-gray-500 flex gap-2 justify-start items-center"
            onClick={() => postLike(id)}
          >
            {isLiked ? (
              <SvgHeart
                className="w-6 h-6 opacity-90 cursor-pointer"
                fill="#ff0000"
                stroke="#000000"
              />
            ) : (
              <SvgHeart
                className="w-6 h-6 opacity-90 cursor-pointer"
                fill="none"
                stroke="#000000"
              />
            )}
            <span>{commentLike}</span>
          </div>
        </div>
        {replyCount !== 0 ? (
          <div className="text-gray-500 flex justify-center items-center mt-5 w-full">
            <div
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => showReplies(id)}
            >
              <span>نمایش پاسخ ها</span>
              <SvgDown className="w-5 h-5 opacity-60" />
            </div>
          </div>
        ) : null}
      </div>
      {isRepliesShowing ? <Replies ReplyList={replies} /> : null}
    </>
  );
};
