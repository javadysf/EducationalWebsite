import { dateConverterFull } from "../../../../core/functions/functions";
import { CommentCard } from "../CommentCard";

export const Replies = ({ ReplyList }) => {
  return (
    <div className="w-full h-fit flex flex-col items-center">
      <div className="w-[85%] h-fit">
        {ReplyList.map(
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
              containerStyle="bg-opacity-70"
              key={id}
              id={id}
              title={title}
              comment={describe}
              date={dateConverterFull(inserDate)}
              commentLike={commentLike}
              replyCount={replyCount}
              user={userId}
            />
          )
        )}
      </div>
    </div>
  );
};
