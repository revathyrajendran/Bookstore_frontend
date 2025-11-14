import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'


const Adminheader = () => {
  return (
   <>
       <div className="flex justify-between items-center p-3 md:px-40">
         {/*Logo */}
         <div className='flex items-center'>
           <img width={'50px'} height={'50px'} src="/bookstrore logo.png" alt="logo" />
           <h1 className="text-2xl font-bold ms-2 ">BOOKSTORE</h1>
         </div >
          
           {/*logout*/}
           <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
            {" "}
            <FontAwesomeIcon icon={faPowerOff }  className='me-1'  />Logout{""}

           </button>
         
         
          
       </div>
   
       
      <div className='bg-black rounded  p-3 w-full text-white '>
       
      {/* Marquee tag for content in motion */}
      <marquee behavior="" direction="">Welcome Admin !  you are all set to manage and monitor the system. Lets get to work!</marquee>
     
      </div>
       </>
  )
}

export default Adminheader