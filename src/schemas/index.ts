import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Enter valid first name")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Enter valid first name")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, "Please a Strong Password ")
    .required("Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept Terms & Conditions"),
  keepLoggedIn: Yup.boolean(),
});
