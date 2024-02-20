import { SvgDate } from "./../Svg/SvgDate";
import SvgAuthor from "./../Svg/SvgAuthor";
import SvgView from "./../Svg/SvgView";
import SvgUpdate from "./../Svg/SvgUpdate";

export const NewsAdditionalInfo = ({
  currentView,
  insertDate,
  updateDate,
  addUserFullName,
}) => {
  return (
    <div className="flex flex-col flex-wrap items-start sm:items-center md:items-start md:flex-row gap-6 justify-around w-full lg:w-[80%] rounded-full bg-transparent mx-auto p-7 mt-16 opacity-70">
      <div className="flex gap-2 justify-center items-center rounded-full w-fit py-3 px-7 bg-white shadow-shadow1 whitespace-nowrap">
        <SvgDate className="w-5 h-5 " />
        {insertDate}
      </div>
      <div className="flex gap-2 justify-center items-center rounded-full w-fit py-3 px-7 bg-white shadow-shadow1 whitespace-nowrap">
        <SvgAuthor className="w-6 h-6" />
        {addUserFullName}
      </div>
      <div className="flex gap-2 justify-center items-center rounded-full w-fit py-3 px-7 bg-white shadow-shadow1 whitespace-nowrap">
        <SvgView className="w-6 h-6" />
        {currentView}
      </div>
      <div className="flex gap-2 justify-center items-center rounded-full w-fit py-3 px-7 bg-white shadow-shadow1 whitespace-nowrap">
        <SvgUpdate className="w-6 h-6" />
        {updateDate}
      </div>
    </div>
  );
};
