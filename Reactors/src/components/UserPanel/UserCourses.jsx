import React,{useState,useEffect} from "react";
import reacticon from "../../assets/img/courses/reactlogo.png"
import ReactPaginate from "react-paginate";

const UserCourses = (props) => {
  const titles = [
    { title: "تصویر" },
    { title: "نام دوره" },
    { title: "نام استاد" },
    { title: "تاریخ شروع" },
    { title: "نام ترم" },
    { title: " قیمت" },
  ];

  const courseslist = props.data;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(courseslist.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(courseslist.length / itemsPerPage));

  }, [itemOffset, itemsPerPage,courseslist]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courseslist.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="flex p-8 max-md:p-px">
      <div className="flex flex-col gap-2 w-full ">
        <div className="relative overflow-x-auto  flex flex-col ">
          <table className="w-full text-sm text-right text-white dark:text-gray-900 flex flex-col gap-2 h-[550px] max-md:h-auto">
            <thead className="text-md text-white uppercase bg-gray-100 dark:bg-gray-500 dark:text-white rounded-full ">
              <tr className="flex  items-center justify-around  max-md:flex-col ">
                {titles.map((item) => {
                  return (
                    <th key={item.title} scope="col" className="w-32 max-lg:w-16 max-lg:text-xs px flex justify-center py-4 max-md:text-md">
                      {item.title}
                    </th>
                    
                    );
                  })}
                  <td className="w-16 max-lg:w-12 justify-center  items-center flex px py-4"></td>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-2">
              {currentItems?.map((item)=> {
                 return (      
                <tr key={item.id} className="bg-white dark:bg-gray-200 font-black dark:border-gray-900 max-md:flex-col items-center flex text-xs rounded-full gap-2 justify-around">
                  <th
                    scope="row"
                    className="px py-4 flex justify-center items-center w-32 max-lg:w-32 max-lg:text-xs"
                  >
                  <img className="w-10 h-10 max-md:w-32 max-md:h-32" src={reacticon}/>
                  </th>
                  <td className="w-32 max-lg:w-16 max-lg:text-xs flex  max-md:text-lg font-black justify-center items-center  px py-4"> {item.name} </td>
                  <td className="w-32 max-lg:w-16 max-lg:text-xs justify-center max-md:text-md  items-center flex px py-4">جواد یوسفی</td>
                  <td className="w-32  max-lg:w-16 max-lg:text-xsjustify-center max-md:text-md  items-center flex px py-4">1402/01/16</td>
                  <td className="w-32 max-lg:w-16 max-lg:text-xs justify-center max-md:text-md  items-center flex px py-4">بهار 1402</td>
                  <td className="w-32 max-lg:w-16 max-lg:text-xs justify-center max-md:text-md  items-center flex px py-4">{item.price} تومان</td>
                  <td className="w-16 max-lg:w-16 max-lg:text-xs justify-center max-md:text-md  items-center flex px py-4"><img className="w-6 h-6 max-md:w-12 max-md:h-12" src={props.actionIcon} /></td>
                </tr>
                )
              })}
            </tbody>
          </table>
          <ReactPaginate
        breakLabel="..."
        nextLabel=" ->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<-"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
        </div>
      </div>
    </div>
  );
};

export default UserCourses;
