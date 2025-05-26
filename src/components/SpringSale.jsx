import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "./icons/RightArrow";
import Button from "./Button";


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

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
  };

  return (
     <div className="mb-[80px] py-16" style={{background: "url(images/springSaleBg.png)"}}>
      <Container>
        <div className=" flex justify-between items-center">

          <div className=" flex items-center"> 
             <div>
               <h4 className=" font-poppins text-[#303030] text-[56px] font-bold leading-[68px]">Spring Sale</h4>
              <div className=" mt-10 font-poppins text-4xl font-semibold leading-[46px] text-[#FF624C]">
                hello world
              </div>
              <div className=" mt-2 mb-[72px] font-montserrat text-base text-[#303030] leading-6 font-normal flex items-center justify-center gap-x-[58px]">
                <div>Days</div>
                <div>Hours</div>
                <div>Minutes</div>
                <div>Seconds</div>
              </div>
              <Button content={"Shop Now"}/>
             </div>
         </div>
          <div className=" w-[970px] rounded-[10px]">
                <Slider {...settings}>
                    <div className=" max-w-[463px] rounded-[10px] mx-[15px]">
                        <ProductLayout springDiscount={true} springDisAmount={"10%"} rating={5} padding={true} src="images/spring-card-bg1.png" catagory="TELEVISION" tittle="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie..." price="$4,599.00" oldPrice="$5,058.00" stack={true} starckAmount={"50"} bordering={true}/>
                    </div>
                    <div className=" max-w-[463px] rounded-[10px] mx-[15px]">
                        <ProductLayout springDiscount={true} springDisAmount={"50%"} rating={5} padding={true} src="images/spring-card-bg1.png" catagory="CAMERA" tittle="VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha..." price="$819.00" oldPrice="$1,638.00" limited={"LIMITED STOCK!"} stack={true} bordering={true}/>
                    </div>

                </Slider>
          </div>  
        </div>
      </Container>
    </div>
  )
}

export default SpringSale