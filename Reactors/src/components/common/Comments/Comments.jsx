import { dateConverterFull } from "../../../core/functions/functions";
import { toJalali } from "../../../core/functions/Utils";
import { CommentCard } from "./../CommentCard/CommentCard";
import SvgNoComment from "./Svg/SvgNoComment";

const Comments = ({ commentsList }) => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto p-7 mt-16">
      {commentsList.length !== 0 ? (
        <>
          <h2 className="text-center lg:text-right text-2xl text-amber-400 drop-shadow-sm">
            نظرات کاربران
          </h2>
          <div className="w-full flex justify-center flex-wrap gap-5 mt-12">
            {commentsList.map(
              ({
                id,
                title,
                userId,
                describe,
                inserDate,
                commentLike,
                replyCount,
              }) => (
                <CommentCard
                  key={id}
                  id={id}
                  user={userId}
                  comment={describe}
                  date={toJalali(inserDate)}
                  replyCount={replyCount}
                  commentLike={commentLike}
                  title={title}
                />
              )
            )}
          </div>
        </>
      ) : (
        <div className="h-72 flex flex-col gap-5 items-center justify-center">
          {<SvgNoComment className="w-28 h-28" />}
          <a href="#registerComment">اولین نفری باشید که کامنت می گذارید</a>
        </div>
      )}
    </div>
  );
};

export default Comments;
