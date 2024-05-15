import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {
    const {basket,addBasket,decreaseBasket,removeBasket}=useContext(MainContext)
  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
    {basket.map((x)=>(
        <div style={{width:"200px",height:"200px",border:"1px solid black"}} key={x._id}>
<h2>{x.name}</h2>
<p>{x.age}</p>
<p>Count:{x.count}</p>
<button onClick={()=>addBasket(x)} >+</button>
<button onClick={()=>decreaseBasket(x)} >-</button>
<button onClick={()=>removeBasket(x)}>remove basket</button>
        </div>
    ))}

    </div>
  )
}

export default Basket