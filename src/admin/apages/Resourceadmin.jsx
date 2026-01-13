import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Adminheader from '../../admin/acomponents/Adminheader'
import Adminsidebar from '../acomponents/Adminsidebar'
import { getAllBooksListForAdminApi, getAllUsersListApi, updateBookByAdminApi } from '../../Services/allApis'
import SERVERURL from '../../Services/ServerURL'

const Resourceadmin = () => {
  //book list : When admin clicks Books
  const[bookliststatus,setBookListStatus]=useState(true)

  //users list: When admin clicks users
  const[usersliststatus,setUsersListStatus]=useState(false)

  //to hold all users list
  const[allUsersList, setAllUsersList]= useState([])

  //admin token
  //const[adminToken,setAdminToken]= useState("")

  //to store books
  const[allUserBooks, setAllUserBooks]= useState([])

  //once admin approve the books, again it has to be called in useeffect to load books, the book approved will now have a tick mark
  const[updateBookStatus,setUpdateBookStatus] = useState({})

  console.log(allUsersList);
  console.log(allUserBooks);
  

  //to bring all users as soona s admin clicks users
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      //setAdminToken(token)
      if(bookliststatus==true){
        getAllBooksListForAdmin(token)

      }else if(usersliststatus==true){
        //here yoken is used as a parameter
         getAllUsersListForAdmin(token)
        
      }
      else{
        console.log("Something went wrong!!!!");
       
        
      }
    }
    //updateBookStatus is in dependency because otherwise no refreshing.
  },[usersliststatus,updateBookStatus])

   //function to get all books list for admin , token there is user token here.
  const getAllBooksListForAdmin = async(userToken)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${userToken}`
    }
    try{
      const result = await getAllBooksListForAdminApi(reqHeader)
      if(result.status == 200){
          setAllUserBooks(result.data)

      }
      else{
        console.log(result);
        
      }

    }catch(err){
      console.log(err);
      

    }

  }

  //function to get all users list for admin , token there is user token here.
  const getAllUsersListForAdmin = async(userToken)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${userToken}`
    }
    try{
      const result = await getAllUsersListApi(reqHeader)
      if(result.status == 200){
          setAllUsersList(result.data)

      }
      else{
        console.log(result);
        
      }

    }catch(err){
      console.log(err);
      

    }

  }

  //to approve books by admin
  const approveBook = async(book)=>{
    const tokenOfAdmin = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization" : `Bearer ${tokenOfAdmin}`
    }
    try{
      const result = await updateBookByAdminApi(book,reqHeader)
      if(result.status==200){
        setUpdateBookStatus(result.data)
      }

    }catch(err){
      console.log(err);
      
    }
  }
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
                      All  Collections
                   </h1> 
                   {/*two tabs */}
                    <div className="flex justify-center items-center my-5 font-medium text-lg">
                      <p onClick={()=>{setBookListStatus(true); setUsersListStatus(false); }} className={bookliststatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'} > Books</p>
                      <p onClick={()=>{setUsersListStatus(true); setBookListStatus(false)}} className={usersliststatus ? 'text-blue-500 p-4 border-1 border-gray-200 border-t border-1 border-r rounded cursor-pointer':'p-4 border-b border-gray-400 cursor-pointer'}> Users</p>
                      
                     </div>
        {/*Contents */}
                    {/*Books */}

            {          
              bookliststatus &&
              
               <div className="md:grid grid-cols-4 mt-5 w-full">
                {/* Book list to be repeated!!!!! */}
              
              {
                allUserBooks?.length>0?
                allUserBooks?.map(book=>(
                  <div key={book?._id} className="shadow p-3 rounded m-4">
                  <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">{book?.author}</p>
                    <p>{book?.title}</p>
                    <p>$ {book?.discountPrice}</p>
                      {/* Button to approve by admin , if admin clicked approve button , then it must change to tick : so conditional rendering  based on book status if pending, sold ! If admin has approved the book, in admin resources the approve button must vanish and tick must come. */}
                 {  
                 book?.status == 'Pending' && 
                 //we mapped using book, so it is passed here also
                <button onClick={()=>approveBook(book)} className="p-3 bg-green-700 border rounded w-full text-white hover:border-green-600 hover:bg-white hover:text-green-800">
                           Approve
                    </button>
                  }
                  {  
                 book?.status == 'approved' && 
                <div className="flex justify-end w-full">
                  <img width={'40px'} height={'40px'} className='text-center' src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png" alt="Tick mark after approval" />
                          
                </div>
                  }
                  </div>
                   
                 

                </div>
                ))
                :
                <div>
                  <p className="text-dark font-bold text-lg">No Books Uploaded By Users</p>
                </div>

                
              }

               
                
                </div>
            }
                     {/*Users */}

                      {/*To be duplicated */}

            {          
              usersliststatus &&
                 
              
               <div className="md:grid grid-cols-3 mt-5 w-full">
                {/* users list in adminresource page */}
              
               { allUsersList?.length>0 ?
                        allUsersList?.map((user,index)=>(
                          <div key={index} className="shadow p-1 rounded m-2 bg-gray-200">

                <p className="text-red-700 font-bold text-lg">ID : {user?._id}</p>
                
                <div className='flex mt-5 items-center'>
                   <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={user?.profile?`${SERVERURL}/uploads/${user.profile}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNPQxt8ZLNHXp6jkHGmadRYrCKGE53w9ufg&s" } alt="" />
                    <div className="flex flex-col  text-lg ml-3 w-full">
                      
                      <p className='text-blue-800 text-lg font-bold'>{user?.username}</p>
                      <p>{user?.email}</p>
                      
                     </div>
            
                  </div>
                </div>
                        ))
                :
                <div className='text-center text-bold'>No Users</div>


                }


                
                </div>
            }

               </div>
            </div>
          </div>
        <Footer/>
        </>
  )
}

export default Resourceadmin