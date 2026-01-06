import React, { createContext, useContext, useState } from 'react'

//this is created outside function to make it available to all different component. createContext is used
export const searchBookContext = createContext("")


//children is predefined
function ContextShare({children}) {
     //THis data has to be shared
     const[searchkey,setSearchKey]=useState("")
     //value here accepts only objects, so yellow braces, now since the state is a part of js,blue braces so two braces {{}}
  return (
   
    <searchBookContext.Provider value={{searchkey,setSearchKey}}>{children}</searchBookContext.Provider>
  )
}

export default ContextShare