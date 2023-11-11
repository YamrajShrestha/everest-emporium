"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const home = () => (
  <div className="mx-auto">
    <Image
      className="mx-auto"
      src="/logo4.png"
      width={150}
      height={150}
      alt="Picture of the author"
    />
    <div className="flex justify-center font-bold">Login Page</div> <br></br>
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center mx-auto">
          <Field
            name="username"
            placeholder="Enter username"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          <Field
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
          />{" "}
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br></br>
          Don't have an account yet ?{" "}
          <Link href="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>{" "}
          <br></br>
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default home;
