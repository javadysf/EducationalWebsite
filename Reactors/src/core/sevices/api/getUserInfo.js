import axios from "../interceptor";

// this will use a default token for development.
// in next merge, it must automatically provide the token in headers in axios instance.

export const getUserInfo = async () => {
  try {
    const res = await axios.get("/SharePanel/GetProfileInfo");
    return res;
  } catch (error) {
    return {};
  }
};
