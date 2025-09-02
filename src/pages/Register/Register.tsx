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
