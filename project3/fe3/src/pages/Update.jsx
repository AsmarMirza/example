import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts()
  }, []);
  async function getAllProducts(){
    const res=await fetch("http://localhost:3000/employee/"+id)
    const data=await res.json()
    setProducts(data)
}

  async function updateProduct(values) {
    const res = await fetch("http://localhost:3000/employee/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setProducts(data);
  }

  return (
    <div>
     {products &&  <Formik
        initialValues={{ name: products.name, age: products.age }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          age: Yup.number()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          updateProduct(values);
          resetForm();
          navigate("/admin");
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
      </Formik>}
    </div>
  );
}

export default Update;
