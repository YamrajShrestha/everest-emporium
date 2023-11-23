"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { message } from "antd";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async (values) => {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    messageApi.open({
      type: res.status == 200 ? "success" : "error",
      content: data.msg,
    });
    console.log(res);
  };
  return (
    <div className="mx-auto">
      <Image
        className="mx-auto"
        src="/logo4.png"
        width={150}
        height={150}
        alt="Picture of the author"
      />
      {contextHolder}
      <div className="flex justify-center font-bold text-white">
        Add Product List
      </div>{" "}
      <br />
      <Formik
        initialValues={{
          title: "",
          price: "",
          brand: "",
          category: "",
          description: "",
          image: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center items-center mx-auto">
            <Field
              name="title"
              placeholder="Enter Product title"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="price"
              placeholder="Enter product price"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <br />
            <Field
              name="brand"
              placeholder="Enter brand name"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
            <br />
            <Field
              name="category"
              placeholder="Enter product category"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}
            <br />
            <Field
              name="description"
              placeholder="Enter product description"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <Field
              name="image"
              placeholder="Upload product image"
              className="border border-gray-300 focus:outline-none focus:border-blue-500 rounded py-2 px-4"
            />{" "}
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <br />
            <br />
            <input type="file" />
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default home;
