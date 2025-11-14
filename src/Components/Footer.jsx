import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import React from 'react'


const Footer = () => {
  return (
    <>
        <div className="md:grid grid-cols-3 bg-gray-900 text-white p-10 gap-20">
         <div> 
          <h4 className='font-bold text-xl'>ABOUT US</h4>
          <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem dolorem, fuga blanditiis cumque quos, adipisci, fugiat ullam autem est earum eum dolores voluptatem cum ut illum eius! Harum, repellat.</p>
         </div>
        
         <div >
          <h4 className='font-bold text-xl'>NEWSLETTER</h4>
          <h2 className='my-3'>Stay Updated With Our Latest Trends!</h2>
          <div className='flex mt-8'>
            <input type="email" placeholder='Email' className='bg-white text-black p-3' />
            <button className='bg-yellow-500 p-3'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
         </div>
        
         <div>
          <h4 className='font-bold text-xl'>FOLLOW US</h4>
          <h2 className='my-3'>Let us be social!</h2>
          <div className="flex me-2">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
         </div>
        </div>

        {/* Copyright */}
        <div className="text-center bg-zinc-900 text-white p-4">
          <h3>Copyrights © 2025 | Designed by Revathy Rajendran</h3>
        </div>
    </>
  )
}

export default Footer