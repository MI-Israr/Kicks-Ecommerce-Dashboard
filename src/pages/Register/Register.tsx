import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import "./Register.css";
import RegisterLeft from "./RegisterLeft";
import RegisterRight from "./RegisterRight";
import type { InferType } from "yup";

export type RegisterFormValues = InferType<typeof registerSchema>;

function Register() {
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
      keepLoggedIn: false,
    },
    validationSchema: registerSchema,
    onSubmit: (values: RegisterFormValues) => {
      console.log("Form Data:", values);
      alert("Registration successful!");
    },
  });

  return (
    <div className="register-container">
      <RegisterLeft />
      <RegisterRight formik={formik} />
    </div>
  );
}

export default Register;

{
  /* <div className="register-left">
  <img className="logo" src={logo} alt="Logo" />
</div> */
}
{
  /* <div className="register-right">
  <div className="form-box">
    <div className="form-title">
      <h2>Register</h2>
      <h3>Sign up with</h3>
    </div>

    <div className="social-buttons">
      <button className="social-btn">
        <img className="icon" src={google} alt="Google" />
      </button>
      <button className="social-btn">
        <img className="icon" src={apple} alt="Apple" />
      </button>
      <button className="social-btn">
        <img className="icon" src={facebook} alt="Facebook" />
      </button>
    </div>

    <p className="or-text">OR</p>

    <form className="register-form" onSubmit={formik.handleSubmit}>
      <div className="name-fields">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.firstName && formik.touched.firstName
                ? "input-error"
                : ""
            }
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error password-hint">
              {formik.errors.firstName}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.lastName && formik.touched.lastName
                ? "input-error"
                : ""
            }
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="error password-hint">
              {formik.errors.lastName}
            </div>
          )}
        </div>
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.errors.email && formik.touched.email ? "input-error" : ""
        }
      />
      {formik.touched.email && formik.errors.email && (
        <div className="error password-hint">{formik.errors.email}</div>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.errors.password && formik.touched.password
            ? "input-error"
            : ""
        }
      />
      {formik.touched.password && formik.errors.password && (
        <div className="error password-hint">
          {formik.errors.password}
        </div>
      )}

      <label className="checkbox">
        <input
          type="checkbox"
          name="terms"
          checked={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span>
          By clicking 'Register' you agree to our{" "}
          <a href="#">Terms & Conditions</a>,{" "}
          <a href="#">Privacy Notice</a>.
        </span>
      </label>
      {formik.touched.terms && formik.errors.terms && (
        <div className="error">{formik.errors.terms}</div>
      )}

      <label className="checkbox">
        <input
          type="checkbox"
          name="keepLoggedIn"
          checked={formik.values.keepLoggedIn}
          onChange={formik.handleChange}
        />
        <span>
          Keep me logged in - applies to all log in options below.{" "}
          <a href="#">More info</a>
        </span>
      </label>

      <button type="submit" className="register-btn">
        REGISTER →
      </button>
    </form>
  </div>
</div> */
}
