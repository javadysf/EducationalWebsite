import React from "react";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import FPImage from "../../../assets/img/auth/forgetpass.svg"
import emailicon from "../../../assets/img/auth/mail.png";
import homeicon from "../../../assets/img/userpanel/home.png"
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { emailValidation} from "../../../core/functions/Utils";
import {forgetPassword} from "../../../core/sevices/api/auth"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async(values) => {
    console.log(values);
    const forgetPass = await forgetPassword(values);
    if(forgetPass.success===true) {
      toast.success("ایمیلی حاوی لینک بازیابی رمز عبور به آدرس ایمیل شما ارسال شد... ",{
        position: "top-center",
        autoClose: 5000,
        type: "success",
        hideProgressBar: false,
        className:"bg-amber-300",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",})
    }
    else
    {
      toast.error(forgetPass.errors[0], {
        position: "top-right",
        autoClose: 3000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
 
  return (
    <div className="flex bg-white p-12 rounded-md">
    <Formik
      initialValues={{ email: "",baseUrl:"https://localhost:5173/resetpassword"}}
      onSubmit={(values) =>  onSubmit(values)}
      validationSchema={emailValidation}
    >
      <Form className="flex flex-col gap-8 p-12 rounded-md">
        <h1 className="self-center text-3xl font-black">فراموشی رمز عبور</h1>
        <SAInput
          image={emailicon}
          placeholder=" ایمیل خود را وارد کنید"
          title="نام کاربری"
          name="email"
        />
        <SAButton
          style="bg-amber-300 w-full rounded p-2"
          type="submit"
          name="بازیابی رمز عبور "
        />
        <Link to="/" className="w-36 h-12 bg-gray-700 rounded-full flex text-xs items-center justify-center text-amber-300 gap-2 ">بازگشت به <img className=" w-8 h-8" src={homeicon} /></Link>
      </Form>
    </Formik>
<img className="w-96 h-96" src={FPImage} />
    </div>
  );
};
export default index ;