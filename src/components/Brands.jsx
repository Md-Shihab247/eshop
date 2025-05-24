import Container from "./layouts/Container"
import Slider from "react-slick";
const Brands = () => {

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };

  return (
    <>
      <div className=" my-[100px]">
        <Container>
            <Slider {...settings} className=" flex items-center gap-x-[199px]">
                <div>
                  <img src="./images/logo1.png" alt="samsung logo" />
                </div>
                <div>
                  <img src="./images/logo2.png" alt="Open AI logo" />
                </div>
                <div>
                  <img src="./images/logo3.png" alt="Amazon logo" />
                </div>
                <div>
                  <img src="./images/logo4.png" alt="Tencent logo" />
                </div>
                <div>
                  <img src="./images/logo5.png" alt="Spotify logo" />
                </div>
            </Slider>
      </Container>
      </div>
    </>
  )
}

export default Brands