import "./textarea.scss";

const Textarea = ({
  className,
  placeholder,
  error,
  title,
  variant,
  name,
  required,
}) => {
  return (
    <label className={`textarea ${variant}  G-flex-column ${className} ${error ? 'error' : ''}`}>
      <span>
        {title}
        {required && <b>*</b>}
      </span>
      <textarea name={name} placeholder={placeholder} />
      {error &&  <p className="error-text">Please provide the link to your website</p>}

      
    </label>
  );
};

export default Textarea;
