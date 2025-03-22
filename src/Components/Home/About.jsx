import React from 'react'
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
     
    <div className='mt-[20rem]'>
        <div className='absolute  '><img className='-my-[10rem] mx-[43rem] h-[55rem] w-[52rem]' src='./pinkcube.png' alt='pinkcube'/></div>

        <h1 className='text-blue-800 mt-[35rem] mx-32 text-xl font-semibold' > ──What I Do </h1>
        <div className='h-3/6 flext justify-center items-center mt-8 mx-32'>
            <h6 className='text-6xl  '>I enjoy creating delighful<br/> human-centered digital experiences </h6> 
            </div>
            <div className=' mt-[5rem]'>
              <h1 className='font-semibold text-9xl mx-[8rem]'>Think. Make. <br/> Solve. </h1>
            </div>

            <div className='mx-60 -mt-[22rem]'><img className='mx-[43rem]' src='cube-copy-3.png' alt='cube-copy-3'/></div>
            <div className='mx-[30rem]'><img className='mx-[20rem] mt-[8rem]' src='cube-copy.png' alt='cube-copy'/></div>
            <div className='-mt-[4rem]'>
              <button className='bg-blue-800 flex items-center justify-center text-white border border-white-100
           rounded-full px-10 py-2 mx-[8rem]'>Contact me<GoArrowRight /> </button>
            </div>
            
    </div>
    
     
  )
}

export default About
