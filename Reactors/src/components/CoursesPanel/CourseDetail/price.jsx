import React from "react";
import SAButton from "../../common/SAButton/SAButton";
import basketicon from "../../../assets/img/coursedetail/basketicon.png";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../redux/features/shoppingCard/shoppingCardSlice";
import { toast } from "react-toastify";
import { removeDecimal } from "../../../core/functions/functions";

const price = ({courseToAdd,details}) => {
  const dispatch = useDispatch();
  const handleAddToCard = (ToAdd) => {
    dispatch(addToCard(ToAdd));
    toast.success("با موفقیت به سبد خرید اضافه شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="flex justify-center p-8 max-md:text-sm">
      <div className="flex bg-white w-[80%] p-8 rounded-lg justify-between max-md:flex-col max-md:p-4 max-md:gap-4">
        <span className="flex items-center gap-2 text-xl max-md:text-sm ">
          {" "}
          <h4>قیمت دوره </h4> : <h4>{removeDecimal(details)} هزارتومان</h4>
        </span>
        <div className="relative flex">
          <SAButton
            onClick={() => handleAddToCard(courseToAdd)}
            style="bg-amber-300 pe-12 py-4 rounded-xl max-md:text-sm   w-[250px]"
            name="افزودن به سبد خرید"
          />
          <img className="absolute w-8 h-8 top-4 left-5" src={basketicon} />
        </div>
      </div>
    </div>
  );
};

export default price;
