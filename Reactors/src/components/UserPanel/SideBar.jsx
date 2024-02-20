import logouticon from "../../assets/img/userpanel/log-out.png";
import personicon from "../../assets/img/userpanel/person.png";
import homeicon from "../../assets/img/userpanel/home.png";
import mycourses from "../../assets/img/userpanel/mycourses.png";
import courselisticon from "../../assets/img/userpanel/courselist.png";
import editproficon from "../../assets/img/userpanel/editprof.png";
import { Link, useLocation } from "react-router-dom";
import { removeItem } from "../../core/sevices/common/storage.services";
import { useDispatch } from "react-redux";
import { RemoveUser } from "../../redux/features/userAuth/userAuthSlice";

const SidebarItems = [
  {
    title: "پیشخوان",
    icon: homeicon,
    href: "/userpanel",
  },
  {
    title: "ویرایش پروفایل",
    icon: editproficon,
    href: "/userpanel/editprofile",
  },
  {
    title: "دوره های من",
    icon: mycourses,
    href: "/userpanel/mycourses",
  },
  {
    title: "لیست دوره ها",
    icon: courselisticon,
    href: "/userpanel/courseslist",
  },
];
const SideBar = () => {
  const dispatch = useDispatch();
  const logOut = ()=>{
    removeItem('token')
   dispatch(RemoveUser({
     token: null,
   }))
 }
  const Location = useLocation().pathname;
  return (
    <div className=" w-1/4 flex justify-center items-center">
      <div className="flex flex-col bg-sideBarBg shadow-sideBarShadow rounded-4xl w-[95%] h-[93%] gap-4 p-4 max-md:p-2 ">
        <div className=" flex bg-smoke-white items-center justify-around rounded-full p-8 gap-4 max-md:p-2 max-xl:flex-col ">
          <img
            className="w-16 h-16 max-sm:w-12 max-sm:h-12 "
            src={personicon}
          />
          <h3 className="text-sm">زهرا رسولی</h3>
          <div className="bg-gray-300 h-16 w-px max-lg:hidden"></div>
          <span>
            <img className="w-8 h-8" src={logouticon} />
          </span>
        </div>
        <span className="flex flex-col text-white gap-10 p-6 max-md:p-px">
          {SidebarItems.map((item) => {
            return (
              <span
                key={item.title}
                className={`flex gap-2 cursor-pointer items-center max-md:text-xs max-lg:flex-col`}
              >
                <img className="w-8 h-8 " src={item.icon} />
                <Link className to={item.href}>
                  <h4
                    className={`text-center text-white ${
                      Location === item.href
                        ? "text-amber-300 underline-offset-8 underline "
                        : ""
                    }`}
                  >
                    {item.title}
                  </h4>
                </Link>
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default SideBar;
