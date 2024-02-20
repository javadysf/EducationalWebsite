import { Formik, Form, Field } from "formik";
import Button2 from "./../Button2/Button2";
import { toast } from "react-toastify";

const RegisterComments = ({ id, registerFunc, background }) => {
  const handleRegisterComment = async ({ title, comment }) => {
    // you should pass the correct api function and the id from parent to this component
    let result = null;
    try {
      result = await registerFunc(id, title, comment);
    } catch (error) {
      console.log(error);
    }

    if (result.status === 401) {
      toast.error("پس از وارد شدن به اکانت خود می توانید نظر خود را ثبت کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    if (result.success) {
      toast.success("نظر شما ثبت شد و پس از تایید ادمین،نمایش داده می شود", {
        position: "top-right",
        autoClose: 5000,
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
    <div
      id="registerComment"
      className={`w-full lg:w-[80%] rounded-2xl p-7 shadow-shadow1 ${background}`}
    >
      <h2 className="text-2xl text-amber-400 drop-shadow-sm">ثبت نظر</h2>
      <Formik
        initialValues={{ title: "", comment: "" }}
        onSubmit={(value) => handleRegisterComment(value)}
      >
        <Form>
          <div className="w-full">
            <h3 className="text-lg mt-6">عنوان:</h3>
            <Field
              type="text"
              name="title"
              className="outline-none rounded-md w-[80%] lg:w-[30%] h-10 px-2 mt-3"
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg mt-6">نظر:</h3>
            <Field
              as="textarea"
              name="comment"
              className="outline-none rounded-md min-w-[100%]  max-w-[100%] lg:min-w-[80%]  lg:max-w-[80%] min-h-48 max-h-64 p-4 mt-3"
            />
          </div>
          <Button2 title={"ارسال"} type={"submit"} customStyle={"mt-5"} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterComments;
