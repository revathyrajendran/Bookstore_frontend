import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Adminheader from '../../admin/acomponents/Adminheader'
import Adminsidebar from '../acomponents/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { Link } from 'react-router-dom'


const Careeradmin = () => {
  //job list
  const[jobListStatus,setJobListStatus]=useState(true)
  const[listApplicationStatus,setListApplicationStatus]=useState(false)
  return (
   <>
        <Adminheader/>
          <div className="md:grid grid-cols-5 gap-2 ">
                      <div className="col-span-1">
                        <Adminsidebar/>
                      </div>
              
                      <div className="col-span-4">
                         <div className="p-10">
                             <h1 className="text-center text-3xl font-bold">
                               Careers
                             </h1> 
                             {/*two tabs */}
                              <div className="flex justify-center items-center my-5 font-medium text-lg">
                                <p onClick={()=>{setJobListStatus(true); setListApplicationStatus(false); }} className={jobListStatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'} > Job Post</p>
                                <p onClick={()=>{setListApplicationStatus(true); setJobListStatus(false)}} className={listApplicationStatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'}> Applications</p>
                                
                               </div>
                  {/*Contents */}
                    {/*Job post  also duplication*/}
          
                      {          
                        jobListStatus &&
                    <div>
                     {/* search and apply button */}
                      <div className="flex my-5 justify-between items-center my-10">
          {/* search button */}
                  <div>
                    <input type="text" className="p-2 rounded text-black border-gray-200 placeholder-gray-600 border w-100 shadow" placeholder='Search By Job Title' />
                    <button className="bg-blue-900 text-white p-2">Search</button>
                  </div>
           {/* Add button */}
                  <div>
                    Add
                  </div>

                       </div>
                       {/* job to be duplicated */}
                       <div className="border border-gray-200 p-5 shadow my-5">
               <div className="flex mb-5 ">
                  <div className='w-full' >
                        <h1 className="text-xl font-bold">Hr Assistant</h1>
                        <hr />
                  </div>
                   <button onClick={()=>setModalStatus(true)} className="bg-red-700 text-white ms-5 p-2 flex items-center">Delete <FontAwesomeIcon className='ms-1' icon={faTrash} /></button>
               </div>
               {/*Job description */}
               <p className='text-lg text-blue-700 my-2'> <FontAwesomeIcon  icon={faLocationDot} />Kochi</p>
               <p className='text-lg my-2'> Job Type: Full time</p>
               <p className='text-lg my-2'> Salary : 20000-30000/month</p>
               <p className='text-lg my-2'> Qualification :  </p>
               <p className='text-lg my-2'> Experience : 1-2 years</p>
              <p className='text-lg my-2'> Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident accusamus exercitationem adipisci, eius libero inventore, doloremque officia veritatis cum et praesentium minima at atque fugit doloribus molestiae consectetur? Et. </p>
                

        </div>
           
                    </div> 
          
                      }   
                      {/*Applications */}
                   
                   {          
                        listApplicationStatus &&
                       <div className='p-10 overflow-x-hidden'>
                            {/*Applications table */}
                        <table className="my-5 shadow w-full">
                              <thead>
                                <tr>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">SL No</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Job Title</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Name</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Qualification</th>
                                    <th className= " p-3 text-white bg-blue-800 text-center border border-gray-600">Email id</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Phone</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Cover Letter</th>
                                    <th className=" p-3 text-white bg-blue-800 text-center border border-gray-600">Resume</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td className="border border-gray-500 p-3 text-center">1</td>
                                  <td className="border border-gray-500 p-3 text-center">Front End Developer</td>
                                  <td className="border border-gray-500 p-3 text-center">Max Miller</td>
                                  <td className="border border-gray-500 p-3 text-center">BCA</td>
                                  <td className="border border-gray-500 p-3 text-center">max@gmail.com</td>
                                  <td className="border border-gray-500 p-3 text-center">9034567890</td>
                                  <td className="border border-gray-500 p-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus voluptates nihil sapiente, sed facere officia ea molestiae. Tempore voluptates voluptatem ut velit laborum perspiciatis eaque, neque expedita odit possimus!</td>
                                  <td className="border border-gray-500 p-3 text-center">
                                    <Link className='text-blue-600 underline'> resume</Link>
                                  </td>
                                  
                                </tr>
                              </tbody>
                        </table>

                       </div>
                      }
          
                         </div>
                      </div>
                    </div>
        <Footer/>
        </>
  )
}

export default Careeradmin