import type { FormikProps } from "formik";
import type { RegisterFormValues } from "./Register";
import RegisterSocialButtons from "./RegisterSocialButtons";
import { useState } from "react";
import { Link } from "react-router-dom";

interface RegisterRightProps {
  formik: FormikProps<RegisterFormValues>;
}

const RegisterRight: React.FC<RegisterRightProps> = ({ formik }) => {
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    formik;
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="register-right">
      <div className="form-box">
        <div className="form-title">
          <h2>{islogin ? "Login" : "Register"}</h2>
          <h3>{islogin ? "Login" : "Sign up"} with</h3>
        </div>
        <RegisterSocialButtons />
        <p className="or-text">OR</p>
        <form className="register-form" onSubmit={handleSubmit}>
          {!islogin && (
            <div className="name-fields">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? "input-error" : ""
                  }
                />
                {touched.firstName && errors.firstName && (
                  <div className="error password-hint">{errors.firstName}</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? "input-error" : ""
                  }
                />
                {touched.lastName && errors.lastName && (
                  <div className="error password-hint">{errors.lastName}</div>
                )}
              </div>
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {touched.email && errors.email && (
            <div className="error password-hint">{errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {touched.password && errors.password && (
            <div className="error password-hint">{errors.password}</div>
          )}
          {!islogin && (
            <div>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="terms"
                  checked={values.terms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  By clicking 'Register' you agree to our{" "}
                  <a href="#">Terms & Conditions</a>,{" "}
                  <a href="#">Privacy Notice</a>.
                </span>
              </label>
              {touched.terms && errors.terms && (
                <div className="error">{errors.terms}</div>
              )}
            </div>
          )}

          <label className="checkbox">
            <input
              type="checkbox"
              name="keepLoggedIn"
              checked={values.keepLoggedIn}
              onChange={handleChange}
            />
            <span>
              Keep me logged in - applies to all log in options below.{" "}
              <a href="#">More info</a>
            </span>
          </label>

          <Link to="/">
            <button type="submit" className="register-btn">
              {islogin ? "LOGIN " : "REGISTER "}→
            </button>
          </Link>
          <p className="already">
            {islogin ? "create an " : "already have "}
            account
            {islogin ? (
              <span onClick={() => setIslogin(false)}>Register</span>
            ) : (
              <span onClick={() => setIslogin(true)}>Login</span>
            )}
          </p>
          {islogin && (
            <p className="login-conditions">
              By clicking 'Log In' you agree to our website KicksClub{" "}
              <span>Terms & Conditions</span>,
              <span> Kicks Privacy Notice </span>
              and
              <span> Terms & Conditions.</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterRight;
