import React, { useEffect, useRef, useState } from "react";
import Container from "../components/layouts/Container";
import Slider from "react-slick";
import {IoMdStar } from "react-icons/io";
import FullScreenIcon from "../components/icons/FullScreenIcon";
import { MdClose } from "react-icons/md";
import Button from "../components/Button"
import Transparent from "../components/icons/Transparent"
import Shipping from "../components/icons/Shipping"
import Secure from "../components/icons/Secure"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import CartIcon from "../components/icons/CartIcon2"
function ProductDetailPage() {
  const [active, setAvtive] = useState(false);
  let [quantity,setQuantity] = useState(1)
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

        <div className=" mt-12 flex gap-x-[56px]">
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

          <div className="w-[46%]">
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

              <div className=" max-w-[630px] mt-12 flex gap-x-[87px]">
                <ul className="text-[#303030] font-poppins font-semibold leading-7.5 text-xl [&>li]:mb-4">
                    <li>Brand</li>
                    <li>Size</li>
                    <li>Weight</li>
                    <li>Delivery</li>
                    <li>Variant</li>
                </ul>
                <ul className="text-[#303030] font-montserrat font-normal leading-7.5 text-xl [&>li]:mb-4">
                    <li>NexSUS Tech Company</li>
                    <li>15.7 x 11.1 x 1.0 inches (W x D x H)</li>
                    <li>6.28 pounds</li>
                    <li>Worldwide</li>
                <div className=" flex gap-x-1 flex-wrap">
                    <Button isOpacity={true} content={"Off White"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#303030" size="16px"/>
                    <Button isOpacity={true} content={"Space Gray"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#FF624C" size="16px"/>
                    <Button isOpacity={true} content={"Jet Black"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#303030" size="16px"/>
                    <button className="text-[#303030] mt-2 font-montserrat font-bold text-base leading-6 opacity-25 px-8 py-4 border border-[#303030] rounded-[5px] bg-white cursor-pointer">Cinnamon Red</button>
                </div>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-between mt-[50px] gap-x-[94px] mb-[100px]">
          <div className=" flex gap-x-12 items-center">
              <div className=" flex items-center gap-x-6">
                <Shipping />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    Free Shipping
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    Worldwide available
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-6">
                <Secure />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    100% Guaranteed
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    Receive product first
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-x-6">
                <Transparent />
                <div>
                  <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                    Return Available
                  </h3>
                  <p className=" font-montserrat text-[#303030] text-base font-normal mt-0.5 leading-6">
                    See return policy
                  </p>
                </div>
              </div>
          </div>

          <div className=" flex items-center gap-x-[84px]"> 
            <div className=" flex gap-x-[50px]">
              <div onClick={()=> setQuantity((quantity > 0) && --quantity)} className=" h-[56px] w-[56px] cursor-pointer flex items-center justify-center bg-transparent rounded-[50%] hover:bg-[#F4F4F4] ">
                <HiOutlineMinus className=" w-6 h-6 " />
              </div>
              <input type="number" readOnly value={quantity}  className=" w-[80px] outline-hidden border-hidden text-center text-[#303030] font-poppins text-3xl font-semibold leading-[46px]"/>
              <div onClick={()=> setQuantity(++quantity)} className=" h-[56px] w-[56px] cursor-pointer flex items-center justify-center bg-transparent rounded-[50%] hover:bg-[#F4F4F4] ">
                <HiOutlinePlus  className=" w-6 h-6" />
              </div>
            </div>
            <div className=" flex items-center gap-x-4"> 
              <Button content={"Buy Now"} paddingX="40px" paddingY="16px" color="white" radious="10" bg="#FF624C"/>
              <div className=" h-[62px] w-[62px] flex items-center justify-center rounded-[10px] border border-[#FF624C]">
                  <CartIcon width={28} height={28}/>
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
