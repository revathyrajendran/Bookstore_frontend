import React, { useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Viewbook = () => {
  const[modalstatus,setModalStatus]= useState(false)
  return (
    <>
    <Header/>
    <div className="md:m-10 m-5">
      <div className="border p-5 shadow border-gray-200">
        <div className="md:grid grid-cols-4 gap-5">
            <div className="col-span-1">
              <img className='w-full'  src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book" />
            </div>

            <div className="col-span-3">
              <div className='flex justify-between'>
                <h1 className="text-xl font-bold text-center">Title</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-500'><FontAwesomeIcon icon={faEye}/></button>
              </div>
              <p className=" my-10 text-blue-700">- Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold ">Publisher : demo</p>
                <p className="font-bold ">Language : demo</p>
                <p className="font-bold ">No.of Pages : demo</p>
                <p className="font-bold ">Seller Mail : demo</p>
                <p className="font-bold ">Real Price : demo</p>
                <p className="font-bold ">ISBN: demo</p>
               
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum, odit provident est fugiat cupiditate repellat non minus dolore, eaque consectetur ut facere minima quod fuga tempora delectus, officiis aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quis incidunt suscipit quidem. Perspiciatis commodi pariatur mollitia accusamus, non nobis repudiandae? Hic doloremque blanditiis facilis nobis beatae officiis rerum debitis!
                </p>
              </div>
              {/*buttons */}
              <div className="flex justify-end">
                 <Link to={'/all-books'} className="bg-blue-900 text-white p-2 rounded me-3"><FontAwesomeIcon icon={faBackward}/>Back</Link>
                  <Link className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ 123</Link>
              </div>

            </div>
        </div>
      </div>
    </div>

      {/*Modal */}
      {
        modalstatus &&
        <div className='relative z-10 overflow-y-auto' >
                <div className="bg-gray-500/75 fixed inset-0 ">
                  <div className=" flex justify-center items-center min-h-screen scroll-auto">
                    <div  className=' bg-white rounded-2xl w-100 md:w-250 '>
                      <div className='bg-black text-white flex justify-between items-center p-3'>
                        <h3>Books Images</h3>
                        <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
                      </div>
  
                        <div className='relative p-5'>
                           <p className='text-blue-600 '>
                           <FontAwesomeIcon  className='me-2' icon={faCamera}/> Camera click of the book in the hands of seller
                           </p>
                           
                           <div className="md:flex flex-wrap my-4">
                            {/*images to be duplicated */}
                            <img width={'250px'} height={'250px'} className='mx-3 '  src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book images" />
                             <img width={'250px'} height={'250px'} className='mx-3 '  src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book images" />
                              <img width={'250px'} height={'250px'} className='mx-3 '  src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book images" />

                           
                          </div>
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

export default Viewbook