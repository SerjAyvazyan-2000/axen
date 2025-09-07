import { Link } from "react-router-dom";
import "./merchant.scss";

const Steps = ({ curent, steps,error,success}) => {
  return (
    <div className="steps-block">
      <p>
        steps
        <span>{curent}</span>/{steps.length}
      </p>

      <div className="steps-list G-align-center">
        {steps.map((item, idx) => {
          const index = idx + 1 === curent;
          const completions = curent > idx + 1;
          return (
            <Link to={item.to}
              key={idx}
              className={`step-item ${success ? 'step-success' : ''} ${error ? 'step-error' : ''} ${
                index ? "active" : completions ? "active" : ""
              }`}
            ></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
