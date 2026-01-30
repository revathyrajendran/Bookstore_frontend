import React from 'react'
import Header from '../ucomponents/Header' 
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


function  Paysuccess() {
  return (
    <>
    <Header/>
        {/**Content */}
        <div className="container my-10  min-h-80">
            <div className="md:grid grid-cols-2 px-20 justify-center items-center">
                {/**Thank you part */}
                    <p className="text-center text-green-800 text-2xl p-4">
                        Thank You For Shopping With Us!. Hope You had A great time with us!!
                    </p>
                    {/**Review Part */}

                    <div className='flex justify-center items-center '>
                            <img  className='img-fluid ' src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="Payment Success" />
                    </div>
                    
                    

                    <Link to={'/all-products'} className='bg-blue-800 px-4 py-3 text-white my-5'>
                         <FontAwesomeIcon icon={faBackward}/> Explore More products!
                    </Link>
                    
                    
                    
             </div>
             
        </div>
    <Footer/>
    
    </>
  )
}

export default Paysuccess