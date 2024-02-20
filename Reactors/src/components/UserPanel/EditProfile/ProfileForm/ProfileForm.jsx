import React, { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import SAInput from "../../../common/SAInput/SAInput";

export const ProfileForm = () => {
  const Fields = [
    {
      id: 5,
      title: "نام:",
      name: "fname",
      type: "text",
      placeholder: "",
    },
    {
      id: 6,
      title: "نام خانوادگی:",
      name: "lname",
      type: "text",
      placeholder: "",
    },
    {
      id: 20,
      title: "تلگرام:",
      name: "telegram",
      type: "text",
      placeholder: "",
    },
    {
      id: 7,
      title: "تاریخ تولد",
      name: "birthDate",
      type: "date",
      placeholder: "",
    },
    {
      id: 8,
      title: "لینکدین:",
      name: "linkdin",
      type: "text",
      placeholder: "",
    },
    {
      id: 2,
      title: "ایمیل:",
      name: "email",
      type: "text",
      placeholder: "",
    },
    {
      id: 3,
      title: "شماره ملی:",
      name: "idNumber",
      type: "number",
      placeholder: "",
    },
    {
      id: 4,
      title: "شماره تلفن:",
      name: "phoneNumber",
      type: "number",
      placeholder: "",
    },
  ];

  return (
    <>
      <div className="mt-10 sm:px-14">
        <div className="mx-auto w-[70%] flex flex-wrap justify-around content-around gap-6">
          {Fields.map(({ id, title, name, placeholder, type }) => {
            return (
              <div key={id}>
                <h3 className="text-lg text-gray-700 mb-3">{title}</h3>
                <SAInput
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  className="shrink-0"
                  style="pr-[1rem] pl-[1rem] py-4 lg:w-80 md:w-72 !text-lg "
                  errorStyle="text-red-600 text-lg"
                  errorComponent="h3"
                />
              </div>
            );
          })}
          <div className="w-full mt-7">
            <h3 className="text-xl text-gray-600">درباره ی شما:</h3>
            <Field
              name="userAbout"
              type="text"
              as="textarea"
              className="min-w-full max-w-full min-h-[100px] max-h-[160px] border border-gray-300 rounded-xl mt-5 shadow-shadow1 px-4 py-4 text-lg text-gray-600"
            />
          </div>
          <div className="w-full mt-7">
            <h3 className="text-xl text-gray-600">آدرس :</h3>
            <Field
              name="homeAddress"
              type="text"
              as="textarea"
              className="min-w-full max-w-full min-h-[100px] max-h-[160px] border border-gray-300 rounded-xl mt-5 shadow-shadow1 px-4 py-4 text-lg text-gray-600"
            />
          </div>
          <div className="w-full">
            <h3 className="text-xl text-gray-600">جنسیت:</h3>
            <div className="w-full mt-5 flex justify-start gap-10">
              <label className="flex gap-2">
                <Field name="gender" type="radio" value="true" />
                <span>آقا</span>
              </label>
              <label className="flex gap-2">
                <Field name="gender" type="radio" value="false" />
                <span>خانم</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
