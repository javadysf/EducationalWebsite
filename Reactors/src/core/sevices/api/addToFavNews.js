import axios from "../interceptor";

export const addToFavNews = async (newId) => {
  try {
    const result = axios.post(`/News/AddFavoriteNews`, null, {
      params: { NewsId: newId },
    });
    return result;
  } catch (error) {
    return {};
  }
};
