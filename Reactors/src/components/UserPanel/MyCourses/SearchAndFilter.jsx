import React,{useState} from 'react'
import { NewsSearch } from "../../common/NewsSearch/NewsSearch";
import DropDown from "../../common/DropDown/DropDown";
import { Formik } from "formik";


const SearchAndFilter = ({changes}) => {
  const [values, setNewValues] = useState("");

// pass an argument to parent

  function handleChange(event){
    let value = event.target.value;
    setNewValues(value);
    const updateserached = ()=>{
      changes(value);
    }
      updateserached();
 }
  return (
    <div className="flex justify-between max-md:flex-col gap-2">
      <Formik initialValues={{ search: "" }}>
        <NewsSearch
          onChange={handleChange}
          value={values}
          name="search"
          placeholder={"جست و جوی دوره..."}
        />
      </Formik>
      <Formik initialValues={{ order: "date" }}>
        <DropDown
        //   onChange={onChange}
          name="order"
        //   selected={filter}
          list={[
            { title: "مرتب سازی بر اساس تاریخ", value: "id" },
            {
              title: "مرتب سازی بر اساس تعداد شرکت کننده",
              value: "audience",
            },
            {
              title: "مرتب سازی بر اساس  قیمت",
              value: "price",
            },
          ]}
        />
      </Formik>
    </div>
  )
}

export default SearchAndFilter