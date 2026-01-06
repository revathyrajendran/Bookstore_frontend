import React, { useEffect, useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify'
import { getASingleBookApi } from '../../Services/allApis'
import SERVERURL from '../../Services/ServerURL'

const Viewbook = () => {
  const[modalstatus,setModalStatus]= useState(false)

  //To view a single book, we need the id of the particular book : <Route path='books/:id/view' element={<Viewbook/>} /> this id value. So destructuring id value . Useparams is used to get dynamic Id.
  const {id} = useParams()
  //state to hold book details - only one book , otherwise array of many objects for multiple books.
  const[book,setBook]=useState({})

  //to check if I am getting the needed book detaila as per my API call
  console.log(book);
  
  //we need to see the book detail as soon as we click view book button in the all products page, so iuse essfect is used.
  useEffect(()=>{
     viewBookDetails() 
  },[])
  
  //to view a book , this function does not need to use id as an argument because, already we have declared the variable using use params, so can be accessed anywhere in the component.
  const viewBookDetails = async()=>{
    //Here usestate is not used for teoken , instead just if else statement is used.
    const token = sessionStorage.getItem("token")
    if(token){
      //defining reqheader
       const reqHeader = {
        "Authorization" : `Bearer ${token}`
       } 
       try{
        const result = await getASingleBookApi(id,reqHeader)
        if(result.status == 200){
             setBook(result.data)
        }
          // 401 is defined in jwtmiddleware
        else if(result.status == 401){
          toast.warning(result.response.data)
        }

       }
       catch(err){
        console.log(err);
        
       }

    }

  }
  return (
    <>
    <Header/>
    {/* Since book here is an object , because only on ebook detail is needed , so book?.title is enough, array of objects in products is beacuse of multiple books. */}
    <div className="md:m-10 m-5">
      <div className="border p-5 shadow border-gray-200">
        <div className="md:grid grid-cols-4 gap-5">
            <div className="col-span-1">
              <img className='w-full'  src={book?.imageUrl} alt="book" />
            </div>

            <div className="col-span-3">
              <div className='flex justify-between'>
                <h1 className="text-xl font-bold text-center">{book?.title}</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-500'><FontAwesomeIcon icon={faEye}/></button>
              </div>
              <p className=" my-10 text-blue-700">- - {book?.author}</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold ">Publisher : {book?.publisher}</p>
                <p className="font-bold ">Language : {book?.language}</p>
                <p className="font-bold ">No.of Pages : {book?.noOfPages}</p>
                <p className="font-bold ">Seller Mail :{book?.userMail}</p> 

                <p className="font-bold ">Real Price : {book?.Price}</p>
                <p className="font-bold ">ISBN: {book?.isbn} </p> 
                <p className="font-bold ">Category: {book?.category} </p> 
               
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">
                  {book?.abstract}
                </p>
              </div>
              {/*buttons */}
              <div className="flex justify-end">
                 <Link to={'/all-products'} className="bg-blue-900 text-white p-2 rounded me-3"><FontAwesomeIcon icon={faBackward}/>Back</Link>
                  <Link className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ {book?.discountPrice}</Link>
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
                            {/*images to be duplicated  , , uploadImg is an array in book object , img is each image vfrom uploadImg array */}
                            
                            {
                              book?.uploadImg?.length>0?
                              book?.uploadImg?.map(img=>(
                                   <img width={'250px'} height={'250px'} className='mx-3 '  src={`${SERVERURL}/uploads/${img}`} alt="book images" />  
                              ))
                              :
                              <p className='text-xl font-bold'>The seller has not uploaded any images!</p>
                            }
                            
                             

                           
                          </div>
                        </div>
                        

                    </div>

                  </div>
                </div>
        </div>
      }

    <Footer/>
     <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </>
  )
}

export default Viewbook