import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "./icons/RightArrow";
import Button from "./Button";
import { useEffect, useState } from "react";


function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <span className=" hidden sm:block">
      <RightArrow bg="#F4F4F4" width="72px" height="72px" springArrow={true} click={onClick}/>
    </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}


const SpringSale = () => {


  let [timerLeft, setTimerLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {

    let sellEndTime = new Date("December 31, 2025 11:59:59 PM +06").getTime();
    let now = new Date().getTime();
    let difference = sellEndTime - now;
    if (difference < 0) {
        return {days : "0" , hours: "0" ,minutes: "0", second: "0"}
    }
    else {
      return {
        days : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours : Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes : Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        second:  Math.floor((difference % (1000 * 60)) / 1000),
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {

      setTimerLeft(calculateTimeLeft());

    }, 1000);

    return () => clearInterval(timer);
  }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 2500,
            }
          }
      ]
  };

  return (
     <div className=" py-8 sm:py-16 bg-[#F4F4F4] px-2 sm:px-0" >
      <Container>
        <div className=" sm:flex sm:items-center sm:gap-x-[127px]">

          <div className=" sm:w-[400px]"> 
             <div className=" mt-[20px] sm:mt-[171px]">
               <h4 className=" font-poppins text-[#303030] text-[45px] sm:text-[56px] text-center sm:text-left font-bold leading-[68px]">Spring Sale</h4>
               <div className=" flex flex-col items-center sm:flex sm:flex-col sm:items-center">
              <div className=" scale-90 sm:scale-100 mt-7.5 sm:mt-10 font-poppins flex items-center justify-start relative sm:left-[-15px] gap-x-[28px] sm:gap-x-[30px] text-3xl sm:text-4xl font-semibold leading-[46px] text-[#FF624C]">
                <div className=" h-[40px] w-[40px]"> {timerLeft.days < 10 ? `0${timerLeft.days}`  : timerLeft.days} </div>
                <span> : </span>
                <div className=" h-[40px] w-[40px]"> {timerLeft.hours < 10 ? `0${timerLeft.hours}` : timerLeft.hours} </div>
                <span> : </span>
                <div className=" h-[40px] w-[40px]"> {timerLeft.minutes < 10 ? `0${timerLeft.minutes}` : timerLeft.minutes} </div>
                <span> : </span>
                <div className="h-[40px] w-[40px] "> {timerLeft.second < 10 ? `0${timerLeft.second}` : timerLeft.second} </div>
              </div>
              <div className="w-screen sm:w-full scale-90 sm:scale-100 mt-2 mb-10 sm:mb-[72px] font-montserrat text-base text-[#303030] leading-6 font-normal flex items-center justify-around sm:justify-between">
                <div className=" relative left-[-10px] sm:left-1"> Days </div>
                <div className=" relative right-[-12px] sm:left-2"> Hours </div>
                <div className=" relative right-[-18px] sm:right-1"> Minutes </div>
                <div className=" relative right-[-20px] sm:right-3"> Seconds </div>
              </div>
               </div>
              <div className=" flex justify-center sm:block">
                <span className=" relative left-[10px] sm:left-0">
                  <Button content={"Shop Now"}/>
                </span>
              </div>
              <div className=" hidden sm:block mt-[90px]">
                <img  src="images/springDots.png" alt="spring dots" />
              </div>
             </div>
         </div>
          <div className="w-screen sm:w-[970px] mt-5 sm:mt-0 scale-90 sm:scale-100 rounded-[10px]">
               <div className=" ml-[-30px] sm:ml-0">
                 <Slider className="spring_sale" {...settings}>
                    <div className=" rounded-[10px]">
                        <ProductLayout springHover={true} springDiscount={true} springDisAmount={"10%"} rating={5} padding={true} src="images/spring-card-bg1.png" catagory="TELEVISION" tittle="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie..." price="$4,599.00" oldPrice="$5,058.00" stack={true} starckAmount={"50"} bordering={false}/>
                    </div>
                    <div className=" rounded-[10px]">
                        <ProductLayout springHover={true} springDiscount={true} springDisAmount={"50%"} rating={5} padding={true} src="images/spring-card-bg1.png" catagory="CAMERA" tittle="VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha..." price="$819.00" oldPrice="$1,638.00" limited={"LIMITED STOCK!"} stack={true} bordering={false}/>
                    </div>

                </Slider>
               </div>
          </div>  
        </div>
      </Container>
    </div>
  )
}

export default SpringSale