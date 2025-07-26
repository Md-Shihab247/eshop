import Container from "./layouts/Container"
import Slider from "react-slick";

  function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div className={className} style={{ ...style, display: "none"}}/>
  );
}

const Brands = () => {

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className=" mx-2 sm:mx-0 my-[40px] sm:my-[100px]">
        <Container>
            <div className="max-w-screen">
              <Slider {...settings} className=" sm:flex sm:items-center sm:gap-x-[199px]">
                <div>
                  <div className=" h-6 mx-5 sm:mx-0 flex items-center sm:items-start sm:h-0">
                    <img src="./images/logo1.png" alt="samsung logo" className="scale-190 sm:scale-100" />
                  </div>
                </div>
                <div>
                  <div className=" h-6 mx-5 sm:mx-0 flex items-center sm:items-start sm:h-0">
                    <img src="./images/logo2.png" alt="Open AI logo" className="scale-190 sm:scale-100" />
                  </div>
                </div>
                <div>
                  <div className=" h-6 mx-5 sm:mx-0 flex items-center sm:items-start sm:h-0">
                    <img src="./images/logo3.png" alt="Amazon logo"  className=" relative top-1 scale-190 sm:scale-100"/>
                  </div>
                </div>
                <div>
                  <div className=" h-6 mx-5 sm:mx-0 flex items-center sm:items-start sm:h-0">
                    <img src="./images/logo4.png" alt="Tencent logo" className="scale-190 sm:scale-100" />
                  </div>
                </div>
                <div>
                  <div className=" h-6 mx-5 sm:mx-0 flex items-center sm:items-start sm:h-0">
                    <img src="./images/logo5.png" alt="Spotify logo" className="scale-190 sm:scale-100" />
                  </div>
                </div>
            </Slider>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Brands