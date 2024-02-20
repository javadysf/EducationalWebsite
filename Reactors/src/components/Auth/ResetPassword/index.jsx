import React,{useEffect,useState} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import {  passwordValidation } from "../../../core/functions/Utils";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import homeicon from "../../../assets/img/userpanel/home.png";
import resetpassPic from "../../../assets/img/auth/resetpassword.png"
import { getResetPasswordValue, resetPassword } from "../../../core/sevices/api/auth";


const index = () => {

  const Params = useParams().ConfigValue;
  const navigate = useNavigate();
  const [resetValues,setRestValues] = useState([]);

  const getResetValue = async () => {
    console.log(Params);
    const resetValue = await getResetPasswordValue(Params);
    setRestValues(resetValue);
    console.log(resetValue);
  }

  const onSubmit= async(values)=> {
    debugger
    console.log(values);
       const details = {
        "userId":resetValues.id,
        "newPassword": values.newPassword,
        "resetValue":resetValues.message,
       }
       const resetPass = await resetPassword(details);
       if(resetPass.success==true) {
        toast.success("عملیات موفقیت آمیز بود...!  به صفحه ورود هدایت میشوید..", {
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

console.log(resetValues.id);
  useEffect(()=>{
    getResetValue();
  },[])
  return (
    <div className="flex gap-4 bg-white p-12">
    <Formik
      initialValues={{
        newPassword:"",
      }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={passwordValidation}
    >
      <Form className="flex flex-wrap flex-col gap-4  w-[350px] rounded-md ">
        <h1 className="self-center text-3xl font-black">رمز عبور جدید</h1>
          <SAInput
            placeholder={"لطفا رمز عبور جدید خود را وارد کنید"}
            name="newPassword"
            style={"w-full"}

          />
        <SAButton
          style="bg-amber-300 w-full rounded p-2"
          type="submit"
          name="تغییر رمز عبور"
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
    <img className="w-96 h-96 rounded-lg" src={resetpassPic}/>
    </div>
  );
};
export default index;
