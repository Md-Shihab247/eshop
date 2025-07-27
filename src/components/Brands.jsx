import Container from "./layouts/Container"
import Marquee from "react-fast-marquee";


const Brands = () => {

  return (
    <>
      <div className=" mx-2 sm:mx-0 my-[40px] sm:my-[100px]">
        <Container>
             <Marquee pauseOnHover={false} speed={80}>
                    <div className='flex items-center gap-x-18 md:gap-x-50'>
                        <div className=' max-md:max-w-24'>
                            <img src="./images/logo1.png" alt="samsungLogo.png" />
                        </div>
                        <div className=' max-md:max-w-24'>
                            <img src="./images/logo2.png" alt="openAiLogo.png" />
                        </div>
                        <div className=' max-md:max-w-24'>
                            <img src="./images/logo3.png" alt="amazonLogo.png" className=" relative top-1"/>
                        </div>
                        <div className=' max-md:max-w-24'>
                            <img src="./images/logo4.png" alt="tencentLogo.png" />
                        </div>
                        <div className='mr-18 md:mr-50 max-md:max-w-24'>
                            <img src="./images/logo5.png" alt="spotifyLogo.png" />
                        </div>
                    </div>
                </Marquee>
        </Container>
      </div>
    </>
  )
}

export default Brands