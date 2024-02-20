import axios from "../interceptor";

export const postRateNews = async (newId, rate) => {
  try {
    const result = axios.post(`/News/NewsRate`, null, {
      params: { NewsId: newId, RateNumber: rate },
    });
    return result;
  } catch (error) {
    return {};
  }
};
