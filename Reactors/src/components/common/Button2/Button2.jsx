const Button2 = ({ title, customStyle, type }) => {
  return (
    <button
      type={type === undefined ? "button" : type}
      className={`inline px-9 py-3 rounded-full text-xl text-black bg-amber-400 drop-shadow-md ${customStyle}`}
    >
      {title}
    </button>
  );
};

export default Button2;
