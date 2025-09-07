import { Link } from 'react-router-dom';
import './button.scss';



const Button = ({ variant, text, href ,onClick}) => {
    if (href) {
        return (
            <Link to={href} className={`button-link  ${variant}`}>
                {text}
            </Link>
        );
    }

    return (
         <button onClick={onClick} className={`button ${variant}`}>{text}</button>
    );
};

export default Button;