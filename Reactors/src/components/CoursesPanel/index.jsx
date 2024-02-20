import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CourseCard from "./CourseCard";
import { getCourseList, getFilteredCourseLevel, getSearchedCourse } from "../../core/sevices/api/courses";
import { NewsSearch } from "../common/NewsSearch/NewsSearch";
import DropDown from "../common/DropDown/DropDown";
import { Formik } from "formik";
import ReactImg from "./../../assets/img/courses/reactlogo.png";
import FilterSection from "./FilterSection";

  const svgIconLeft = (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className="w-3 h-3 md:w-5 md:h-5"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <title />
        <g id="Complete">
          <g id="arrow-left">
            <g>
              <polyline
                data-name="Right"
                fill="none"
                id="Right-2"
                points="7.6 7 2.5 12 7.6 17"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21.5"
                x2="4.8"
                y1="12"
                y2="12"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  const svgIconRight = (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className="w-3 h-3 md:w-5 md:h-5 rotate-180"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <title />
        <g id="Complete">
          <g id="arrow-left">
            <g>
              <polyline
                data-name="Right"
                fill="none"
                id="Right-2"
                points="7.6 7 2.5 12 7.6 17"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21.5"
                x2="4.8"
                y1="12"
                y2="12"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>)


const CoursesPanel = () => {
  const [filter, setfilter] = useState("");
  const [item, setitem] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

   // shows users filtered levels
  const setFiltersLevels = async(value) => {
    const result = await getFilteredCourseLevel(value);
    console.log(result);
    setitem(result.courseFilterDtos);
  };
   // shows users filtered types
  const setFiltersTypes = async(value) => {
    const result = await getFilteredCourseLevel(value);
    console.log(result);
    setitem(result.courseFilterDtos);
  };
  //get all courses list
  const getCoursesList = async (value) => {
    const courses = await getCourseList(value);
    const endOffset = itemOffset + itemsPerPage;
    setitem(courses.courseFilterDtos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(item.length / itemsPerPage));
    // setitem(courses.courseFilterDtos);
  };

  useEffect(() => {
    getCoursesList();

  }, [itemOffset, itemsPerPage]);

  //shows the searched values by user
  const searchedvalue = async(event) => { 
    let result = event.target.value?await getSearchedCourse(event.target.value): await getCourseList();
    setitem(result.courseFilterDtos.slice(itemOffset, itemOffset + itemsPerPage));
  };

  const  onChange = (e) => {
    getCoursesList(e.target.value);
    setfilter(e.target.title);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % item.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="flex flex-col gap-8 p-12">
        <h1 className="text-2xl font-black">دوره ها</h1>
        <div className="h-0.5 bg-amber-300" />
        <div className="flex justify-between items-center max-sm:flex-col gap-2">
          <Formik initialValues={{ search: "" }}>
            <NewsSearch
              onChange={searchedvalue}
              name="search"
              placeholder={"جست و جوی دوره..."}
            />
          </Formik>
          <Formik initialValues={{}}>
            <DropDown
              onChange={onChange}
              name="order"
              // selected={filter}
              list={[
                {
                  title: "مرتب سازی بر اساس جدیدترین",
                  value: "lastUpdate",
                },
                {
                  title: "مرتب سازی بر اساس  قیمت",
                  value: "cost",
                },
                {
                  title: "مرتب سازی بر اساس  امتیاز دوره",
                  value: "courseRate",
                },
                {
                  title: "مرتب سازی بر اساس سطح دوره",
                  value: "levelName",
                },
              ]}
            />
          </Formik>
        </div>
          <div className="flex">
            <FilterSection setfilterlevel={setFiltersLevels} setFilterType={setFiltersTypes} />
        <div className=" w-[90%] flex flex-wrap justify-center gap-12 ">
          {item.length <= 0
            ? item?.map((item) => {
                return (
                  <CourseCard
                    key={item.courseId}
                    courseToAdd={{
                      id: item.id,
                      title: item.name,
                      tutor: "محمد اکبرزاده",
                      cost: 480000,
                      audience: item.audience,
                      comments: 130,
                      thumbnail: ReactImg,
                    }}
                    item={item}
                  />
                );
              })
            : item?.map((item) => {
                return (
                  <CourseCard
                    key={item.courseId}
                    courseToAdd={{
                      id: item.id,
                      title: item.name,
                      tutor: "محمد اکبرزاده",
                      cost: 480000,
                      audience: item.audience,
                      comments: 130,
                      thumbnail: ReactImg,
                    }}
                    item={item}
                  />
                );
              })}
        </div>
      </div>
          </div>
      <div className="w-full flex justify-center my-20">
        <ReactPaginate
          breakLabel="..."
          nextLabel={svgIconRight}
          previousLabel={svgIconLeft}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex h-12 flex-row-reverse gap-2"
          pageClassName="rounded-full w-7 h-7 md:w-10 md:h-10 shadow bg-amber-300 text-sm md:text-xl text-center leading-7 md:leading-10"
          pageLinkClassName="block w-full h-full"
          activeClassName="border-2 border-black"
          breakLinkClassName="leading-4"
          nextClassName="flex justify-center bg-black items-center rounded-full w-7 h-7 md:w-10 md:h-10 shadow text-sm md:text-xl leading-7 md:leading-10"
          previousClassName="flex justify-center bg-black items-center rounded-full w-7 h-7 md:w-10 md:h-10 shadow text-sm md:text-xl leading-7 md:leading-10"
        />
      </div>
    </>
  );
};

export default CoursesPanel;
