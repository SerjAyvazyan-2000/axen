import { NavLink, useLocation } from "react-router-dom";
import "./sigin.scss";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";
import PasswordInput from "../../../ui/input/passwordInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SiginUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const [formData, setFormData] = useState({
    email: "",
    telegram: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    telegram: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", telegram: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Enter email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Incorrect email";
      valid = false;
    }

    if (!formData.telegram) {
      newErrors.telegram = "Enter telegram";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Enter password";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registration successful ✅");

      setFormData({
        email: "",
        telegram: "",
        password: "",
      });

      navigate("/sigIn");
    }
  };

  return (
    <section className="authorization-section">
      <div className="authorization-container">
        <NavLink to={"/"} className=" G-center">
          <img src="/logo.svg" alt="" />
        </NavLink>

        <div className="authorization-body">
          <NavLink
            to={from === "signIn" ? "/sigIn" : "/"}
            className="a-back-link G-align-center"
          >
            <i className="icon icon-arrowLeft"></i>
            <span>Back</span>
          </NavLink>
          <h3 className="a-title">SIgn Up</h3>

          <form className="a-form" action="">
            <div className="a-form-input-inputs G-flex-column">
              <Input
                required
                placeholder="example@mail.com"
                name="email"
                variant="gray-input"
                title="Email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                errorText={errors.email}
              />

              <Input
                required
                placeholder="durove"
                name="telegram"
                variant="gray-input"
                title="Telegram"
                type="text"
                value={formData.telegram}
                onChange={handleChange}
                error={!!errors.telegram}
                errorText={errors.telegram}
              />

              <PasswordInput
                required
                placeholder="****************"
                name="password"
                variant="gray-input"
                title="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                errorText={errors.password}
              />
            </div>

            <div className="authorization-actions">
              <div className="authorization-btn">
                <Button
                  onClick={handleSubmit}
                  variant={"button-gradient"}
                  text={"SIgn Up"}
                />
              </div>
              <p>
                Have an account? <NavLink state={{ from: "signUp" }} to="/sigIn">Sign in</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SiginUp;
