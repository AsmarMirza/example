import React, { useContext, useEffect, useState } from 'react'
import { BasketContext } from '../context/basketProvider'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Home() {
    const {addBasket}=useContext(BasketContext)
  const [products, setProducts] = useState([])
  const [inp, setInp] = useState("")
useEffect(() => {
async function getAllProducts(){
    const res=await fetch("http://localhost:3000/Project/")
    const data=await res.json()
    setProducts(data)

}
getAllProducts()
}, [])

function asc(value){
    setProducts(products.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value]> a[value]) ? -1 : 0)))
}
function dsc(value){
    setProducts(products.toSorted((a,b) => (a[value] < b[value]) ? 1 : ((b[value]< a[value]) ? -1 : 0)))
}

  return (
    <div>
          <Helmet>
        <title>Home page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <input type="text"
        placeholder='serach...'
  value={inp}
  onChange={(e)=>{setInp(e.target.value)}}
         />
         <button onClick={ ()=>asc("price")}>asc</button>
         <button onClick={()=>dsc("price")}>dsc</button>

    <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
{products
.filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
.map((x)=>(
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x._id}>
        <img style={{width:"100%",height:"250px"}} src={x.image} alt="" />
        <p>{x.title}</p>
        <h5>{x.price}$</h5>
        <button onClick={()=>addBasket(x)}>add basket</button>
        <button><Link to={`/detail/${x._id}`}>Go to Detail</Link></button>
    </div>
))}
    </div>
    </div>
  )
}

export default Home