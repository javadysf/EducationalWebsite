import axios from "../interceptor";

export const getNewsByCategory = async (categoryId) => {
  try {
    const result = await axios.get(`/News/GetNewsWithCategory/${categoryId}`);
    return result;
  } catch (error) {
    console.log("error in getNews.js : ", error);
    return [];
  }
};
