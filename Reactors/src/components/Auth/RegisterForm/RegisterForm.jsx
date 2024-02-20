import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { Formik, Form } from "formik";
import { registerValidation } from "../../../core/functions/Utils";
import { useSelector } from "react-redux";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import homeicon from "../../../assets/img/userpanel/home.png"
import registerpic from "../../../assets/img/auth/register.png"
import { toast } from "react-toastify";
import { registerAPI } from "../../../core/sevices/api/auth";
import Progressbar from "./Progressbar";

const RegisterForm = () => {
  const navigate = useNavigate();
  const phoneNumber = useSelector((state) => state.PersonalDetailsSlice).phoneNumber;
  const Fields = [
    { id: 1, placeholder: "ایمیل", name: "gmail" },
    { id: 2, placeholder: "شماره موبایل", name: "phoneNumber",type: "string",value:phoneNumber },
    { id: 3, placeholder: " رمز عبور", name: "password" },
  ];
  const onSubmit = async(values) => {
    const register = await registerAPI(values);
    if(register.success==true) {
      toast.success("ٌثبت نام موفقیت آمیز بود...!  به صفحه ورود هدایت میشوید..", {
        position: "top-right",
        autoClose: 3000,
        type: "success",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
navigate("/login")
    }
    }
  return (
    <div className="flex gap-8 bg-white p-12 rounded-md">
    <Formik
      initialValues={{
        gmail: "",
        password: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={registerValidation}
    >
      <Form className="flex flex-col  gap-4  ">
        <h1 className="self-center text-3xl font-black">ثبت نام</h1>
        <Progressbar title={"مرحله 3 : تکمیل اطلاعات"} width={"w-[99%]"} />
        <div className="flex flex-col justify-center flex-wrap gap-5">
          {Fields?.map((item) => {
            return (
              <SAInput
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              value={item.value}
              />
              );
            })}
        </div>
        <SAButton
          style="bg-amber-300  rounded p-2"
          type="submit"
          name="ثبت نام"
        />
        <Link to="/" className="w-36 h-12 bg-gray-700 rounded-full flex text-xs items-center justify-center text-amber-300 gap-2 ">بازگشت به <img className=" w-8 h-8" src={homeicon} /></Link>

      </Form>
    </Formik>
    <img className="w-96 h-96 rounded-lg" src={registerpic}/>
    </div>
  );
};
export default RegisterForm;
