import React, { useContext } from 'react'
import { BasketContext } from '../context/basketProvider'
import { Helmet } from 'react-helmet-async'

function Basket() {
    const {basket,decreaseBasket,removeBasket,addBasket}=useContext(BasketContext)
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
         <Helmet>
        <title>Basket page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        {basket.map((x)=>(
    <div style={{width:"300px",border:"1px solid black",textAlign:"center"}} key={x.id}>
        <img style={{width:"100%",height:"250px"}} src={x.image} alt="" />
        <h4>{x.name}</h4>
        <p>{x.title}</p>
        <h5>{x.price}$</h5>
        <p>Count:{x.count}</p>
    <button onClick={()=>addBasket(x)}>+</button>
    <button onClick={()=>decreaseBasket(x)}>-</button>
    <button onClick={()=>removeBasket(x)}>remove basket</button>
    </div>
))}
    </div>
  )
}

export default Basket