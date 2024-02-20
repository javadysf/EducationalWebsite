export const NewDescription = ({ description }) => {
  return (
    <div className="w-full lg:w-[80%] rounded-2xl bg-gray-100 mx-auto p-7 mt-6 shadow-shadow1">
      <p className="text-sm md:text-base lg:text-lg text-gray-700 !leading-8">
        {description}
      </p>
    </div>
  );
};
