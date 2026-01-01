import React, { useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




const Allproducts = () => {
  const [liststatus,setListStatus]=useState(false)
  return (
    
   
    <>
     <Header/>

      <>    
      <div className="flex justify-center items-center flex-col my-6">
        <h1 className="text-3xl">Collections</h1>
        {/*Search */}
        <div className="flex my-5">
           <input type="text" className="p-2 rounded text-black border-gray-200 placeholder-gray-600 border w-100 shadow" placeholder='Search by titles' />
           <button className="bg-blue-900 text-white p-2">Search</button>
        </div>
      </div>

      {/*grid */}
      <div className="grid grid-cols-4 md:px-40 p-5">
        {/*Filter */}
        <div className="col-span-1 ">
          {/*Menu for small devices */}
          <div className="flex justify-between">
           <h1 className="font-semibold text-2xl">Filter</h1>
           <button onClick={()=>setListStatus(!liststatus)} className='md:hidden text-2xl'><FontAwesomeIcon icon={faBars} /></button>
          </div>
          {/*Filter options in 1 div */}
          <div className={liststatus?'block':'md:block hidden'}>
            <div className="mt-3">
              <input type="radio" name='filter' id='literary' />
              <label className='ms-3' htmlFor="literary" >Literary Fiction</label>
            </div>
  
            <div className="mt-3">
              <input type="radio" name='filter' id='philosophy' />
              <label className='ms-3' htmlFor="philosophy" >Philosophy</label>
              
            </div>
             <div className="mt-3">
              <input type="radio" name='filter' id='Romance' />
              <label className='ms-3' htmlFor="Romance" >Romance</label>
            </div>
  
            <div className="mt-3">
              <input type="radio" name='filter' id='Thriller' />
              <label className='ms-3' htmlFor="Thriller" > Mystery/Thriller</label>
            </div>
  
             <div className="mt-3">
              <input type="radio" name='filter' id='politics' />
              <label className='ms-3' htmlFor="politics" >Politics</label>
            </div>
  
            <div className="mt-3">
              <input type="radio" name='filter' id='help' />
              <label className='ms-3' htmlFor="help" >Self-help</label>
            </div>
  
            <div className="mt-3">
              <input type="radio" name='filter' id='auto' />
              <label className='ms-3' htmlFor="auto" >Auto/Biography</label>
            </div>
  
            <div className="mt-3">
              <input type="radio" name='filter' id='horror' />
              <label className='ms-3' htmlFor="horror" >Horror</label>
            </div>
  
            
            <div className="mt-3">
              <input type="radio" name='filter' id='nofilter' />
              <label className='ms-3' htmlFor="nofilter" >No Filter</label>
            </div>
          </div>
       
        </div>

        {/*After filter */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 gap-1 mt-5 md:mt-0">

             <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                  <Link to={'/books/id/view'} className='mt-2 bg-blue-800 text-white p-2 '>View Book</Link>

                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <Link to={'/books/id/view'} className='mt-2 bg-blue-800 text-white p-2 '>View Book</Link>

                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                 <Link to={'/books/id/view'} className='mt-2 bg-blue-800 text-white p-2 '>View Book</Link>

                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <Link to={'/books/id/view'} className='mt-2 bg-blue-800 text-white p-2 '>View Book</Link>
                    
            
                  </div>
                </div>
                
                
          </div>
        </div>

      </div>
      </>
     <Footer/>
    </>
   
  )
}

export default Allproducts