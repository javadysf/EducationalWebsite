import axios from "../interceptor";

export const getCoursesTop = async (count) => {
  try {
    const result = axios.get("/Home/GetCoursesTop", {
      params: { Count: count },
    });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
