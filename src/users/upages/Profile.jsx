import React, { useEffect, useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast} from 'react-toastify'
import { addBookApi, getAllUserPurchasedBooksAPI, getAllUserUploadBooksApi, removeUserUploadBookApi } from '../../Services/allApis'
import Editinprofile from '../ucomponents/Editinprofile'

const Profile = () => {
  //styles for three status
  //sellbooks
   const[Sellbookstatus,setSellBookStatus]=useState(true)
  //book status
   const[bookstatus,setBookStatus]=useState(false)
  //purchase history
  const[Purchasestatus,setPurchaseStatus]=useState(false)
  //state for book uploading , it has many fileds , so object and key copiesd from controller without usermail. and uploadImges from POSTMAN ,uploadImges:[] because it has multiple images.
  const[bookDetails, setBookDetails] = useState({
    title :"",author :"",noOfPages :"",imageUrl :"",Price :"",discountPrice :"",abstract :"",publisher :"",language:"",isbn:"",category :"",uploadImges:[]
  })
  console.log(bookDetails);
//there is an icon showing to upload image , on uploading image, this has tochange to uploaded image.
  const[preview,setPreview] = useState("")
  
  //to keep urls of all images
  const [previewList,setPreviewList]=useState([])

  //to submit the form , again token is required, this state will bring token here  , initially as an empty string
  const [token,setToken] = useState("")

  //to store all the books sold by the user
  const[userUploadedBooks, setUserUploadedBooks] = useState([])

  //delete book status
  const[deleteBookStatus,setDeleteBookStatus]=useState(false)

  //purchased book status
  const[purchasedBookStatus,setPurchasedBookStatus] = useState([])
  console.log(purchasedBookStatus);

  //in profile, users can see their profile pic as well as their name
  const[NameOfLoggedInUser,setNameOfLoggedInUser]=useState("")

  //to store DP of logged in user
  const[loggedInuserDP,setloggedInUserDp]=useState("")
  

  //every loggedin users will have a token stored in sessionstorage, so it must checked before hand also, useeffect is used for that purpose.
  useEffect(()=>{
    //checking if session storage has any token
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
      //user was an object with username as a key , but is stored in sessionstorage as string, it must be converted to object to use it here, so JSON.parse is used.
      const LoggedInUser = JSON.parse(sessionStorage.getItem("user"))
       //
      setNameOfLoggedInUser(LoggedInUser.username)
      setloggedInUserDp(LoggedInUser.profile)
    }
  },[])
  console.log(sessionStorage.getItem("token"));

  console.log(userUploadedBooks);
  

  //bookstatus , when user clicks books status in profile, then all books uploaded by the logged in user  appear , so useeffect is used.Now initialy bookstatus value is false, beacuse whilw we opwn profil, we can see sellbook from , only when user clicks, booskstautus , then only it opens, so here boostatus is the dependency and the fuction here is called based on that . Delete book status is also a dependency heref once user deletes uploaded book, with the updated list it must again be called. Siilarly for purchased status as well
  useEffect(()=>{
      if(bookstatus==true){
        getAllUserUploadedBooks()
      }else if(purchasedBookStatus== true){
        getAllUserPurchasedBooks()
      }
  },[bookstatus,deleteBookStatus,purchasedBookStatus])

  //Function to see user purchased books
  const getAllUserPurchasedBooks = async()=>{
    const reqHeader={
      "Authorization" :`Bearer ${token}`
    }
    try{
      const result = await getAllUserPurchasedBooksAPI(reqHeader)
      if(result.status==200){
             setPurchasedBookStatus(result.data)

      }
      else{
        console.log(result);
        
      }

    }catch(err){
      console.log(err);
      
    }
  }
  
  //Function to delete book from book ststau by the uploaded user from bookstatus
  const removeUploadedBook = async(bookId)=>{
    //token is needed here
    const reqHeader={
        "Authorization" : `Bearer ${token}`
    }
    try{
      const result = await removeUserUploadBookApi(bookId,reqHeader)
      if(result.status == 200){
            toast.success(result.data)
            setDeleteBookStatus(true)
      }
      else{
        console.log(result);
        
      }

    }catch(err){
      console.log(err);
      
    }
  }

  
  //grt all user uploaded books, bookstatus of profile component
  const getAllUserUploadedBooks=async()=>{
      //token
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await getAllUserUploadBooksApi(reqHeader)
        if(result.status == 200){
          setUserUploadedBooks(result.data)
        }
        else{
          console.log(result);
          
        }

      }catch(err){
        console.log(err);
        
      }
  }
  
  //upload image
  const handleUploadBookImage=(e)=>{
    //image as files is uploaded , so it is in event's file
    console.log(e.target.files[0]);
    //url is a predefined library in JS, the image url is given to url variable , fileArray is to get all imgaes, not just one image replacing other image and so on.
    const fileArray = bookDetails.uploadImges
    fileArray.push(e.target.files[0])
    setBookDetails({...bookDetails,uploadImges:fileArray})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    //console.log(url);
    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)
  }

  //function to handle clearing all fileds in handlesubmitt after adding books
  const handleReset =()=>{
    setBookDetails({
      //make the field empty 
       title :"",author :"",noOfPages :"",imageUrl :"",Price :"",discountPrice :"",abstract :"",publisher :"",language:"",isbn:"",category :"",uploadImges:[]
    })
    //prieveiw of one image and array of 3 images alsp empty
    setPreview("")
    //array which had 3 images
    setPreviewList([])
  }

  //function for submitting book
  const handleBookSubmit = async()=>{
    //destructuring the form
const {title, author, noOfPages, imageUrl, Price,discountPrice, abstract, publisher, language, isbn, category, uploadImges} = bookDetails
 //checking if all fields are filled
if(!title || !author || !noOfPages ||!imageUrl ||!Price || !discountPrice ||!abstract || !publisher || !language || !isbn || !category || uploadImges.length==0){
//alerting using toasdtify if feilds are not fields
toast.info("Please fill the form!!!")
}else{

//api call is made if all filds are filled
const reqHeader = {
  "Authorization" : `Bearer ${token}`
}
//FormData is a predefined class in JS
const reqBody = new FormData()
//data in booksetails has to be kept in from data, append method can be used , but it is not recommeneded here because bookdetails has 12 fields, calling append 12 times is difficult. so since bookDetails is an object, so everything in it can be accessed using key , and here for in loop is used fo this purpose
for (let key in bookDetails) {
  //this step is done because uploadimages was an array
        if (key != "uploadImges") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImges.forEach(img => {
            reqBody.append("uploadImges", img)
          })
        }
      }
//console.log(reqBody);
//to console form data
//for(var pair of reqBody.entries()){
  //console.log(pair[0]+ ', ' + pair[1]);
  
//}
try {
         //This api has token verification of user and multer middleware for uploading form data
        const result = await addBookApi(reqBody,reqHeader)
        console.log(result);
        if (result.status == 401) {
          toast.warning(result.response.data)
          //clear all field
         handleReset()
        } else if (result.status == 200) {
          //book stata was addede
          toast.success("Book added successfully!!!")
          //clear all field
          handleReset()
        } else {
          
          
          toast.error('Something went wrong!!!')
          //clear all field
          handleReset()
        }
      } catch (err) {
        console.log(err);
      }
}
  }
  

  return (
    <>
    <Header/>
         <div style={{height:'200px'}} className="bg-black">

         </div>
         <div style={{width:'230px', height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
              {/* conditional rendering for userDp, based on if there is any value in loggedInuserDP */}
          <img style={{width:'200px', height:'200px',borderRadius:'50%'}} src={loggedInuserDP==""?"https://cdn-icons-png.flaticon.com/512/149/149071.png" :loggedInuserDP}alt="profile pic of logged in user" />
         </div>
         {/*name,blue tick ,edit button */}
         <div className="md:flex justify-between px-20 mt-5">
                  <div className="flex justify-center items-center">
                            <h1 className="font-bold md:text-3xl text-2xl">
                             {NameOfLoggedInUser}
                            </h1>
                            <FontAwesomeIcon className='text-blue-500 ms-3 ' icon={faCircleCheck} />
                  </div>
                  {/*Editinprofile as a separate component */}
                     <Editinprofile/>
                     
         </div>
         {/* paragraph */}
         <p className="md:px-20 px-5 my-2 text-justify">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur beatae velit deleniti officia voluptatibus cum quibusdam? Quisquam dicta impedit ipsam autem rem neque fugiat, veritatis, labore delectus, asperiores voluptas maiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque libero expedita tenetur ab nulla repellendus architecto molestiae culpa molestias et beatae sequi, perferendis veritatis tempora quis nobis dignissimos error vel?
         </p>

         {/*sections */}
         <div className="md:px-20">
            <div className="flex justify-center items-center my-5 font-medium text-lg">
                      <p onClick={()=>{setSellBookStatus(true); setBookStatus(false); setPurchaseStatus(false)}} className={Sellbookstatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'} >Sell Books</p>
                      <p onClick={()=>{setBookStatus(true); setSellBookStatus(false); setPurchaseStatus(false)}} className={bookstatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'}> Book Status</p>
                      <p onClick={()=>{setSellBookStatus(false); setBookStatus(false); setPurchaseStatus(true)}} className={Purchasestatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'} > Purchase History</p>
            </div>
            {/*Contents */}
          {/*sellbookstatus*/}
          {
            Sellbookstatus &&
            <div>
              <div className="p-10 my-20 mx-5 bg-gray-200">
                 <div className="text-center text-3xl font-medium">Book Details</div>
                 {/*Form */}
       <div className="md:grid grid-cols-2 mt-10 w-full">
              <div className='px-3'>
                                
                 <div className="mb-3 ">
                      <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Title' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>
  
                 
  
                  <div className="mb-3 ">
                        <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>
  
                  
  
                    <div className="mb-3 ">
                        <input value={bookDetails.noOfPages} onChange={e=>setBookDetails({...bookDetails,noOfPages:e.target.value})} type="text" placeholder='Number Of Pages' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                    </div>
  
                  
  
                  <div className="mb-3 ">
                        <input value={bookDetails.imageUrl} onChange={e=>setBookDetails({...bookDetails,imageUrl:e.target.value})}   type="text" placeholder='Image URL' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <input value={bookDetails.Price} onChange={e=>setBookDetails({...bookDetails,Price:e.target.value})}  type="text" placeholder='Price' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} rows={'6'} type="text" placeholder='Abstract' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                 
                        
            </div>{/*input boxes div end */}

         <div className=" px-3">

              <div className=" mb-3">
                        <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>

                   <div className=" mb-3">
                         <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='Language' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                    <div className=" mb-3">
                         <input  value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='ISBN' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>
                  <div className=" mb-3">
                        <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})}  type="text" placeholder='Category' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>     

                  {/*book image  */}
                  <div className="mb-3 mt-10 flex justify-center items-center">
                     <label htmlFor="bookImage">
                  {/*e means uploading images */}
                      <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImage' className='hidden' 
                      />
                      {/*Conditional rendering using preview */}
                      { !preview?
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'200px'} height={'200px'}  alt="book image" />
                        :
                        <img src={preview} width={'200px'} height={'200px'}  alt="book image" />
                      }
                     </label>
                  </div>

                  {/*book image  - copied */}
                  { preview && <div className=" flex justify-center items-center">
                    {
                      previewList?.map((imgUrl,index)=>(
                          <img key={index} src={imgUrl} width={'70px'} height={'70px'}  alt="book image" className='mx-3' />
                      ))
                    }
                     { previewList.length<3 && <label htmlFor="bookImage">
                  {/*e means uploading images from frontend */}
                      <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImage' className='hidden' 
                      />
                      {/*button to upload more than 1 image */}
                      <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500'/>
                      
                     </label>}
                  </div>}
                  
                                  
          </div>
          

                                      
        </div>{/*form main div end */}
        {/*Keys in footer  */}
        <div className="bg-gray-200 p-3  w-full flex justify-end mt-5">
                                <button onClick={handleReset} className="bg-gray-700 text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border">Reset</button>

                                <button onClick={handleBookSubmit} className="bg-blue-600 text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border hover:border-blue-700">Submit</button>
                                   
                              </div>

       </div>
             </div>
          }
          {/* bookstatus */}
          {
            bookstatus && 
            <div className="p-10 my-20 shadow">
               {/* books to be duplicated ,books sold by the users, userbooks sate*/}
              {
                userUploadedBooks?.length>0?
                    userUploadedBooks?.map((book,index)=>(
                       <div key={index} className="p-5 rounded mt-5 bg-gray-100">
                   <div className="md:grid grid-cols-[3fr_1fr]">
                     {/* bookstatus */}
                    <div className="px-3">
                      <h1 className="text-2xl">{book?.title}</h1>
                      <h2 className="text-xl">{book?.author}</h2>
                       <h3 className="text-lg text-blue-400">$ {book?.discountPrice}</h3>
                       <p className="text-justify">{book?.abstract}</p>

                       {/* Pending,Approved ,rejected , conditional rendering based on if the book status by admin is approved, rejected or pending. First if its statys is pending is checked  if not then if approved is checked if not automatucally it says rejected.*/}
                       <div className="flex">
                          
                          { book?.status == "Pending"?<img width={'150px'} height={'150px '} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />: book?.status == "approved"?
                           
                          <img width={'100px'} height={'100px '} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved" />:
                          
                          <img width={'100px'} height={'100px '} src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/05/Rejected-rubber-stamp-on-transparent-background-PNG.png" alt="rejected" />
                          }
                         
                       </div>

                    </div>
                    {/* delete button and book image */}
                    <div className="px-4 mt-4 md:mt-0">
                      <img className='w-full' src={book?.imageUrl} alt="book uploaded by the user" />
                        <div className="mt-4 flex justify-end">
                           <button onClick={()=>removeUploadedBook(book?._id)} className="bg-red-600 rounded text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border hover:border-red-700">Delete</button>
                        </div>
                    </div>
                  </div>
               </div>
                    ))
                  
                :
                <div className=" flex justify-center items-center flex-col ">
                  <img width={'45%'} height={'200px'} src="https://tse2.mm.bing.net/th?id=OIP.iI0fW-U_XmZIeNDUIBoRUQHaEn&pid=15.1" alt="book not uploaded!" />
                  <p className="font-bold text-xl ">No Books Uploaded yet? Start Uploading your Books Today!!</p>
                </div>
               

              }
            </div>
          }

          {/* purchasestatus */}
          {
            Purchasestatus && 
            <div className="p-10 my-20 shadow">
               {/* books to be duplicated , purchased status */}
               {
                purchasedBookStatus?.length>0?
                   purchasedBookStatus?.map((purchasedbook,index)=>(
                    <div key={index} className="p-5 rounded mt-5 bg-gray-100">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                    
                     {/* bookstatus */}
                    <div className="px-3">
                      <h1 className="text-2xl">{purchasedBookStatus?.title}</h1>
                      <h2 className="text-xl">{purchasedBookStatus?.author}</h2>
                       <h3 className="text-lg text-blue-400">$ {purchasedBookStatus?.discountPrice}</h3>
                       <p className="text-justify">{purchasedBookStatus?.abstract}</p>

                       {/*Approved */}
                       <div className="flex">
                          
                          <img width={'150px'} height={'150px '} src="https://psdstamps.com/wp-content/uploads/2022/04/round-sold-stamp-png.png" alt="pending" />

                       </div>


                       
                    </div>
                    {/*  book image */}
                    <div className="px-4 mt-4 md:mt-0">
                      <img className='w-full' src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book" />
                        

                    </div>
  
                    
                  </div>

               </div>
                   ))
                :
                <div className=" flex justify-center items-center flex-col ">
                  <img width={'45%'} height={'200px'} src="https://cdn.dribbble.com/userupload/29471897/file/original-445e7655908c71a77099cdca6b1528e1.gif" alt="book not uploaded!" />
                  <p className="font-bold text-xl ">No Books Purchased yet? Start Purchasing your Favourite Books Today!!</p>
                </div>
               

               }
            </div>

          }
          
  </div>
          
    <Footer/>
    {/*Toast for alert*/}
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

export default Profile