import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { validateNumber } from "../../../core/functions/Utils";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import homeicon from "../../../assets/img/userpanel/home.png"
import { ConfirmSMS } from "../../../core/sevices/api/auth";
import Progressbar from "./Progressbar";
import confirmpic from "../../../assets/img/auth/confirm.png"

const ConfirmCode = () => {
    const navigate = useNavigate();
    const phoneNumber = useSelector((state) => state.PersonalDetailsSlice).phoneNumber;
    console.log(phoneNumber);
  const onSubmit = async(values) => {
    const register = await ConfirmSMS(values);
    const success = register.success;
    if (success) {
      navigate("/register")
    }
}
  return (
    <div className="flex gap-4 bg-white p-12">      
    <Formik
      initialValues={{
        phoneNumber:phoneNumber,
        verifyCode: "",
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validateNumber}
    >
      <Form className="flex flex-wrap flex-col gap-4 bg-white p-8 w-[350px] rounded-md ">
        <h1 className="self-center text-3xl font-black">ثبت نام </h1>
        <Progressbar title={"مرحله 2 : تایید شماره تلفن همراه"} width={"w-2/3"} />
        <div className="flex justify-center flex-wrap gap-5">
              <SAInput
                placeholder={"لطفا کد تایید پیامک شده را وارد کنید"}
                name="verifyCode"
              />
        </div>
        <SAButton
          style="bg-amber-300 w-full rounded p-2"
          type="submit"
          name="مرحله بعد"
        />
        <Link
          to="/login"
          className="text-xs underline decoration-amber-300 self-center"
        >
          قبلا ثبت نام کرده ام{" "}
        </Link>
        <Link to="/" className="w-36 h-12 bg-gray-700 rounded-full flex text-xs items-center justify-center text-amber-300 gap-2 ">بازگشت به <img className=" w-8 h-8" src={homeicon} /></Link>

      </Form>
    </Formik>
    <img className="w-96 h-96 rounded-lg" src={confirmpic}/>
    </div>
  );
};
export default ConfirmCode;
