import React, { useContext, useEffect, useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast} from 'react-toastify'
import { getAllBooksApi } from '../../Services/allApis'
import { searchBookContext } from '../../contextAPI/ContextShare'


const Allproducts = () => {
  //here allcategories keep categories of books. But we dont know what exact category book a user uploads, so categories must be unique. So tempArray was declared
  //For search , we have not created any separate function , see getAllBooks.
  const [liststatus,setListStatus]=useState(false)
  //token of logged in user
  const[token,setToken]=useState("")
 //When user opens this page , the token of the user must be stored in token state
 
 //books when user clicks books from home page and is directed to allproducts page
 const[books,setBooks]=useState([])

 //temporary book array for filtering
 const[tempBooks,setTempBooks] = useState([])
console.log(books);

 //array to keep categories for filtering : because writing code for all categories is a difficut task here
 const[allCategories,setAllCategories]=useState([])
console.log(allCategories);

//search data using context
const {searchkey,setSearchkey} = useContext(searchBookContext)

 
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const usertoken = sessionStorage.getItem("token")
      setToken(usertoken)
      //calling getAllBooksApi, when user clicks books from header of home page is directed to allproducts page wiuth search option also
      getAllBooks(usertoken)
    }
  },[searchkey])

  //fetch all books in all products page , redirected from Home page , when logged in user clicks books link from header of home page.
  const getAllBooks = async(usertoken)=>{
    const reqHeader = {
      //Token was fetched and set in the varibale , then used here
      "Authorization" :`Bearer ${usertoken}`
    }
    //error prone
    try{
      //fetch all books for logged in user , as soon as the page is reached to result . Searchkey initailly an emty string
      const result = await getAllBooksApi(searchkey,reqHeader)
      if(result.status == 200){
        setBooks(result.data)
        //for filter
        setTempBooks(result.data)
        //so inside tempCategory , we need to hold categories , because otherwise all these categories will appear in the sidebar : eg: fiction fiction . 
        const tempCategory= result.data.map(item=>item.category)
        //console.log(tempCategory);
        
        //temparray to hold temporaray category or categories of books sold by user
        const tempArray = [...new Set(tempCategory)]
        
        //if any categoty of books now uploaded by the user is not in the tempArray , then it is pushed or created
        //tempCategory.forEach(item=>!item.includes(tempArray) && tempArray.push(item) )
        console.log(tempArray);
        
 
        setAllCategories(tempArray)
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

  //To filter and see books sold based on their category , category is the argument here
  const filterBooks =(category) =>{
     //filtered books must also be in the books array, so filtering it because filter gives results that only satisfy a condition, each book in books is item here, lowercase to mak speelings of filter category and argument category the same. setBooks because we need to see filtered books in all products page itself and books were holding every books, now also filtered books. The page will display all books if user has not applied any filter.
     if(category==="No-Filter"){
        //to tackle token issue
        setBooks(tempBooks)
     }else{
      //beacuse of teken issue, we have created a tempbooks and used it for filtering purpose
        setBooks(tempBooks?.filter(item=>item.category.toLowerCase().includes(category.toLowerCase())))
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
           <input type="text" value={searchkey} className="p-2 rounded text-black border-gray-200 placeholder-gray-600 border w-100 shadow" placeholder='Search by titles' onChange={e=>setSearchkey(e.target.value)} />
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
           
          {  
              allCategories?.length>0 &&
              allCategories?.map((category,index)=>(
                 <div key={index} className="mt-3">
              <input type="radio" name='filter' id={category} onClick={()=>{filterBooks(category)}} />
              <label className='ms-3' htmlFor={category} > {category}</label>
             </div>
              ))

            }
            
            <div className="mt-3">
              <input type="radio" name='filter' id='nofilter' onClick={()=>{filterBooks("No-Filter")}} />
              <label className='ms-3' htmlFor="nofilter" >No-Filter</label>
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