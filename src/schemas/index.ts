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

export const productSchema = Yup.object({
  title: Yup.string()
    .min(3, "Product name must be at least 3 characters")
    .required("Product name is required"),
  summary: Yup.string()
    .min(10, "Description should be at least 10 characters")
    .required("Description is required"),
  category: Yup.string()
    .oneOf(["Sneaker", "Runner", "Casual"], "Invalid category")
    .required("Category is required"),
  sku: Yup.number()
    .typeError("SKU must be a number")
    .required("SKU is required"),
  regularPrice: Yup.number()
    .typeError("Price must be a number")
    .min(1, "Price must be greater than 0")
    .required("Regular price is required"),
  stockQuantity: Yup.number()
    .typeError("Stock quantity must be a number")
    .min(0, "Stock cannot be negative")
    .required("Stock quantity is required"),
  brandName: Yup.string().required("Brand name is required"),
  salesPrice: Yup.number()
    .typeError("Sale price must be a number")
    .min(0, "Sale price must be 0 or higher")
    .max(Yup.ref("regularPrice"), "Sale price cannot exceed regular price")
    .required("Sale price is required"),
  tags: Yup.array()
    .of(Yup.string().required())
    .default([])
    .required("At least one tag is required"),
  // brandName: Yup.string().notRequired(),
  // stockQuantity: Yup.number().notRequired(),
  // salesPrice: Yup.number().notRequired(),
  // tags: Yup.array().of(Yup.string()).notRequired(),
});
