import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
function Add() {

    async function addProduct(values){
        const res=await fetch("http://localhost:3000/Project/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify(values)
            }
        )
    }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"100px"}}>   
    <Helmet>
        <title>Add page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
           <Formik
       initialValues={{ image: '', name: '',title: '',price: '' }}
       validationSchema={Yup.object({
        image: Yup.string()
           .max(200, 'Must be 15 characters or less')
           .required('Required'),
           name: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           title: Yup.string()
           .max(100, 'Must be 20 characters or less')
           .required('Required'),
           price: Yup.number()
           .max(20000, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values, { resetForm }) => {
       resetForm();
       addProduct(values)
       }}
     >
       <Form >
         <label htmlFor="image">Image</label><br />
         <Field name="image" type="text" /><br />
         <ErrorMessage name="image" />
 
         <label htmlFor="name"> Name</label><br />
         <Field name="name" type="text" /><br />
         <ErrorMessage name="name" />
 
         <label htmlFor="title">Title</label><br />
         <Field name="title" type="text" /><br />
         <ErrorMessage name="title" />

         <label htmlFor="price">Price</label><br />
         <Field name="price" type="text" /><br />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add