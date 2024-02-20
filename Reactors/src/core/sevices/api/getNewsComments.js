import axios from "../interceptor";

const getNewsComments = async (newId) => {
  try {
    const result = await axios.get(`/News/GetNewsComments`, {
      params: { NewsId: newId },
    });
    return result;
  } catch (error) {
    console.log("error in getNewsComments.js : ", error);
    return [];
  }
};
