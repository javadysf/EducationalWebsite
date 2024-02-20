import { useState, useEffect } from "react";
import { Formik } from "formik";
import DropDown from "../common/DropDown/DropDown";
import { NewsSearch } from "../common/NewsSearch/NewsSearch";
import { NewsCard } from "./NewsCard/NewsCard";
// import ReactPaginate from "react-paginate";
import { getNewsByCategory } from "./../../core/sevices/api/getNews";
import { dateConverterFull } from "../../core/functions/functions";
import { Tabs } from "../common/Tabs/Tabs";
import { getNewsCategories } from "./../../core/sevices/api/getNewsCategories";
import { TopTitle } from "./../common/TopTitle/TopTitle";
import { Loading } from "./../common/Loading/Loading";

const NewsPage = ({ initCategory = "1" }) => {
  const [originalItems, setOriginalItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currCatergory, setCurrCategory] = useState(initCategory);
  const [searched, setSearched] = useState("");
  const [order, setOrder] = useState("viewOrder");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const categories = await getNewsCategories();
      setCategories(categories);
    };
    fetch();
  }, []);

  useEffect(() => {
    const sortItems = () => {
      switch (order) {
        case "rateOrder":
          setOriginalItems((prevItems) =>
            [...prevItems].sort((a, b) => b.currentRate - a.currentRate)
          );
          break;
        case "likeOrder":
          setOriginalItems((prevItems) =>
            [...prevItems].sort(
              (a, b) => b.currentLikeCount - a.currentLikeCount
            )
          );
          break;
        case "viewOrder":
          setOriginalItems((prevItems) =>
            [...prevItems].sort((a, b) => b.currentView - a.currentView)
          );
          break;
        case "dateOrder":
          setOriginalItems((prevItems) =>
            [...prevItems].sort((a, b) => {
              const dateA = new Date(a.insertDate);
              const dateB = new Date(b.insertDate);
              if (dateA < dateB) {
                return 1;
              } else if (dateA === dateB) {
                return 0;
              } else {
                return -1;
              }
            })
          );
          break;
        default:
          console.log("order value is not correct");
      }
    };
    sortItems();
  }, [order]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const items = await getNewsByCategory(currCatergory);
      setOriginalItems(items);
      setIsLoading(false);
    };
    fetch();
  }, [currCatergory]);

  useEffect(() => {
    const foundedItems = originalItems.filter((item) =>
      item.title.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchedItems(foundedItems);
  }, [searched, originalItems]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="mx-auto w-[90%] mt-20">
            <TopTitle title={"اخبار"} />
            <div className="mt-12 flex flex-wrap gap-4 justify-center sm:justify-between sm:gap-0">
              <Formik initialValues={{ search: "" }}>
                <NewsSearch
                  name="search"
                  placeholder={"جست و جوی خبر..."}
                  value={searched}
                  onChange={(event) => setSearched(event.target.value)}
                />
              </Formik>
              <Formik initialValues={{ order: "viewOrder" }}>
                <DropDown
                  name="order"
                  list={[
                    { title: "پربازدید ترین ها", value: "viewOrder" },
                    {
                      title: "جدیدترین ها",
                      value: "dateOrder",
                    },
                    {
                      title: "بالاترین امتیاز ها",
                      value: "rateOrder",
                    },
                    {
                      title: "پر لایک ترین ها",
                      value: "likeOrder",
                    },
                  ]}
                  onChange={(event) => {
                    setOrder(event.target.value);
                  }}
                />
              </Formik>
            </div>
            <div className="w-full mt-16 h-fit">
              <Tabs
                tabListTitle={"دسته بندی ها :"}
                tabList={categories}
                currCatergory={currCatergory}
                setCurrCategory={setCurrCategory}
              />
            </div>
            <div className=" w-full flex flex-wrap content-between justify-center sm:justify-start">
              {searchedItems.map(
                (
                  {
                    id,
                    title,
                    miniDescribe,
                    insertDate,
                    currentView,
                    currentLikeCount,
                    currentRate,
                    currentImageAddressTumb,
                  },
                  index
                ) => {
                  return (
                    <NewsCard
                      key={index}
                      id={id}
                      title={title}
                      des={miniDescribe}
                      views={currentView}
                      date={dateConverterFull(insertDate)}
                      img={currentImageAddressTumb}
                      likes={currentLikeCount}
                      rate={currentRate}
                    />
                  );
                }
              )}
            </div>
          </div>
          <div className="w-full flex justify-center my-20">
            {/* <ReactPaginate
          breakLabel="..."
          previousLabel={svgIconLeft}
          nextLabel={svgIconRight}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex h-12 flex-row-reverse gap-2"
          pageClassName="rounded-full w-7 h-7 md:w-10 md:h-10 shadow bg-amber-300 text-sm md:text-xl text-center leading-7 md:leading-10"
          pageLinkClassName="block w-full h-full"
          activeClassName="border-2 border-black"
          breakLinkClassName="leading-4"
          nextClassName="flex justify-center bg-black items-center rounded-full w-7 h-7 md:w-10 md:h-10 shadow text-sm md:text-xl leading-7 md:leading-10"
          previousClassName="flex justify-center bg-black items-center rounded-full w-7 h-7 md:w-10 md:h-10 shadow text-sm md:text-xl leading-7 md:leading-10"
        /> */}
          </div>
        </>
      )}
    </>
  );
};

export default NewsPage;
