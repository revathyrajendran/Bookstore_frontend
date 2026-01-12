import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Adminheader from '../../admin/acomponents/Adminheader'
import Adminsidebar from '../acomponents/Adminsidebar'
import { getAllBooksListForAdminApi, getAllUsersListApi } from '../../Services/allApis'
import SERVERURL from '../../Services/ServerURL'

const Resourceadmin = () => {
  //book list
  const[bookliststatus,setBookListStatus]=useState(true)

  //users list: When admin clicks users
  const[usersliststatus,setUsersListStatus]=useState(false)

  //to hold all users list
  const[allUsersList, setAllUsersList]= useState([])

  //admin token
  //const[adminToken,setAdminToken]= useState("")

  //to store books
  const[allUserBooks, setAllUserBooks]= useState([])

  console.log(allUsersList);
  

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
  },[usersliststatus])

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
               <div className="shadow p-3 rounded m-4">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded m-4">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded m-4">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded m-4">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>
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