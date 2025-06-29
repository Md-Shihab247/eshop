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
    <RightArrow bg="#F4F4F4" width="72px" height="72px" springArrow={true} click={onClick}/>
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

    let sellEndTime = new Date("August 31, 2025 11:59:59 PM +06").getTime();
    let now = new Date().getTime();
    let difference = sellEndTime - now;
    if (difference < 0) {
        return {days : "00" , hours: "00" ,minutes: "00", second: "00"}
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
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
  };

  return (
     <div className="py-16 bg-[#F4F4F4]" >
      <Container>
        <div className=" flex items-center gap-x-[127px]">

          <div className=" w-[400px]"> 
             <div className=" mt-[171px]">
               <h4 className=" font-poppins text-[#303030] text-[56px] font-bold leading-[68px]">Spring Sale</h4>
              <div className=" mt-10 font-poppins flex items-center gap-x-[30px] text-4xl font-semibold leading-[46px] text-[#FF624C]">
                <div> {timerLeft.days < 10 ? `0${timerLeft.days}`  : timerLeft.days} </div>
                <span> : </span>
                <div> {timerLeft.hours < 10 ? `0${timerLeft.hours}` : timerLeft.hours} </div>
                <span> : </span>
                <div> {timerLeft.minutes < 10 ? `0${timerLeft.minutes}` : timerLeft.minutes} </div>
                <span> : </span>
                <div> {timerLeft.second < 10 ? `0${timerLeft.second}` : timerLeft.second} </div>
              </div>
              <div className=" mt-2 mb-[72px] font-montserrat text-base text-[#303030] leading-6 font-normal flex items-center justify-between">
                <div className=" relative left-0.5"> Days </div>
                <div> Hours </div>
                <div className=" relative right-[14px]"> Minutes </div>
                <div className=" relative right-[25px]"> Seconds </div>
              </div>
              <Button content={"Shop Now"}/>
              <div className=" mt-[90px]">
                <img  src="images/springDots.png" alt="spring dots" />
              </div>
             </div>
         </div>
          <div className=" w-[970px] rounded-[10px]">
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
      </Container>
    </div>
  )
}

export default SpringSale