import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
  const [products, setProducts] = useState([])
const {id}=useParams()

useEffect(() => {
async function getProducts(){
    const res=await fetch("http://localhost:3000/Project/"+id)
    const data=await res.json()
    setProducts(data)
}
getProducts()
}, [])
  return (
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} >
       <Helmet>
        <title>Detail page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <img style={{width:"100%",height:"250px"}} src={products.image} alt="" />
    <h4>{products.name}</h4>
    <p>{products.title}</p>
    <h5>{products.price}$</h5>
</div>
  )
}

export default Detail