import React, { useEffect, useRef, useState } from 'react'
import FullScreenIcon from "../components/icons/FullScreenIcon";
import Slider from "react-slick";
import { MdClose } from "react-icons/md";

const NexsusLeft = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const [active, setAvtive] = useState(false);
  
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    setAvtive(true);
  };



  return (
    <>
    <div className=" w-[54%]">
            <Slider {...settings} asNavFor={nav2} ref={sliderRef1}>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <div className=" relative w-full h-auto bg-violet-600 overflow-hidden rounded-[25px]">
                  <img src="./images/banner.png" alt="img" />
                  <FullScreenIcon
                    click={handleClick}
                    className=" absolute p-3 box-border rounded-[50%] transition-all hover:bg-[rgba(255,255,255,0.4)] top-2 right-6 cursor-pointer"
                  />
                </div>
              </div>
            </Slider>

            <Slider
              {...settingsAnother}
              asNavFor={nav1}
              ref={sliderRef2}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
              <div>
                <div className="mx-[2.5px] rounded-[10px] overflow-hidden cursor-pointer">
                  <img src="./images/banner.png" alt="img" />
                </div>
              </div>
            </Slider>
          </div>

          {active && (
          <div className="w-[100%] absolute top-0 left-0 z-[999] h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <img src="./images/banner.png" alt="" />
            <MdClose
              onClick={() => setAvtive(false)}
              className=" relative text-3xl top-[-265px] right-[52px] h-9 w-9 flex items-center justify-center p-1 box-border rounded-[50%] transition-all bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.5)] cursor-pointer"
            />
          </div>
        )}
     </>
  )
}

export default NexsusLeft