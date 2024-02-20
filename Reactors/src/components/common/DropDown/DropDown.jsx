import { Field } from "formik";

const DropDown = ({ list, name, onChange, selected }) => {
  return (
    <div className="min-w-[70%] sm:min-w-[25%] h-12 bg-gray-100 border border-amber-400 rounded-3xl px-5 max-sm:w-36">
      <Field
        name={name}
        as="select"
        onChange={onChange}
        className="outline-none rounded-lg w-full h-full bg-transparent"
        value={selected}
      >
        {list.map(({ title, value }) => {
          return (
            <option key={value} value={value}>
              {title}
            </option>
          );
        })}
      </Field>
    </div>
  );
};

export default DropDown;
