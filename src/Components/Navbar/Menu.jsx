import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
 

import { FaInstagram } from "react-icons/fa";

import { ImMail } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { FaDribbble } from "react-icons/fa";



 import backGround from "../Navbar/Sideee.png"
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="p-4 focus:outline-none">
         
      <HiOutlineMenuAlt4  className='text-2xl'/>

      </button>

      {/* Sliding Menu */}
      <div style={{ backgroundImage: `url(${backGround}) `, }}

        className={`fixed top-0 left-0 h-screen w-screen bg-no-repeat  bg-white text-black transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
       <div  className=''>

       
          <div className='mt-[2rem] flex flex-items  justify-between'>
          <img src='./LogoM.png' alt='LogoM' className='h-[2rem] w-[12rem] mx-[4rem]'/>
          <img src='OvalButtton.png' alt='OvalButttton' className='h-[45px] mx-[4rem] '/>
          </div>
        
         
        </div> 

        <div className='h-[35rem] mt-[4rem] w-[52.5rem] mx-[30rem] items-flex flex-row flex  '>

        <div className='h-[35rem] w-[30rem]  '>
       
        <div className='mt-[9rem]'>
        

          <div className='flex flex-items inline  gap-12 mx-4' > <a > <ImMail  className='flex text-2xl mt-2 text-blue-800' /> </a> <h className="mt-2 font-semibold ">Shashanksingh.dev01@gmail.com </h> </div>
          <div className='flex flex-items inline  gap-12 mx-4 mt-4' >  <CiLocationOn className='mt-4 text-3xl text-blue-800'/>  <h className="mt-2 font-semibold">  Village-begampur khatola sec-74 gurugram haryana</h>   </div>
          <div className='flex flex-items inline  gap-12 mx-4 mt-4' >  <IoPhonePortraitOutline className='mt-2 text-2xl text-blue-800'/> <h className="mt-2 font-semibold">+91 7290805689</h>   </div>
        
          </div>
          <div className='mt-[13rem] flex flex-items inline  '>
          <div className='flex flex-items inline'><FaDribbble size={16} className='mt-2 mx-4 text-blue-800' />
          <a href='#' className='mt-1 hover:text-blue-800 font-semibold'>Dribble</a>
          </div>
          <div className='flex flex-items inline mx-[5rem]'>  <FaInstagram size={16} className='mt-2 mx-2 text-blue-800'/>
          <a href='https://www.instagram.com/shashank.4rajput/profilecard/?igsh=dzBybzMxc3VhcGF3' className='justify-start mt-1 hover:text-blue-800 font-semibold'>Instagram</a>
             </div>
          </div>
        </div>

        <div className='h-[35rem] w-[30rem]  ]'>
          <div className='mt-[8rem]'>
            <div className='mx-4 mt-[2rem]'><a href='#'><h className='text-black text-5xl font-bold mx-[8rem] hover:text-blue-800 '>About</h></a></div>
            <div className='mx-4 mt-[2rem]'><a href='#'><h className='text-black text-5xl font-bold mx-[8rem]  hover:text-blue-800'>Work</h></a></div>
            <div className='mx-4 mt-[2rem]'><a href='#'><h className='text-black text-5xl font-bold mx-[8rem]  hover:text-blue-800'>Services</h></a></div>
            <div className='mx-4 mt-[2rem]'><a href='#'><h className='text-black text-5xl font-bold mx-[8rem]  hover:text-blue-800'>Contact</h></a></div>
            </div>
        </div>

        </div>
        
           
      </div>

      {/* Overlay for closing the menu */}
      {isOpen && (
         <button
          onClick={toggleMenu}
          className="fixed inset-0 opacity-50 mx-[89.5rem]  "
        >   <IoCloseSharp className='text-3xl my-[-18.7rem] ' /></button>
         
      )}
     
    </div>
  );
};

export default Menu;
