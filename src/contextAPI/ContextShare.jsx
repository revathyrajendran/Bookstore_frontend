import React, { createContext, useContext, useState } from 'react'

//this is created outside function to make it available to all different component. createContext is used
export const searchBookContext = createContext("")

//the profile of the user in header as well as profile page has to be updated at the same time .The updated profile must load automatically without the user refreshing the page.
export const userProfileDetailsUpdateContext = createContext("")


//children is predefined

function ContextShare({children}) {
     //THis data has to be shared
     const[searchkey,setSearchKey]=useState("")

     //the data to be shared to header and profile page from edit page
     const[userEditedProfile,setUserEditedProfile]=useState({})
     
//value here accepts only objects, so yellow braces, now since the state is a part of js,blue braces so two braces {{}}
  return (
   
    <searchBookContext.Provider value={{searchkey,setSearchKey}}>
      <userProfileDetailsUpdateContext.Provider value={{userEditedProfile,setUserEditedProfile}}>
                     {children}
      </userProfileDetailsUpdateContext.Provider>
    </searchBookContext.Provider>
  )
}

export default ContextShare