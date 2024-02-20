import React from "react";
import { useState } from "react";

export const ImageCircular = ({ img }) => {
  const [image, setImage] = useState(img);

  const readImage = (file) => {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith("image/")) {
      console.log("File is not an image.", file.type, file);
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      setImage(event.target.result);
    });
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-60 sm:h-60 shadow-xl flex justify-center items-center group">
      <img src={image} alt="profile image" />
      <input
        accept="image/*"
        single
        id="imgPicker"
        type="file"
        className="hidden"
        onChange={(event) => readImage(event.target.files[0])}
      />
      <label
        htmlFor="imgPicker"
        className="opacity-0 group-hover:opacity-100 flex transition-all absolute rounded-full bg-black bg-opacity-60 backdrop-blur-md w-[30%] h-[30%] justify-center items-center cursor-pointer"
      >
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="12"
              cy="13"
              r="3"
              stroke="#ffffff"
              strokeWidth="1.5"
            />{" "}
            <path
              d="M2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2.53746 18.7498 2.38566 18.4045 2.27673 18"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
            <path
              d="M19 10H18"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />{" "}
          </g>
        </svg>
      </label>
    </div>
  );
};
