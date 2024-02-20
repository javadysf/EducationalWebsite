import axios from "../interceptor";
const getCourseList = async (count) => {
  try {
    const result = await axios.get("/Home/GetCoursesWithPagination", {
      params: {
        SortingCol: count,
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
};
const getSearchedCourse = async (value) => {
  try {
    const result = await axios.get("/Home/GetCoursesWithPagination", {
      params: {
        Query: value,
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
};

const getCourseLevel = async() => {
  try {
    const result = await axios.get("/CourseLevel/GetAllCourseLevel");
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
}
const getCourseType = async() => {
  try {
    const result = await axios.get("/CourseType/GetCourseTypes");
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
}
const getCourseTech = async() => {
  try {
    const result = await axios.get("/Home/GetTechnologies");
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
}
const getFilteredCourseLevel = async (value) => {
  try {
    const result = await axios.get("/Home/GetCoursesWithPagination", {
      params: {
        courseLevelId: value,
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    return [];
  }
};

const getFilteredCourseType = async (value) => {
  try {
    const result = await axios.get("/Home/GetCoursesWithPagination", {
      params: {
        CourseTypeId: value,
      },
    });
    console.log(result);
    return result;
  } 
  catch (error) {
    return [];
  }
};
export { getCourseList, getSearchedCourse,getCourseLevel,getCourseType,getFilteredCourseLevel,getFilteredCourseType};
