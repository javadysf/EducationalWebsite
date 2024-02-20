import axios from "../interceptor";

export const getLandingReport = async () => {
  try {
    const result = await axios.get("/Home/LandingReport");
    return result;
  } catch (error) {
    return false;
  }
};
