import React, { useState } from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const Profile = () => {
  //styles for three status
  //sellbooks
   const[Sellbookstatus,setSellBookStatus]=useState(true)
  //book status
   const[bookstatus,setBookStatus]=useState(false)
  //purchase history
  const[Purchasestatus,setPurchaseStatus]=useState(false)

  return (
    <>
    <Header/>
         <div style={{height:'200px'}} className="bg-black">

         </div>
         <div style={{width:'230px', height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
          <img style={{width:'200px', height:'200px',borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
         </div>
         {/*name,blue tick ,edit button */}
         <div className="md:flex justify-between px-20 mt-5">
                  <div className="flex justify-center items-center">
                            <h1 className="font-bold md:text-3xl text-2xl">
                              Username
                            </h1>
                            <FontAwesomeIcon className='text-blue-500 ms-3 ' icon={faCircleCheck} />
                  </div>
                  {/*EDit as a separate component */}
                  <div>
                    Edit 
                  </div>
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
                      <input type="text" placeholder='Title' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>
  
                 
  
                  <div className="mb-3 ">
                        <input type="text" placeholder='Author' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>
  
                  
  
                    <div className="mb-3 ">
                        <input type="text" placeholder='Number Of Pages' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                    </div>
  
                  
  
                  <div className="mb-3 ">
                        <input type="text" placeholder='Image URL' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <input type="text" placeholder='Price' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <input type="text" placeholder='Discount Price' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  
                  <div className="mb-3 ">
                        <textarea rows={'6'} type="text" placeholder='Abstract' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                 
                        
            </div>{/*input boxes div end */}

         <div className=" px-3">

              <div className=" mb-3">
                        <input type="text" placeholder='Publisher' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>

                   <div className=" mb-3">
                         <input type="text" placeholder='Language' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                    <div className=" mb-3">
                         <input type="text" placeholder='ISBN' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                   </div>
                  <div className=" mb-3">
                        <input type="text" placeholder='Category' className='w-full p-2 border rounded placeholder-gray-400 text-black bg-white' />
                  </div>     

                  {/*book image  */}
                  <div className="mb-3 mt-10 flex justify-center items-center">
                     <label htmlFor="bookImage">
                      <input type="file" id='bookImage' className='hidden' 
                      />
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'200px'} height={'200px'}  alt="book image" />
                     </label>
                  </div>
                  
                                  
          </div>
          

                                      
        </div>{/*form main div end */}
        {/*Keys in footer  */}
        <div className="bg-gray-200 p-3  w-full flex justify-end mt-5">
                                <button className="bg-gray-700 text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border">Reset</button>

                                <button className="bg-blue-600 text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border hover:border-blue-700">Submit</button>
                                   
                              </div>

       </div>
             </div>
          }
          {/* bookstatus */}
          {
            bookstatus && 
            <div className="p-10 my-20 shadow">
               {/* books to be duplicated */}
               <div className="p-5 rounded mt-5 bg-gray-100">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                    
                     {/* bookstatus */}
                    <div className="px-3">
                      <h1 className="text-2xl">Book Title</h1>
                      <h2 className="text-xl">Author</h2>
                       <h3 className="text-lg text-blue-400">$ 300</h3>
                       <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam porro error eveniet, perspiciatis adipisci optio ea at eligendi numquam culpa laboriosam doloremque iusto, illum rem nihil saepe molestias harum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit rerum, corrupti eum veritatis, reiciendis voluptatum placeat tempora pariatur natus repellat sunt corporis explicabo consequuntur expedita quo maiores, doloremque facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nihil commodi ratione nesciunt vel sit molestiae rerum aspernatur tenetur ipsam, ?</p>

                       {/*Approved */}
                       <div className="flex">
                          
                          <img width={'150px'} height={'150px '} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />

                           
                          <img width={'100px'} height={'100px '} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved" />
                         
                       </div>


                       
                    </div>
                    {/* delete button and book image */}
                    <div className="px-4 mt-4 md:mt-0">
                      <img className='w-full' src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="book" />
                        <div className="mt-4 flex justify-end">
                           <button className="bg-red-600 rounded text-white py-2 px-3 mx-3 hover:bg-white hover:text-black hover:border hover:border-red-700">Submit</button>
                        </div>

                    </div>
          
                    
                     
                    
                    
                  </div>

               </div>
            </div>
          }

          {/* purchasestatus */}
          {
            Purchasestatus && 
            <div className="p-10 my-20 shadow">
               {/* books to be duplicated */}
               <div className="p-5 rounded mt-5 bg-gray-100">
                  <div className="md:grid grid-cols-[3fr_1fr]">
                    
                     {/* bookstatus */}
                    <div className="px-3">
                      <h1 className="text-2xl">Book Title</h1>
                      <h2 className="text-xl">Author</h2>
                       <h3 className="text-lg text-blue-400">$ 300</h3>
                       <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam porro error eveniet, perspiciatis adipisci optio ea at eligendi numquam culpa laboriosam doloremque iusto, illum rem nihil saepe molestias harum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit rerum, corrupti eum veritatis, reiciendis voluptatum placeat tempora pariatur natus repellat sunt corporis explicabo consequuntur expedita quo maiores, doloremque facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nihil commodi ratione nesciunt vel sit molestiae rerum aspernatur tenetur ipsam, ?</p>

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
            </div>

          }
          
  </div>
          
    <Footer/>
    </>
  )
}

export default Profile