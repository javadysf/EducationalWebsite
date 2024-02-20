import moment from "jalali-moment";

const removeDecimal = (num) => {
  const Number = Math.ceil(num);
  return Number;
};

const dateConverter = (date) => {
  console.log(date);
  var time = new Date(date);
  var jalali = moment(time, "YYYY/MM/DD").locale("fa").format("MMMM");
  return jalali;
};

const dateConverterFull = (date) => {
  var time = new Date(date);
  var jalali = moment(time, "YYYY/MM/DD").locale("fa").format("DD MMMM YYYY");
  return jalali;
};

export { removeDecimal, dateConverter, dateConverterFull };
