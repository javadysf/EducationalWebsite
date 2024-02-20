import axios from "../interceptor";
export const getCoursesDetails = async(id) => {
  try {
    const result = await axios.get("/Home/GetCourseDetails?CourseId="+id);
    return result;
  } catch (error) {
    return [];
  }
};
