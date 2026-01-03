import React, { useEffect, useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast} from 'react-toastify'
import { getAllBooksApi } from '../../Services/allApis'





const Allproducts = () => {
  const [liststatus,setListStatus]=useState(false)
  //token of logged in user
  const[token,setToken]=useState("")
 //When user opens this page , the token of the user must be stored in token state

 //books when user clicks books from home page and is directed to allproducts page
 const[books,setBooks]=useState([])
 //just to see if we have no error
 console.log(books);
 
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const usertoken = sessionStorage.getItem("token")
      setToken(usertoken)
      //calling getAllBooksApi, when user clicks books from header of home page is directed to allproducts page wiuth search option also
      getAllBooks(usertoken)
    }
  },[])

  //fetch all books in all products page , redirected from Home page , when logged in user clicks books link from header of home page.
  const getAllBooks = async(usertoken)=>{
    const reqHeader = {
      //Token was fetched and set in the varibale , then used here
      "Authorization" :`Bearer ${usertoken}`
    }
    //error prone
    try{
      //fetch all books for logged in user , as soon as the page is reached to result
      const result = await getAllBooksApi(reqHeader)
      if(result.status == 200){
        setBooks(result.data)
      }
      else{
        console.log(result);
        //response if in 400, 5000 series comes in response
        toast.warning(result.response.data)
        
      }


    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    
   
    <>
     <Header/>
        {/*Conditional Rendering based on token expolre more is no user is logged in */}

      {
          token?
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

        {/*After filter , Books*/}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 gap-1 mt-5 md:mt-0">
                  
                  {
                    books.length>0?
                    books.map(book=>(
                      
             <div key={book?._id} className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="Uploaded Book Image" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">{book?.author.slice(0,20)}...</p>
                    <p>{book?.title.slice(0,20)}...</p>
                  <Link to={`/books/${book?._id}/view`} className='mt-2 bg-blue-800 text-white p-2 '>View Book</Link>

                    
            
                  </div>
                </div>
                    ))

                    :
                    <p className="text-bold text-lg">No Books To Show!.....</p>

                  }

                
                
                
          </div>
        </div>

        </div>
       
       </>
       :
       <div className='my-10 flex justify-center items-center flex-col min-h-50'>
           <img className='w-75' src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-53-216_512.gif" alt="lock" />
           <p className="font-bold text-xl">Please <Link to={'/login'}
            className='text-blue-700 font-bold italic underline'>Login</Link> To Explore more.....!</p>
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

export default Allproducts