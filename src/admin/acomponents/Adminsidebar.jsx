import { faBook, faGear, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'







const Adminsidebar = () => {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit flex text-center flex-col py-10'>
      <div className='flex justify-center'>
        <img style={{width:'100px', height:'100px', borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNPQxt8ZLNHXp6jkHGmadRYrCKGE53w9ufg&s" alt="admin profile" />
        </div>
     
      <h1 className="text-xl font-bold my-5">Admin Name</h1>
      {/*Filter */}

         <div className='md:text-left mx-auto mt-10' >
            <div className="mt-3">
              <Link to={'/admin-dashboard'}><FontAwesomeIcon icon={faHome} className='me-2' />Home</Link>
            </div>
  
            <div className="mt-3">
              <Link to={'/admin-resource'}> <FontAwesomeIcon icon={faBook} className='me-2' />Resources</Link>
              
              
            </div>
             <div className="mt-3">
               <Link to={'/admin-career'}> <FontAwesomeIcon icon={faGraduationCap} className='me-2' />Careers</Link>
              
            </div>
  
            <div className="mt-3">
               <Link to={'/admin-setting'}> <FontAwesomeIcon icon={faGear} className='me-2' /> Settings</Link>
              
             
            </div>
  
             
          </div>
   
   
    </div>
  )
}

export default Adminsidebar