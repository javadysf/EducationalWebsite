const SvgLike = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.05 7.044a1.933 1.933 0 0 0-3.407-1.735L8.472 9.75H5.857l-.75.75V18l.75.75h10.964l2.304-4.607A3.554 3.554 0 0 0 15.946 9h-1.548l.652-1.956ZM9.608 10.74l3.256-4.559a.433.433 0 0 1 .763.389l-1.31 3.93h3.63a2.054 2.054 0 0 1 1.836 2.972l-1.889 3.778H9.608v-6.51Zm-1.5 6.51h-1.5v-6h1.5v6Z"
      fill="#080341"
    />
  </svg>
);
export default SvgLike;
