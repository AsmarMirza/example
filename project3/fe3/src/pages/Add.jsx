import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Add() {

  async function addProduct(values) {
    const res = await fetch("http://localhost:3000/employee/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
  
  }
  return (
    <div>
      <Formik
        initialValues={{ name: "", age: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          age: Yup.number()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          addProduct(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <br />
          <Field name="name" type="text" />
          <br />
          <ErrorMessage name="name" />

          <label htmlFor="age">Age</label>
          <br />
          <Field name="age" type="number" />
          <br />
          <ErrorMessage name="age" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
