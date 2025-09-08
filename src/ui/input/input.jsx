import "./input.scss";
import {useState} from 'react'
const Input = ({
  className,
  placeholder,
  error,
  type,
  title,
  variant,
  name,
  required,
  errorText,
  onChange,
  edit,
  value
}) => {



  return (
    <div
      className={`input-wrapper ${variant}  G-flex-column ${className} ${
        error ? "error" : ""
      }`}
    >
      <span>
        {title}
        {required && <b>*</b>}
      </span>
      <label className='input-label'>
        <input
          autoComplete="off"
          onChange={onChange}
          name={name}
           type={type}
          placeholder={placeholder}
          value={value}
        />
        {type === "password" &&  <i className="icon icon-iconEyeClose"></i>}
        {edit && <i  className="icon icon-edit"></i>}
      </label>

      {error && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
