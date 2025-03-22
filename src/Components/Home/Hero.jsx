import React from 'react'
import { BsArrowsExpand } from "react-icons/bs";
 
const Hero = () => {
return (
    <div className=" ">
        <div className=' absolute inset-y-40 right-0 mt-96'> <img className='h-auto w-[36rem] mt-[3.80rem] ' src='./purple-bg.png' alt='purple-bg'/> </div>  
        <div class="absolute inset-y-0 right-[2.25rem] w-[83rem] "> <img className='h-[60rem] px-1'  src='./Hero.png' alt='Hero'/></div> 
       <div className=''>
         <h1 className='text-blue-800 mt-[10rem] mx-32 text-xl font-semibold'> ──Shashank Singh</h1> 
       <div className='h-3/6 flext justify-center items-center mt-8 mx-32'>
            <h6 className='text-7xl font-bold line-height: 1;'>Hello, my<br/> name's Shashank.<br/> I'm a Web<br/> Developer. </h6>
            <div className=''> <img className='mt-[16rem] mx-[39.4rem]' src=' ./blueee-bg.png' alt='blueee-bg'/> </div>
            <div className='  '> <img className=' mt-[-41.6rem]' src='./Perspective lines - grey.png' alt='Perspective lines - grey'/> </div>
            <div className=' absolute inset-y-40 right-0 mt-96'> <img className='h-auto w-[38rem] mt-[3.80rem]  ' src='./Perspective lines - grey.png' alt='Perspective lines - grey'/> </div>  
       </div>
       </div>
        <div className='my-[-18rem] mx-40 flex'> <BsArrowsExpand size={30} /> <h1 className='mx-10 font-semibold'>Scroll Down</h1></div>
    </div>
  )
}

export default Hero 
 
