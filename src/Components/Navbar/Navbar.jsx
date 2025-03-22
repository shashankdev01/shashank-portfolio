import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
 
import { useState } from 'react';
import Menu from './Menu';
 
const Navbar = () => {
  let [menuStatus,setMenuStatus]=useState(false)
  return (
    <div className='  '>
       <div class="absolute inset-y-0 md:right-0 ..."> <img className='h-[60rem] w-[36rem]' src='./blue-bg.png' alt='blue-bg'/></div>  
       

    <div className='z-40 relative px-8 flex px-8 py-4   justify-between mt-4'> 
    
      <div className='flex items-center px-10'>
            

            <img className='w-60' src='./Logo.png' alt='Logo'/>
         
            <div className='justify-start px-24 items-center flex'>
            <FaDribbble size={25} />
            <a href='#' className='justify-start px-4 font-semibold'>Dribble</a>
            </div>
            
            <div className='jusify-start  '><FaInstagram size={25}/></div>
            <a href='https://www.instagram.com/shashank.4rajput/profilecard/?igsh=dzBybzMxc3VhcGF3' className='justify-start px-4 font-semibold'>Instagram</a>
    </div>  
        <div className=''>
            
                  <Menu size={30} className='text-white size-2xl fixed'/>
              
           
            </div>
  </div> 
               
    </div>
    
  )
}

export default Navbar