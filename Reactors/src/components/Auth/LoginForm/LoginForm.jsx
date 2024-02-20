import React from "react";
import SAButton from "../../common/SAButton/SAButton";
import SAInput from "../../common/SAInput/SAInput";
import keyicon from "../../../assets/img/auth/key.png";
import emailicon from "../../../assets/img/auth/mail.png";
import loginpic from "../../../assets/img/auth/login.jpg"
import { GoToHomeBtn } from "../../common/GoToHomeBtn/GoToHomeBtn";
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { loginValidation } from "../../../core/functions/Utils";
import {LoginAPI} from "../../../core/sevices/api/auth"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getItem, setItem } from "../../../core/sevices/common/storage.services";
import { setUser } from "../../../redux/features/userAuth/userAuthSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const loginUser = await LoginAPI(values);
    if(loginUser.success===true) {
      setItem('token', loginUser.token);
      dispatch(setUser({
        token: getItem('token'),
      }))
      toast.success("کاربر گرامی شما با موفقیت وارد شدید..!", {
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
      navigate("/");
    } else {
      toast.error(loginUser.message, {
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
    <div className="flex gap-4 bg-white p-12 rounded-md"   >
    <Formik
      initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={loginValidation}
    >
      <Form className="flex flex-col  gap-4 ">
        <h1 className="self-center text-3xl font-black">ورود</h1>
        <SAInput
          image={emailicon}
          placeholder=" ایمیل خود را وارد کنید"
          title="نام کاربری"
          name="phoneOrGmail"
        />
        <SAInput
          type="password"
          image={keyicon}
          placeholder=" رمز خود را وارد کنید"
          title="کلمه عبور "
          name="password"
        />
        <Link to="/forgetpassword" className="text-xs underline decoration-amber-300">
          رمز عبور خود را فراموش کرده ام
        </Link>
        <SAButton
          style="bg-amber-300 w-full rounded p-2"
          type="submit"
          name="ورود"
        />
        <Link
          to="/register/registernumber"
          className="text-xs underline decoration-amber-300 self-center"
        >
          ثبت نام
        </Link>
        <GoToHomeBtn />
      </Form>
    </Formik>
    <img className="w-96 h-96" src={loginpic} />
    </div>
  );
};
export { LoginForm };
