import axios from "../interceptor";

export const postCommentLike = async (commentId, LikeType) => {
  try {
    const result = axios.post(`/News/CommentLike/${commentId}`, null, {
      params: { LikeType: LikeType },
    });
    return result;
  } catch (error) {
    console.log("error in postCommentLike.js : ", error);
    return false;
  }
};
