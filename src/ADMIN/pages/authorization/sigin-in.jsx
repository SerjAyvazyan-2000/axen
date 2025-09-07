import { NavLink, useLocation } from "react-router-dom";
import "./sigin.scss";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";
import { useState, useEffect } from "react";
import PasswordInput from "../../../ui/input/passwordInput";
import { useNavigate } from "react-router-dom";

const SiginIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Enter email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Incorrect email";
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
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        alert("User not found. Register first!");
        navigate("/signUp");
        return;
      }

      const enteredEmail = formData.email.trim().toLowerCase();
      const savedEmail = savedUser.email.trim().toLowerCase();

      if (
        savedUser.email === formData.email &&
        savedUser.password === formData.password
      ) {
        alert("Login successful 🎉");
        navigate("/adminHome");
      } else {
        alert("Incorrect email or password");
      }
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
            to={from === "signUp" ? "/signUp" : "/"}
            className="a-back-link G-align-center"
          >
            <i className="icon icon-arrowLeft"></i>
            <span>Back</span>
          </NavLink>
          <h3 className="a-title">SIgn in</h3>

          <form className="a-form" action="">
            <div className="a-form-input-inputs G-flex-column">
              <Input
                required={true}
                placeholder={"example@mail.com"}
                name={"email"}
                variant={"gray-input"}
                title={"Email"}
                type={"text"}
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                errorText={errors.email}
              />

              <PasswordInput
                required={true}
                placeholder={"****************"}
                name={"password"}
                variant={"gray-input"}
                title={"Password"}
                type={"password"}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                errorText={errors.password}
              />
            </div>

            <div className="authorization-actions">
              <div className="authorization-btn">
                <Button
                  variant={"button-gradient"}
                  onClick={handleSubmit}
                  text={"SIgn in"}
                />
              </div>
              <p>
                No account?{" "}
                <NavLink state={{ from: "signIn" }} to={"/signUp"}>
                  Sign up
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SiginIn;
