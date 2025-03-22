 import React from 'react'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 
 const Card = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
   return (
    <Slider className='text-black' {...settings}>
       
        <div className='w-3/4 m-auto flex flex-row'>
          
        <div className=' mb-[4rem] mt-20 flex flex-row gap-6 mx-[8rem]'>
          
                 {data.map((d, index) =>(
               <div className='bg-zinc-100 overflow-hidden drop-shadow-lg rounded-lg h-[550px] w-[20rem] text-black rounded-xl   '>
                <div key={index} style={{ backgroundImage: `url(${d.img})` }} className='mt-2 bg-no-repeat h-[18rem] rounded t-xl flex justify-center items-center mx-5'>
                <img src={d.mainImage} alt=' ' className='  h-50 w-50 rounded-full '/>
                
                </div>
                <div className='mt-4 flex flex-col justify-center items-center gap-4 p-4'>
                  <h1 className='text-3xl font-semibold text-center '>{d.heading}</h1>
                  <p className='font-semibold text-center mt-2 flex   '>{d.desc}</p>
                  <button className='bg-blue-800 mt-4 text-white text-lg px-6 py-1 rounded-2xl' >Find Out More</button>
                </div>
               </div>
            ))}
           
        </div>
       
        
     </div>
     </Slider>
     
      
   )
 }
 const data =[
   {
    heading: 'User Exeperiance',
    img: `./Oval.png`,
    mainImage:`./Cursor.png`,
     
    desc: ' We have got quite a few already made templets for better project management that you can use now ',
   },
   {
    heading: 'User interface',
    img: `./Oval-Copy-3.png`,
    mainImage:`./hand.png`,
     
    desc: ' We have got quite a few already made templets for better project management that you can use now ',
   },
   {
    heading: 'UI Design Kit',
    img: `./Oval-Copy-6.png`,
    mainImage:`./colorPicker.png`,
    
    desc: ' We have got quite a few already made templets for better project management that you can use now ',
   },
   
 ]
 
 export default Card
 