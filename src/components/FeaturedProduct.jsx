import Container from "./layouts/Container";
<div>
  
</div>
import ProductLayout from "./layouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import { Link } from "react-router-dom";
import ArrowRight from "./icons/ArrowRight";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <RightArrow springArrow={false} bg={"#fff"} click={onClick} />
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <LeftArrow click={onClick} />
  );
}


const FeaturedProduct = () => { 

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      centerMode: true,
      centerPadding: "0px",
      className: "center",
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }, 
      },
        {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }, 
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
      ],
    }

  return (
    <div className=" px-2">
      <Container>
        <div className=" sm:flex sm:items-center sm:justify-between mb-4 sm:mb-12">
          <h3 className=" font-poppins font-semibold text-[#303030] text-3xl sm:text-4xl leading-[46px] mb-2.5 sm:mb-0">Featured Products</h3>
            <Link to='/' className=" flex gap-x-4 items-center text-[#FF624C] font-montserrat text-base font-bold leading-9">View All <ArrowRight/></Link>
        </div>
          <div className=" max-w-[1440px] mx-auto">
            <Slider {...settings}>
            <div className="slick-slide">
               <div className=" scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"PHONE"}
                  tittle={"JPhone 13 High Quality Value Buy Best Cam..."}
                  price={"$999.00"}
                  rating={5}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
            <div className="slick-slide">
               <div className=" scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"AUDIO"}
                  tittle={"WH-1000XM4 Wireless Headphones High Qu..."}
                  price={"$59.00"}
                  rating={4}
                  oldPrice={"$118.00"}
                  discount={true}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
            <div className="slick-slide">
               <div className=" scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"LAPTOP"}
                  tittle={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."}
                  price={"$1,199.00"}
                  rating={3}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
            <div className="slick-slide">
               <div className=" scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"CAMERA"}
                  tittle={"Mini Polaroid Camera for Girls with Flash Li..."}
                  price={"$79.00"}
                  rating={5}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
            <div className="slick-slide">
               <div className="scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"TELEVISION"}
                  tittle={"AG OLED65CXPUA 4K Smart OLED TV New ..."}
                  price={"$2,799.00"}
                  rating={2}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
            <div className="slick-slide">
               <div className="scale-90 sm:scale-100">
                  <ProductLayout 
                  catagory={"TELEVISION"}
                  tittle={"AG OLED65CXPUA 4K Smart OLED TV New ..."}
                  price={"$2,799.00"}
                  rating={2}
                  bordering={true}
                  stack={false}
                  starckAmount={"50"} />
               </div>
            </div>
          </Slider>
          </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
