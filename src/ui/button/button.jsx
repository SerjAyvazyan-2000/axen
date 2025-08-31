import "./button.scss";

const Button = ({text}) => {
  return (
    <>
     <button className="button-gradient">{text}</button>
    </>
  );
};

export default Button;
