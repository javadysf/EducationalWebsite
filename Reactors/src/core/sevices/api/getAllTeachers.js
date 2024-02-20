import axios from "../interceptor";
export const getAllTeachers = async (count) => {
  try {
    const result = await axios.get("/Home/GetTeachers");
    return result;
  } catch (error) {
    return [];
  }
};
