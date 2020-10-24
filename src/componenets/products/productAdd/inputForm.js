import React from "react";

const Input = (props) => {
  const { field, products } = props;
  const value = products[field];
  return (
    <div className="form-group">
      <label htmlFor={field}>{field} </label>
      <input
        value={value}
        onChange={props.onChange}
        id={field}
        name={field}
        className="form-control"
      />
    </div>
  );
};
export default Input;
