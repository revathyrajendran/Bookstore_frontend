import React, { useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'



const Careers = () => {
  const[modalstatus,setModalStatus]= useState(false)
  return (
    <>
    <Header/>
    <div className='md:px-40 p-5 my-5'>
      <div className=' text-center my-5'>  
      <h1 className="text-3xl font-bold mb-4 ">Careers</h1>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veniam iste, vero magni cumque, dolor illo labore, expedita at asperiores ut! Velit odio dolores totam eius alias nostrum, hic ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis voluptatibus atque non impedit commodi veritatis porro eligendi placeat culpa vitae eos accusamus ea, deserunt repudiandae corporis beatae, veniam nesciunt.</p>
      </div>

      {/*Current openings and search */}
      <div className="my-5">
        <h1 className="text-2xl font-bold">Current Openings</h1>
         {/*search bar */}
        <div className="flex justify-center items-center my-10">
          <div className="flex my-5">
           <input type="text" className="p-2 rounded text-black border-gray-200 placeholder-gray-600 border w-100 shadow" placeholder='Job Title' />
           <button className="bg-green-900 text-white p-2">Search</button>
        </div>

        </div>
        {/*Jobs to be duplicated */}
        <div className="border border-gray-200 p-5 shadow my-5">
               <div className="flex mb-5 ">
                  <div className='w-full' >
                        <h1 className="text-xl">Hr Assistant</h1>
                        <hr />
                  </div>
                   <button onClick={()=>setModalStatus(true)} className="bg-green-900 text-white ms-5 p-2 flex items-center">Apply <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button>
               </div>
               {/*Job description */}
               <p className='text-lg my-2'> <FontAwesomeIcon  icon={faLocationDot} />Kochi</p>
               <p className='text-lg my-2'> Job Type: Full time</p>
               <p className='text-lg my-2'> Salary : 20000-30000/month</p>
               <p className='text-lg my-2'> Qualification :  </p>
               <p className='text-lg my-2'> Experience : 1-2 years</p>
              <p className='text-lg my-2'> Description : </p>
                

        </div>
      </div>

    </div>
    {/*Modal */}
          {
            modalstatus &&
            <div className='relative z-10 overflow-y-auto' >
                    <div className="bg-gray-500/75 fixed inset-0 ">
                      <div className=" flex justify-center items-center min-h-screen scroll-auto">
                        <div  className=' bg-white rounded-2xl w-150  '>
                          {/*Modal header */}
                          <div className='bg-black text-white flex justify-between items-center p-3 text-xl'>
                            <h3>Application Form</h3>
                            <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
                          </div>
                           {/*Modal body */}
      
                            <div className='relative p-5'>
                              <div className="md:grid grid-cols-2 gap-x-3">
                                <div className="mb-3">
                                  <input type="text" className="border placeholder-gray-600 bg-white p-2 rounded w-full text-black" placeholder=' Full Name' />
                                </div>
                              
                                <div className="mb-3">
                                  <input type="text" className="border placeholder-gray-600 bg-white p-2 rounded w-full text-black" placeholder='Qualification' />
                                </div>
                                
                                <div className="mb-3">
                                  <input type="text" className="border placeholder-gray-600 bg-white p-2 rounded w-full text-black" placeholder='Email id' />
                                </div>
                                
                                <div className="mb-3">
                                  <input type="text" className="border placeholder-gray-600 bg-white p-2 rounded w-full text-black" placeholder='Phone ' />
                                </div>

                                <div className="col-span-2">
                                  <textarea type="text" className=" mb-5 border placeholder-gray-600 bg-white p-2 rounded w-full text-black" placeholder='Cover Letter ' />
                                </div>

                                 <div className="mb-3 col-span-2 flex flex-col text-gray-500">
                                  <label htmlFor="">Resume</label>
                                  <input type="file" className='w-full  border rounded file:bg-gray-400 file:p-2'  />
                                </div>
                                
                              </div>
                            </div>
                             {/*Modal footer */}
                              
                              <div className="bg-gray-200 p-3  w-full flex justify-end">
                                <button className="bg-gray-700 text-white py-2 px-3 mx-3">Reset</button>

                                <button className="bg-blue-600 text-white py-2 px-3 mx-3">Submit</button>
                                   
                              </div>
                            
    
                        </div>
    
                      </div>
                    </div>
            </div>
          }
    
    <Footer/>
    </>
  )
}

export default Careers