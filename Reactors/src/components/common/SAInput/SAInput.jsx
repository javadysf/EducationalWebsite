import React from "react";
import { Field, ErrorMessage } from "formik";

const SAInput = (props) => {
  return (
    <div className="relative flex gap-2 flex-col">
      <Field
        name={props.name}
        className={`pr-9 rounded-md bg-gray-100 border-amber-300 border p-2 w-60 text-xs outline-none ${props.style}`}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
      <img className="absolute top-1.5 w-5 right-2" src={props.image} />
      <h3 className="text-xs">
        <ErrorMessage
          name={props.name}
          className={` animate-pulse  ${props.errorStyle === undefined ? "" : props.errorStyle}`}
          component={
            props.errorComponent === undefined ? "h3" : props.errorComponent
          }
        />
      </h3>
    </div>
  );
};
export default SAInput;
