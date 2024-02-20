import axios from "../interceptor";

export const updateProfileInfo = async (formData) => {
  try {
    const res = await axios.put("/SharePanel/UpdateProfileInfo", formData);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
