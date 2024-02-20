import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { validateNumber } from "../../../core/functions/Utils";
import { verifyPhoneNumber } from "../../../core/sevices/api/auth";
import { setNum } from "../../../redux/features/userAuth/userPersonalDetails";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import homeicon from "../../../assets/img/userpanel/home.png";
import Progressbar from "./Progressbar";
import registerpic from "../../../assets/img/auth/register.png"

const VerifyNumber = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const onSubmit = async (values) => {
    const register = await verifyPhoneNumber(values);
    const success = register.success;
    if (success) {
        dispatch(setNum({
        phoneNumber: values.phoneNumber,
      }))
       navigate("/register/confirmMessage");
    }
  };
  return (
    <div className="flex gap-4 bg-white p-12">
    <Formik
      initialValues={{
        phoneNumber: "",
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validateNumber}
    >
      <Form className="flex flex-wrap flex-col gap-4  w-[350px] rounded-md ">
        <h1 className="self-center text-3xl font-black">ثبت نام</h1>
        <Progressbar title={"مرحله 1 : ثبت شماره تلفن"} width={"w-1/3"} />
          <SAInput
            placeholder={"لطفا شماره تماس خود را وارد کنید"}
            name="phoneNumber"
            style={"w-full"}

          />
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
        <Link
          to="/"
          className=" w-36 h-12 bg-gray-700 rounded-full flex text-xs items-center justify-center text-amber-300 gap-2 "
        >
          بازگشت به <img className=" w-8 h-8" src={homeicon} />
        </Link>
      </Form>
    </Formik>
    <img className="w-96 h-96 rounded-lg" src={registerpic}/>
    </div>
  );
};
export default VerifyNumber;
