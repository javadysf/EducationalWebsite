import axios from "axios";
import { getItem } from "../common/storage.services";

const baseurl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseurl,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);
  if (err.response.status === 401) {
    clearStorage();
  }
  if (err.response.status >= 400 && err.response.status < 500) {
    console.log(err);
    alert(err.message);
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
