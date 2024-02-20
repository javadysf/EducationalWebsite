import axios from "../interceptor";

export const getTeacherDetail = async (id) => {
  try {
    const result = await axios.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};
