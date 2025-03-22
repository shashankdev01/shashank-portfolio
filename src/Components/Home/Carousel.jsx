import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight} from "react-icons/go";

 


const CenterCardCarousel = () => {
  
    const [activeSlide, setActiveSlide] = useState(0);  
    const sliderRef = useRef(null);
      // Track the current active slide

  // Data for cards
  const cards = [
    { id: 1,  desc: ' We have got quite a few already made templets for better project management that you can use now ', image: `./Oval.png`,  mainImage:`./Cursor.png`,  heading: 'User interface'},
    { id: 2,  desc: ' We have got quite a few already made templets for better project management that you can use now ', image: `./Oval-Copy-3.png`, mainImage:`./hand.png`, heading: 'User Exeperiance' },
    { id: 3,  desc: ' We have got quite a few already made templets for better project management that you can use now ', image: `./Oval-Copy-6.png`, mainImage:`./colorPicker.png`, heading: 'UI Design Kit', },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    focusOnSelect: true,
    afterChange: (current) => setActiveSlide(current), // Set the current active slide
    infinite: true,
    speed: 500,
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`transform h-[590px] w-[20rem] mb-4 mt-16 flex items-center justify-center no-repeat bg-zinc-50 rounded transition-transform duration-500 ease-in-out ${
              activeSlide === (index - 1 + cards.length) % cards.length ? "scale-110 z-10" : "scale-90" 
            }`}
          >
            <div key={index} style={{ backgroundImage: `url(${card.image})` }} className="gap-2 mt-4 mx-4 bg-contain flex items-center  justify-center no-repeat rounded-lg overflow-hidden p-4 className='mt-2 bg-no-repeat h-[18rem] rounded">
              <img
                className="h-50 w-50 flex items-center  justify-center  "
                src={card.mainImage}
                alt='no'
              />
            </div>
            <div className="w-[14rem] mx-[2rem] items-center mt-4 text-gray-800 ">
              <h1 className='text-3xl font-semibold text-center '>{card.heading}</h1>
              <p className='font-semibold  text-center mt-4 flex '>{card.desc} </p>
              {activeSlide === (index - 1 + cards.length) % cards.length && (
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-800 text-white px-4 py-2 rounded-full">
                  Find Out More
                  </button>
                </div>
              )}
              </div>
          </div>
        ))}
      </Slider>
      


       
         
         {/* Bottom Section with Flexbox to align in a row */}
         <div className="mt-8 flex justify-between items-center -mx-[16rem] mb-12 ">
                 <div><p className="">01 . 02</p></div>
                 
                 
                {/* Left and Right Arrows */}
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrevSlide}
                    className="text-3xl text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <GoArrowLeft />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="text-3xl text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <GoArrowRight />
                  </button>
                </div>

                 <div> <h1>Contact Me</h1> </div> 
                  

      </div>
    </div>
  );
};

export default CenterCardCarousel;
