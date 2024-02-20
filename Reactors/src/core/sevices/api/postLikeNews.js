import axios from "../interceptor";

export const postLikeNews = async (newId) => {
  try {
    const result = await axios.post(`/News/NewsLike/${newId}`, null);
    return result;
  } catch (error) {
    return {};
  }
};
