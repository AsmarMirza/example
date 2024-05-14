import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams,useNavigate  } from "react-router-dom";
function Update() {

    const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    updateProduct();
  }, []);

  async function updateProduct(values) {
    const res = await fetch("http://localhost:3000/Project/" + id, {
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      {products && (
        <Formik
          initialValues={{
            image: products.image,
            name: products.name,
            title: products.title,
            price: products.price,
          }}
          validationSchema={Yup.object({
            image: Yup.string()
              .max(200, "Must be 15 characters or less")
              .required("Required"),
            name: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            title: Yup.string()
              .max(100, "Must be 20 characters or less")
              .required("Required"),
            price: Yup.number()
              .max(20000, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            updateProduct(values);
            navigate("/admin");
          }}
        >
          <Form>
            <label htmlFor="image">Image</label>
            <br />
            <Field name="image" type="text" />
            <br />
            <ErrorMessage name="image" />

            <label htmlFor="name"> Name</label>
            <br />
            <Field name="name" type="text" />
            <br />
            <ErrorMessage name="name" />

            <label htmlFor="title">Title</label>
            <br />
            <Field name="title" type="text" />
            <br />
            <ErrorMessage name="title" />

            <label htmlFor="price">Price</label>
            <br />
            <Field name="price" type="text" />
            <br />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      )}
    </div>
  );
}

export default Update;
