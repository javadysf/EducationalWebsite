import axios from "../interceptor";

 const LoginAPI = async (user) => {
  try {
    debugger
    const response = await axios.post("/Sign/Login", user);
    return response;
  } catch (error) {
    return error;
  }
};

const verifyPhoneNumber = async (user) => {
  try {
    const response = await axios.post("/Sign/SendVerifyMessage", user);
    return response;
  } catch (error) {
    return error;
  }
};
const ConfirmSMS = async (user) => {
  try {
    console.log(user);
    debugger
    const response = await axios.post("/Sign/VerifyMessage", user);
    debugger
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

 const registerAPI = async (user) => {
  try {
    console.log("hi");
    debugger
    const response = await axios.post("/Sign/Register", user);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

const forgetPassword = async (user) => {
  try {
    const response = await axios.post("/Sign/ForgetPassword", user);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

const getResetPasswordValue = async (address) => {
  try {
    const result = await axios.get("/Sign/Reset/" + address);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const resetPassword = async (values) => {
  try {
    debugger
    const result = await axios.post("/Sign/Reset" , values);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};



export { LoginAPI, registerAPI,verifyPhoneNumber,ConfirmSMS,forgetPassword,getResetPasswordValue,resetPassword};
