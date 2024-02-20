import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { RemoveUser,setUser } from "../../redux/features/userAuth/userAuthSlice";
import { getItem } from "../sevices/common/storage.services";
import Layout from "../../components/Layout/Layout";
import Home from "../../screens/Home";
import RegisterNumber from "../../screens/RegisterNumber";
import RegisterForm from "../../screens/Register";
import Login from "../../screens/Login";
import ForgetPassword from "../../screens/ForgetPassword";
import Courses from "../../screens/Courses";
import CourseDetails from "../../components/CoursesPanel/CourseDetail/index";
import MyCourses from "../../screens/UserMyCourses";
import ConfirmMessage from "../../screens/ConfirmMessage"
import News from "../../screens/News";
import {TutorsDetailPage} from "../../screens/TutorsDetailPage"
import { NewsDetail } from "../../components/News/NewsDetail/NewsDetail";
import UserLayout from "../../components/Layout/UserLayout";
import { UserPanelPage } from "../../screens/UserPanelPage";
import UserCoursesList from "../../screens/UserCoursesList";
import Page404 from "../../components/Page404/Page404";
import { EditProfile } from "../../components/UserPanel/EditProfile/EditProfile";
import { TutorsIntroduction } from "../../screens/TutorsIntroduction";
import ResetPassword from "../../screens/ResetPassword";

const RouterConfig = () => {
  const loginSrorage = getItem('token');
  console.log(loginSrorage);
  
  const loginReudex = useSelector((state) => state.userAuthSlice);
  const[isLog,setIsLog]=  useState(loginSrorage)
  const dispatch = useDispatch();
  
    const Publics = [{
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/coursedetails/:id",
          element: <CourseDetails />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tutors",
          element: <TutorsIntroduction />,
        },
        { path: "news/detail/:id", element: <NewsDetail /> },
        {
          path: "/tutors/tutorsdetail/:id",
          element: <TutorsDetailPage />,
        },
        {
          path: "/news/:initCategory",
          element: <News />,
        },
        { path: "/news/:initCategory/detail/:id", element: <NewsDetail /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/resetpassword/:ConfigValue",
        element: <ResetPassword />,
      },
      {
        path: "/register/registernumber",
        element: <RegisterNumber />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/register/ConfirmMessage",
        element: <ConfirmMessage />,
      },
      {
        path: "/*",
        element: <Page404 />,
      },
    ];
    const [allPages, setAllPages] = useState(Publics);
    const Privates = [{
      path: "/userpanel",
      element: <UserLayout />,
      children: [
        {
          path: "/userpanel/mycourses",
          element: <MyCourses />,
        },
        {
          path: "/userpanel/dashboard",
          element: <UserPanelPage />,
        },
        {
          path: "/userpanel/courseslist",
          element: <UserCoursesList />,
        },
        {
          path: "/userpanel/editprofile",
          element: <EditProfile />,
        },
      ],
    },
  ]
    const router = createBrowserRouter(allPages);
    
    const routesPermissions = (flag)=>{
      console.log(flag);
      if(flag)
      {
        let Pub = [];
            Pub = [...Publics];
            Privates.forEach((privates)=>
            Pub.push(privates));
            const all = Pub;
            setAllPages(all);
            console.log(allPages);
          }
          
    }

    useEffect(() => {
      console.log(loginSrorage);
      dispatch(setUser({
        token: getItem('token'),
      }))
      routesPermissions(loginReudex.token);
      },[loginReudex]);

return <RouterProvider router={router} />
}
export default RouterConfig;