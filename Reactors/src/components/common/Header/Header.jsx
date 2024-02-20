import { useState } from "react";
import Button from "../SAButton/SAButton";
import shoppingcard from "../../../assets/img/header/shopping-cart.png";
import menuIcon from "./../../../assets/img/header/menu.png";
import close from "./../../../assets/img/header/close.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { RemoveUser,setUser } from "../../../redux/features/userAuth/userAuthSlice";
import { useEffect } from "react";
import { getItem,removeItem } from "../../../core/sevices/common/storage.services";


export const navLinks = [
  {
    id: "Home",
    title: "خانه",
    href: "/",
  },
  {
    id: "Courses",
    title: "دوره ها",
    href: "/courses",
  },
  {
    id: "Teachers",
    title: "معرفی اساتید",
    href: "/tutors",
  },
  {
    id: "News",
    title: "اخبار",
    href: "/news/1",
  },
];
const Header = () => {
  const logOut = ()=>{
     removeItem('token')
    dispatch(RemoveUser({
      token: '',
    }))
  }
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const Location = useLocation().pathname;
  const [toggle, setToggle] = useState(false);
  const totalCart = useSelector((state) => state.total);
  const login = useSelector((state) => state.userAuthSlice);

  useEffect(()=>{
    dispatch(setUser({
      token: getItem('token'),
    }))
  },[])

  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full shadow-2xl rounded-sm bg-black flex py-4 gap-7 max-sm:gap-0 justify-between items-center p-7 max-sm:flex-row-reverse max-sm:p-3 max-sm:text-sm"
    >
      <div className="flex gap-14 max-sm:gap-0">
        {/* Logo */}
        <div className=" list-none text-amber-300 max-sm:text-sm justify-center self-center">
          آموزشگاه سپهر
        </div>
        <nav>
          <ul className=" text-white list-none sm:flex hidden items-center flex-1">
            {login.token ? (
              <li className="font-poppins font-normal cursor-pointer text-[16px] ml-4  ">
                <Link
                  to="/userpanel/dashboard"
                  className="relative inline-flex items-center justify-center  px-4 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-300 via-gary-00 to-amber-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white flex ">
                    <svg
                      className="w-3 h-3 text-gray-800 self-center dark:text-white ml-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 10 16"
                    >
                      <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                    </svg>
                    پنل کاربری
                  </span>
                </Link>
              </li>
            ) : (
              ""
            )}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                  Location === nav.href
                    ? "text-amber-300 underline-offset-8 underline"
                    : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "ml-0" : "ml-10"}`}
              >
                <Link to={`${nav.href}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}

      <div className="flex flex-row gap-5">
        {login.token ? (
          <div className="flex justify-center align-center gap-2 cursor-pointer" onClick={()=>logOut()}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
            <p className="text-white ">خروج </p> 
          </div>
        ) : (
          <Button
            style="text-amber-300 border border-white rounded-full py-2 px-4"
            name="ورود/ثبت نام"
            onClick={() => navigate("/login")}
          />
        )}
        <div
          className="relative flex items-center justify-center pl-2"
          onClick={() => navigate("/userpanel")}
        >
          {totalCart !== 0 ? (
            <div className="absolute top-0 -right-1 animate-bounce bg-red-600 w-5 h-5 rounded-full text-xs text-white flex justify-center items-center">
              <span>{totalCart}</span>
            </div>
          ) : null}
          <img
            className="cursor-pointer w-6 h-6 md:w-9 md:h-9"
            src={shoppingcard}
          />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex justify-end items-center max-sm:justify-start">
        <img
          src={toggle ? close : menuIcon}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-12 right-0 my-2 min-w-[140px] z-10 opacity-90 sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  Location === nav.href ? "text-amber-300" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link to={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
export { Header };
