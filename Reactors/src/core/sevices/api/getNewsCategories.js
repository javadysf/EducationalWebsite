import axios from "../interceptor";

export const getNewsCategories = async () => {
  try {
    const result = await axios.get(`/News/GetListNewsCategory`);
    return result;
  } catch (error) {
    console.log("error in getNews.js : ", error);
    return [];
  }
};
