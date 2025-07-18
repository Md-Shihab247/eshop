import HeadPhone from "./icons/HeadPhone";
import Secure from "./icons/Secure";
import Shipping from "./icons/Shipping";
import Transparent from "./icons/Transparent";
import Container from "./layouts/Container";

const Facility = () => {
  return (
    <>
      <div className=" px-2">
        <Container>
        <div className=" flex justify-between items-center flex-wrap my-[20px] sm:my-[80px]">
          <div className=" flex items-center mb-5 sm:mb-0 gap-x-3 sm:gap-x-6 w-[49.5%] sm:w-auto">
            <HeadPhone />
            <div>
              <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                Responsive
              </h3>
              <p className=" text-xs sm:text-base font-montserrat text-[#303030]  font-normal mt-0.5 leading-6">
                Customer service available 24/7
              </p>
            </div>
          </div>

          <div className=" flex items-center mb-5 sm:mb-0 gap-x-3 sm:gap-x-6 w-[49.5%] sm:w-auto">
            <Secure />
            <div>
              <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                Secure
              </h3>
              <p className="text-xs sm:text-base font-montserrat text-[#303030] font-normal mt-0.5 leading-6">
                Certified marketplace since 2017
              </p>
            </div>
          </div>

          <div className=" flex items-center mb-5 sm:mb-0 gap-x-3 sm:gap-x-6 w-[49.5%] sm:w-auto">
            <Shipping />
            <div>
              <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                Shipping
              </h3>
              <p className="text-xs sm:text-base font-montserrat text-[#303030] font-normal mt-0.5 leading-6">
                Free, fast, and reliable worldwide
              </p>
            </div>
          </div>

          <div className=" flex items-center mb-5 sm:mb-0 gap-x-3 sm:gap-x-6 w-[49.5%] sm:w-auto">
            <Transparent />
            <div>
              <h3 className=" font-montserrat text-[#303030] text-base font-bold leading-6">
                Transparent
              </h3>
              <p className="text-xs sm:text-base font-montserrat text-[#303030] font-normal mt-0.5 leading-6">
                Hassle-free return policy
              </p>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Facility;
