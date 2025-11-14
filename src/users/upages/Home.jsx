import React from 'react'
import Header from '../ucomponents/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <Header/>
      {/*Landing */}
      <div style={{height:'500px'}} className="flex flex-col text-white  bg-center text-white justify-center items-center bg-[url(/landing.jpg)]">
       
           <div  style={{height:'500px', backgroundColor:'rgba(0,0,0,0.5'}} className=" w-full flex flex-col justify-center items-center">
             <h1 className='text-6xl font-bold '>Wonderful Gifts </h1>
             <p className='font-bold'>Give your family and friends  book</p>
          
                 {/*search */}
               <div className="mt-9">
                  <input type="text" className='bg-white p-3 w-100 rounded-3xl placeholder-gray-500' placeholder='Search Books' />
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:'-40px'}} className='text-gray-500' />
                 </div>
           </div>
     
      </div>


      {/*Arrival */}
     <section className=' md:px-40 p-5 flex flex-col text-center'>
           <h1 className=" text-2xl  font-bold">NEW ARRIVALS</h1>
           <h1 className=" text-3xl ">Explore Our latest Collections</h1>
           
           {/*Books  in latest collections */}
           <div className="md:grid grid-cols-4 mt-5 w-full">
               <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>

                 <div className="shadow p-3 rounded mx-2">
                  <img width={'100%'} height={'300px'} src="https://5.imimg.com/data5/SELLER/Default/2021/9/IM/NZ/XP/133456484/one-arranged-murder-paperback.jpg" alt="" />
                  <div className="flex flex-col justify-center align-center">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>BookTitle</p>
                    <p>$ 250</p>
                    
            
                  </div>
                </div>
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
    </>
  )
}

export default Home