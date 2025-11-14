import React from 'react'
import Footer from '../../Components/Footer'
import Adminheader from '../../admin/acomponents/Adminheader'
import Adminsidebar from '../acomponents/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Settingadmin = () => {
  return (
    <>
    <Adminheader/>
      <div className="md:grid grid-cols-5 gap-2 ">
        <div className="col-span-1">
          <Adminsidebar/>
        </div>

        <div className="col-span-4">
          <h1 className="text-2xl font-bold text-center my-5">Settings</h1>
          <div className="md:grid grid-cols-2 gap-5 mx-5 items-center">
            <div>
              <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, non praesentium? Dolor, modi! Assumenda reprehenderit cupiditate, exercitationem necessitatibus corrupti omnis consectetur ea modi a obcaecati! Debitis architecto aliquam eligendi fugiat.
              Eum porro ad, beatae suscipit blanditiis fuga fugiat dolorem sunt commodi architecto amet placeat. Consectetur maiores ullam officiis impedit, sunt inventore sint minima aperiam necessitatibus! Blanditiis asperiores nostrum illo quibusdam?
              </p>
               
               <p className='text-justify mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, non praesentium? Dolor, modi! Assumenda reprehenderit cupiditate, exercitationem necessitatibus corrupti omnis consectetur ea modi a obcaecati! Debitis architecto aliquam eligendi fugiat.
               
             </p>
            </div>
            {/*Profile editing part */}
            <div className=" rounded bg-blue-100 p-10 flex justify-center items-center  flex-col md:mt-10 mt-0">
               <input type="file" id='adminpic' className='hidden' />
                   <label htmlFor="adminpic" className='mb-3'>
                    <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNPQxt8ZLNHXp6jkHGmadRYrCKGE53w9ufg&s" alt="admin profile" />
                   <FontAwesomeIcon style={{marginLeft:'140px', marginTop:'-100px'}} className="bg-yellow-400 p-1 text-white rounded" icon={faPencil}  />
                   </label>
                   {/*Form */}
                   <div className="mb-3 w-full">
                      <input type="text" className="p-2 bg-white rounded text-black border-gray-200 placeholder-gray-600 border w-full shadow rounded" placeholder='Username' />
                   </div>
                   <div className="mb-3 w-full">
                      <input type="text" className="p-2 bg-white rounded text-black border-gray-200 placeholder-gray-600 border w-full shadow rounded" placeholder='Password' />
                   </div>
                   <div className="mb-3 w-full">
                      <input type="text" className="p-2 bg-white rounded text-black border-gray-200 placeholder-gray-600 border w-full shadow rounded" placeholder='Confirm password' />
                   </div>
                   <div className="mb-3 w-full flex justify-evenly">
                      <button className="bg-orange-600 text-white py-2 px-4 rounded">RESET</button>
                      <button className="bg-green-600 text-white py-2 px-4 rounded">UPDATE</button>
                   </div>
                  
            </div>
          
          
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Settingadmin