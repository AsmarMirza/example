import React, { createContext, useState } from 'react'



export const WishListContext=createContext()

function WishListProvider({children}) {
    const [wish, setWish] = useState([])

    function addWishList(item){
        const index=wish.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            
         setWish(wish.filter((x)=>x._id!==item._id))
        }
        else{
            setWish([...wish,{...item}])   
        }
    }
    
  return (
    <>
    <WishListContext.Provider value={{wish,addWishList}}>


        {children}
    </WishListContext.Provider>
    </>
  
  )

    }




export default WishListProvider