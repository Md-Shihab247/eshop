import React, { useEffect, useRef, useState } from "react";
import Container from "../components/layouts/Container";
import Slider from "react-slick";
import { IoMdClose, IoMdStar } from "react-icons/io";
import FullScreenIcon from "../components/icons/FullScreenIcon";
import { MdClose } from "react-icons/md";

function ProductDetailPage() {
  const [active, setAvtive] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

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

  let handleClick = () => {
    setAvtive(true);
  };

  return (
    <div className=" mt-16">
      <Container>
        <div className=" flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <div>Home</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div>Computers & Tablets</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div>Laptop</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <span className=" font-bold">
            NexSUS ROCK Strix Scar 17 Gaming Laptop
          </span>
        </div>

        <div className=" mt-12 flex justify-between gap-x-[56px]">
          <div className=" w-[50%]">
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

          <div className="w-[50%]">
            <div>
              <div className=" flex items-center">
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <span className=" ml-2  text-[#303030] font-montserrat text-xl font-normal leading-7.5">
                  ( 142 )
                </span>
              </div>

              <p className=" pt-4 pb-6  text-[#303030] font-poppins text-4xl font-semibold leading-[46px]">
                NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM
                Pro
              </p>
              <hr className="border-[#303030] opacity-25 w-[630px]" />
              <div className=" flex items-start gap-x-[18px]">
                <big className=" font-poppins text-[56px] text-[#FF624C] font-bold leading-[68px]">
                  $2,999.99
                </big>
                <small className=" relative top-[27px] font-montserrat text-xl text-[ #303030] font-normal leading-7.5 opacity-50 line-through">
                  $5,499.99
                </small>
              </div>
            </div>
          </div>
        </div>

        {active && (
          <div className="w-full absolute top-0 left-0 z-[999] h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <img src="./images/banner.png" alt="" />
            <MdClose
              onClick={() => setAvtive(false)}
              className=" relative text-3xl top-[-265px] right-[52px] h-9 w-9 flex items-center justify-center p-1 box-border rounded-[50%] transition-all bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.5)] cursor-pointer"
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default ProductDetailPage;
