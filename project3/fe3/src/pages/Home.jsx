import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainProvider'
import { Link } from 'react-router-dom'

function Home() {
const{addBasket}=useContext(MainContext)
    const [products, setProducts] = useState([])
    const [inp, setInp] = useState("")
    
    useEffect(() => {
        getAllProducts()
    }, [])
    
    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/employee/")
        const data=await res.json()
        setProducts(data)
    }

    function asc(value){
       setProducts(products.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))) 
    }
    function dsc(value){
        setProducts(products.toSorted((a,b) => (a[value] < b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0))) 
     }
  return (
    <div>
        <input type="text" name="" id="" placeholder='seach..'
        value={inp} 
        onChange={(e)=>{setInp(e.target.value)}}
        />
        <button onClick={()=>asc("age")}>asc</button>
        <button onClick={()=>dsc("age")}>dsc</button>
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

    {products
    // .filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
    .map((x)=>(
        <div style={{width:"200px",height:"200px",border:"1px solid black"}} key={x._id}>
<h2>{x.name}</h2>
<p>{x.age}</p>
<button onClick={()=>addBasket(x)} >add basket</button>
<button><Link to={`/detail/${x._id}`}>go to detail</Link></button>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Home