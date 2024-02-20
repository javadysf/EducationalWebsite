import axios from "../interceptor";
import { toast } from "react-toastify";

export const createNewsComment = async (newsId, title, describe) => {
  try {
    const commentObj = { newsId: newsId, title: title, describe: describe };
    const result = axios.post(`/News/CreateNewsComment`, commentObj);
    return result;
  } catch (error) {
    return false;
  }
};
