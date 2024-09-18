import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/auth/authAction";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // handle login
  //   handel verify
  const handleLogin = async (values) => {
    const loginRes = await login(values);
    {
      loginRes.access && (toast.success("Login Successfully"), navigate("/"));
    }
    {
      loginRes.message && toast.error(loginRes.message);
    }
  };
  return (
    <section className="flex justify-center mt-10">
      <Formik
        initialValues={{
          email: "",
          password: "Qwer1234@"
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("email is invalid")
            .required("email is required"),
          password: Yup.string()
            .matches(
              regex,
              "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
            )
            .required("password is required")
        })}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values);
          resetForm();
          console.log("values", values);
        }}
      >
        <Form className="w-1/2 bg-slate-200 p-5 rounded-md">
          {/* email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
            ></Field>
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="email"
            ></ErrorMessage>
          </div>
          {/* password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
            ></Field>
            <ErrorMessage
              className="text-red-600"
              component="div"
              name="password"
            ></ErrorMessage>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </section>
  );
}
