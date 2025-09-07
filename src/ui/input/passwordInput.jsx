import { useState } from "react";
import "./input.scss";

const PasswordInput = ({
  value,
  onChange,
  placeholder,
  name,
  required,
  title,
  error,
  errorText,
  className,
  variant
}) => {
  const [realValue, setRealValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    let newValue;

    if (!visible) {
      if (inputValue.length > realValue.length) {
        newValue = realValue + inputValue.slice(-1);
      } else {
        newValue = realValue.slice(0, inputValue.length);
      }
    } else {
      newValue = inputValue;
    }

    setRealValue(newValue);

  
    onChange({
      ...e,
      target: {
        ...e.target,
        name,
        value: newValue,
      },
    });
  };

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
          name={name}
          placeholder={placeholder}
          required={required}
          type="text"
          value={visible ? realValue : "*".repeat(realValue.length)}
          onChange={handleChange}
        />

        <i
          onClick={() => setVisible((prev) => !prev)}
        //   className={`icon ${
        //     visible ? "icon-iconEyeOpen" : "icon-iconEyeClose"
        //   }`}
           className='icon icon-iconEyeClose'
        ></i>
      </label>

      {error && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default PasswordInput;
