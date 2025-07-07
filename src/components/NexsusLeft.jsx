import React, { useEffect, useRef, useState } from 'react'
import FullScreenIcon from "../components/icons/FullScreenIcon";
import Slider from "react-slick";
import { MdClose } from "react-icons/md";


    let sliderArry = [
      {src : "./images/panjabi.webp"},
      {src : "./images/keyboard.webp"},
      {src : "./images/headphone.webp"}
    ]


const NexsusLeft = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const [activeModal, setModal] = useState(false);
    let [imgSrc, setImgSrc] = useState(sliderArry[0].src);

     var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) =>{
      
      setImgSrc(sliderArry[current].src);
    }
  };
  var settingsAnother = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

   let handleClick = () => {
     setModal(true);
    };

  return (
    <>
    <div className=" w-[54%] relative">
            <FullScreenIcon click={handleClick} className=" absolute top-2 right-6 z-[999] p-3 box-border  rounded-[50%] cursor-pointer " />
            
            <Slider {...settings} asNavFor={nav2} ref={sliderRef1}>
              {sliderArry.map((item,index)=>{
                return  <div key={index} >
                    <div className=" w-full flex items-center justify-center bg-white overflow-hidden rounded-[25px]">
                      <img  src={item.src} alt="img" className='h-[540px] object-cover'/>
                    </div>
                  </div>
              })
              }
            </Slider>

            <div className=' w-[330px] mt-8'>
              <Slider
              {...settingsAnother}
              asNavFor={nav1}
              ref={sliderRef2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              className=' nexsus-rock'
            >
              <div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <img src="./images/panjabi.webp" alt="img" className=' h-[82px] w-[94px] object-cover box-border border border-[#AFAFAF] rounded-[10px]'/>
                </div>
              </div>
              <div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <img src="./images/keyboard.webp" alt="img" className='  h-[82px] w-[94px] object-cover box-border border border-[#AFAFAF] rounded-[10px]'/>
                </div>
              </div>
              <div>
                <div className=" flex justify-center items-center cursor-pointer">
                  <img src="./images/headphone.webp" alt="img" className=' h-[82px] w-[94px] object-cover box-border border border-[#AFAFAF] rounded-[10px]'/>
                </div>
              </div>
            </Slider>
            </div>
          </div>

          {activeModal && 

          <div className="w-[100%] absolute top-0 left-0 z-[999] h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <img src={imgSrc} alt="img" className=' object-contain w-200 h-[700px]'/>
            <MdClose
              onClick={() => setModal(false)}
              className=" relative text-4xl top-[-40%] right-[-25%] h-9 w-9 flex items-center justify-center p-1 box-border rounded-[50%] bg-white cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.5)]"
            />
          </div>
        }
     </>
  )
}

export default NexsusLeft