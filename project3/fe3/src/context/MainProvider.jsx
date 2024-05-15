import React, { useState } from 'react'
import { createContext } from 'react'



export const MainContext=createContext()
function MainProvider({children}) {
const [basket, setBasket] = useState([])
function addBasket(item){
    const index=basket.findIndex((x)=>x._id===item._id)
    if (index!==-1) {
        basket[index].count++
        setBasket([...basket])
    }
    else{
     setBasket([...basket,{...item,count:1}])   
    }
}

function decreaseBasket(item){
    const index=basket.findIndex((x)=>x._id===item._id)
    if (basket[index].count>1) {
        basket[index].count-- 
        setBasket([...basket])
    }
}
function removeBasket(item){
    setBasket(basket.filter((x)=>x._id!==item._id))
}
  return (
   <MainContext.Provider value={{addBasket,basket,decreaseBasket,removeBasket}}>

{children}

   </MainContext.Provider>
  )
}

export default MainProvider
