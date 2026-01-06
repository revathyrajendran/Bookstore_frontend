import React, { useContext, useEffect, useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast} from 'react-toastify'
import { getBooksUploadedByUsers } from '../../Services/allApis'
import { searchBookContext } from '../../contextAPI/ContextShare'

const Home = () => {
  //this state holds data of books uploaded by users that can bee seen in home as users logs in, we expect an array having recent 4 books because of limit(4)
  const [homeBooks, setHomeBooks] = useState([])

  //for navigation
  const navigate = useNavigate()

  //{searchkey,setSearchKey} and searchBookContext are defined as an object in ContextShare.jsx
  const {searchkey,setSearchKey} = useContext(searchBookContext)
  
  //to load recent 4 books uploaded by users as a side effect 
  useEffect(()=>{
    //whenever a page is open , searchkey must not have a value
    setSearchKey("")
    getHomeBooks()

  },[])
  //console.log(homeBooks);

  //search books in Home page
  const searchBook=()=>{
        if(!searchkey){
             toast.warning("Please provide the Book title you need to search !!!")
        } else if(!sessionStorage.getItem("token")){
          toast.warning("Please Login to serach books!!")
          setTimeout(() => {
            navigate('/login')
          }, 2500);
        }else if(sessionStorage.getItem("token") && searchkey){
          navigate('/all-products')
        }
        else{
          toast.error(" Something went wrong!!!!")
        }
  }
  

  const getHomeBooks = async ()=>{
    try{
       const result = await getBooksUploadedByUsers()
       //if api result is 200 is checked
       if(result.status==200){
        //then data in the result is updated in the arrayt
        setHomeBooks(result.data)
       }
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
    <Header/>
      {/*Landing */}
      <div style={{height:'500px'}}  className="  flex flex-col text-white  bg-center text-white justify-center items-center bg-[url(/landing.jpg)] ">
       
           <div  style={{height:'500px', backgroundColor:'rgba(0,0,0,0.5'}} className=" p-5 w-full flex flex-col justify-center items-center">
             <h1 className='text-6xl font-bold '>Wonderful Gifts</h1>
             <p className='font-bold'>Give your family and friends a book📖</p>
          
                 {/*search : searchBook is defined with an argument , so here no argument is passed */}
               <div className="mt-9">
                  <input type="text" className='bg-white p-3 w-100 rounded-3xl placeholder-gray-500 text-black' placeholder='Search Products' onChange={e=>setSearchKey(e.target.value)} />
                  <FontAwesomeIcon onClick={searchBook} icon={faMagnifyingGlass} style={{marginLeft:'-40px'}} className='text-gray-500' />
                 </div>
           </div>
     
      </div>


      {/*Arrival */}
     <section className=' md:px-40 p-5 flex flex-col text-center'>
           <h1 className=" text-2xl  font-bold">NEW ARRIVALS</h1>
           <h1 className=" text-3xl ">Explore Our latest Collections</h1>
           
           {/*Books  in latest collections */}
           <div className="md:grid grid-cols-4 mt-5 w-full">
            {/* to be repeated based on homeBooks Array */}
              
               {
                homeBooks.length>0?
                homeBooks?.map((book,index)=>(
                <div key={index} className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="uploadedbook" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">{book?.author}</p>
                    <p>{book?.title}</p>
                    <p>$ {book?.discountPrice}</p>
                    
            
                  </div>
                </div>
                ))
                
                :
                <p className='text-bold text-2xl'>Loading...........</p>
                }

                 
          
           </div>

           {/*Explore more button */}
           <div className="text-center my-8">
            <Link to={'/all-books'} className='p-3 border rounded text-xl font-bold text-white bg-blue-800'> Explore More...</Link>
           </div>
   
     </section>
      
      {/* Author*/}
      <section className='md:grid grid-cols-2 my-5 md:px-40 p-5 gap-10'>
          <div className="text-center">
            <h1 className='text-lg font-medium'>FEATURED AUTHORS</h1>
            <h2 className='text-xl mb-5'>Captivated with every words</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas praesentium accusamus corporis neque odio, harum rem aliquid, laudantium minus doloremque aut animi explicabo, quaerat error libero culpa qui maiores.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet, doloremque voluptates mollitia explicabo excepturi quaerat impedit obcaecati quibusdam voluptas est nesciunt velit, fuga hic cumque similique quia, itaque sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <br />
            <br />
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas praesentium accusamus corporis neque odio, harum rem aliquid, laudantium minus doloremque aut animi explicabo, quaerat error libero culpa qui maiores.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet, doloremque voluptates mollitia explicabo excepturi quaerat impedit obcaecati quibusdam voluptas est nesciunt velit, fuga hic cumque similique quia, itaque sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <div className='p-5 flex justify-center items-center'>
            <img     src="https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/92edff4c-395f-4cc7-8041-828999229e11/DSC05441.jpg" alt="author" />
          </div>
      </section>
      
      
      {/*Testimonial*/}
      <section className='md:px-40 p-5 flex flex-col text-center'>
         <h1 className=" text-2xl  font-bold">TESTIMONIALS</h1>
           <h1 className=" text-3xl ">See what others are saying</h1>

           <div className="my-5 flex flex-col justify-center items-center">
            <img height={'200px'} width={'200px'} style={{borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="user" />
            <h4 className=' mt-3'>Ann Joseph</h4>
            <p className='mt-5 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ipsum deleniti nobis quas eius adipisci, modi assumenda possimus doloremque dignissimos provident beatae obcaecati exercitationem non est et ut in nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad enim voluptatem sit voluptates consectetur mollitia dolores, velit qui veniam totam porro culpa eius asperiores. Iusto in odit corrupti eum porro.</p>
           </div>

      </section>
      
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

export default Home