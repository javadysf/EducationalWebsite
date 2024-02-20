import axios from "../interceptor";

export const getReplies = async (commentId) => {
  try {
    const result = await axios.get(`/News/GetRepliesComments`, {
      params: { Id: commentId },
    });
    return result;
  } catch (error) {
    console.log("error in getReplies.js : ", error);
    return [];
  }
};
