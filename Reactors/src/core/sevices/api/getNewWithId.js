import axios from "../interceptor";

export const getNewWithId = async (newId) => {
  try {
    const result = await axios.get(`/News/${newId}`);
    return result;
  } catch (error) {
    console.log("error in getNewWithId.js : ", error);
    return {};
  }
};
