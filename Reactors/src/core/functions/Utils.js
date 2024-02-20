import * as yup from "yup";
import moment from 'moment-jalaali';
const loginValidation = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .required("* لطفا نام ایمیل خود را وارد کنید")
    .email("* ایمیل را به درستی وارد کنید"),
  password: yup
    .string()
    .required("* لطفا رمز عبور خود را وارد کنید")
    .min(6, "* کلمه عبور باید حداقل 6 کاراکتر باشد")
    .max(16, "* کلمه عبور باید حداکثر 16 کاراکتر باشد"),
});
const validateNumber = yup.object().shape({
  phoneNumber: yup
  .string()
    .required("* لطفا شماره تماس خود را وارد کنید")
    .min(10, "* شماره موبایل  باید 11 رقم باشد"),
});
const registerValidation = yup.object().shape({
  phoneNumber: yup
  .string()
    .required("* لطفا شماره تماس خود را وارد کنید")
    .min(10, "* شماره موبایل  باید 11 رقم باشد"),
  gmail: yup
    .string()
    .required("* لطفا نام ایمیل خود را وارد کنید")
    .email("* ایمیل را به درستی وارد کنید"),
  password: yup
    .string()
    .required("* لطفا رمز عبور خود را وارد کنید")
    .min(6, "* کلمه عبور باید حداقل 8 کاراکتر باشد")
    .max(16, "* کلمه عبور باید حداکثر 16 کاراکتر باشد"),
});
const emailValidation = yup.object().shape({
  email: yup
    .string()
    .required("* لطفا نام ایمیل خود را وارد کنید")
    .email("* ایمیل را به درستی وارد کنید"),
});
const passwordValidation = yup.object().shape({
  newPassword: yup
    .string()
    .required("* لطفا رمز عبور خود را وارد کنید")
    .min(6, "* کلمه عبور باید حداقل 6 کاراکتر باشد")
    .max(16, "* کلمه عبور باید حداکثر 16 کاراکتر باشد"),
});


 const toJalali = (date) => {
  const persianDate = moment(date).format('jYYYY/jMM/jDD');
    return persianDate;
  };


export { loginValidation, registerValidation,validateNumber,emailValidation,passwordValidation,toJalali };
