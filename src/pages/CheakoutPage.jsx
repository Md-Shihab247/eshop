import React, { useState } from 'react'
import Container from '../components/layouts/Container'
import InputBox from '../components/InputBox'

const CheakoutPage = () => {

  let [active,setActive] = useState("01")

  return (
    <div className=' mt-16'>
      <Container>
        <div className=" flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <div>Home</div>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div>Cart</div>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div className=' font-bold'>Checkout</div>
        </div>

        <h1 className=' mt-12 text-center font-poppins text-[56px] font-bold leading-[68px] text-[#303030]'>Checkout</h1>
        <div className=' flex justify-center items-center gap-x-[63px] mt-[36px]'>
          <div onClick={()=> setActive("01")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "01"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 01 </div>
            }
            <div className={ ` ${active == "01" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "01" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Information</div>
          </div>

          <div onClick={()=> setActive("02")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "02"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 02 </div>
            }
            <div className={ `${active == "02" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "02" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Shipping</div>
          </div>

          <div onClick={()=> setActive("03")} className=' flex items-center gap-x-4 cursor-pointer'>
            {active == "03"
              &&
              <div className=' w-[50px] h-[50px] rounded-[50%] bg-[#FF624C] flex items-center justify-center text-white font-montserrat font-bold text-base leading-6'> 03 </div>
            }
            <div className={ `${active == "03" ? "text-[#303030]" : "text-[#CBCBCB]"} font-poppins text-2xl font-semibold leading-6 relative ${active == "03" && " before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0 "}`}>Payment</div>
          </div>
        </div>

        <div className=' mt-20'>
            <h2 className=' mt-12 font-poppins text-[36px] font-semibold leading-[46px] text-[#303030]'>Billing Details</h2>

            <div className=' mt-10'>
              <div className=' w-[57%] [&>div]:mb-8'>
                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"First Name"} placeholder={"Amelia Robert"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"Last Name"} placeholder={"Watson"}/>
                  </div>
                </div>
                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"number"} inputType={"Phone Number"} placeholder={"+123 456 7890"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"email"} inputType={"Email Address"} placeholder={"amelia.watson@eshop.com"}/>
                  </div>
                </div>
                <div className='w-[100%]'>
                  <InputBox textArea={false} type={"text"} inputType={"Address"} placeholder={"Home Address, Auxiliary St. 12345, Anywhere State"}/>
                </div>     
                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"Country"} placeholder={"Indonesia"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"State"} placeholder={"Kalimantan Timur"}/>
                  </div>
                </div>
                <div className='flex gap-x-4'>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"City"} placeholder={"Samarinda"}/>
                  </div>
                  <div className='w-[50%]'>
                    <InputBox textArea={false} type={"text"} inputType={"ZIP Code"} placeholder={"555555"}/>
                  </div>
                </div>
                <div className='w-[100%]'>
                  <InputBox textArea={true} type={"text"} inputType={"Order Notes"} placeholder={"Enter your order notes ..."}/>
                </div>
              </div>
              <div className=' w-[30%]'></div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default CheakoutPage