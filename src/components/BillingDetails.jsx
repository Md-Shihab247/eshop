import React from 'react'
import InputBox from '../components/InputBox'
const BillingDetails = () => {
  return (
    <div className='w-[57%]'>
        <h2 className=' mt-12 font-poppins text-[36px] font-semibold leading-[46px] text-[#303030]'>Billing Details</h2>

            <div className=' mt-10'>
              <div className=' w-full [&>div:not(:last-child)]:mb-8'>
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
            </div>
    </div>
  )
}

export default BillingDetails