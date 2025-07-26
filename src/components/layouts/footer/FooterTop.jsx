import { useLocation } from "react-router-dom"
import Button from "../../Button"
import Container from "../Container"
const FooterTop = () => {

    let location = useLocation()

  return (
    <Container>
        {location.pathname == "/cart" ?
          <div className='pb-4.5 pt-20'>
                    <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-secondary mb-14 text-center'>Subscribe to get our updates</h3>
                    <div className='flex justify-center gap-x-4'>
                        <input type="email" name="" id="" className='w-201.5 border border-[#CBCBCB] py-5.5 px-10 rounded-[10px] font-montserrat font-normal text-base leading-6 text-[#646464]' placeholder='Enter your email address ...' />
                        <Button content='Subscribe'/>
                    </div>
                </div>
        :
        <div className={` ${location.pathname == '/product-list' ? 'bg-[linear-gradient(270deg,_rgba(244,244,244,1)_37%,_rgba(217,217,217,1)_52%)]': 'bg-[linear-gradient(90deg,_rgba(244,244,244,1)_36%,_rgba(217,217,217,1)_49%)]'} overflow-hidden w-full sm:rounded-[25px] py-12.5 sm:py-[114px] sm:pl-[100px] px-2 sm:px-0`}>
            {location.pathname == '/product-list'
             ?
            <div className=" relative left-[835px]">
              <h3 className=" text-[#303030] font-poppins text-4xl leading-[46px] font-semibold"> {location.pathname == '/product-details' ? 'Get Up-to-Date Gadget Technology' : 'Get Our Updates'} </h3>
              <p className=" mt-4 mb-8 font-montserrat text-[#303030] text-[20px] font-normal leading-[30px] max-w-[490px]">Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
              <input type="email"  placeholder="Enter your email address ..." className=" w-[494px] h-[72px] text-base text-[#303030] pl-6 pr-12 py-[18px] bg-white border border-[#929292] opacity-75 rounded-[10px] mb-4"/>
              <br />
              <Button content={'Subscribe'}/>
            </div>

            :
          <div>
            <h3 className=" text-[#303030] font-poppins text-3xl sm:text-4xl leading-[46px] font-semibold max-w-[360px]"> { location.pathname == '/contact' ? 'Get Up-to-Date Gadget Technology' : 'Get Our Updates'} </h3>
            <p className=" mt-2 sm:mt-4 mb-8 font-montserrat text-[#303030] text-base sm:text-[20px] font-normal leading-[30px] pr-6 sm:pr-0 max-w-[490px]">Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            {location.pathname  == "/product-detail" || location.pathname == "/contact"
              ?
              null
              :
            <input type="email"  placeholder="Enter your email address ..." className="w-[90vw] sm:w-[494px] h-[50px] sm:h-[72px] text-base text-[#303030] pl-3 sm:pl-6 pr-12 py-[18px] bg-white border border-[#929292] opacity-75 rounded-[6px] sm:rounded-[10px] mb-4"/>

            }
            <br />
            {location.pathname == "/product-detail" || location.pathname == "/contact" ?
             <Button content={'Shop Now'}/>
             :
             <Button content={'Subscribe'}/>

            }
          </div>

          }
          </div>

        }
    </Container>
  )
}

export default FooterTop