import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci'
import Button from "../components/Button"

    let Summary = [
        {
          tittle : "2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD",
          quantity : 1,
          price : "$1,659.00"
        },
        {
          tittle : "Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band",
          quantity : 1,
          price : "$999.00"
        },
        {
          tittle : "LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ",
          quantity : 2,
          price : "$4,598.00"
        },
        {
          tittle : "Console Game Stick HD Wireless Bluetooth Connect",
          quantity : 2,
          price : "$218.00"
        },
        {
          tittle : "Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28",
          quantity : 1,
          price : "$259.00"
        }
        
    ]

const OrderSummary = () => {
  return (
    <div className=' w-[40%] bg-[#F4F4F4] rounded-[25px] p-10 box-border'>
        <h5 className=' text-[#303030] font-poppins text-2xl font-semibold leading-6'>Order Summary</h5>

        <div className='mt-7'>
            {Summary.map((item,index)=>{

         return <div key={index} className=' flex py-5 box-border border-b border-[#C3C3C3] text-[#303030] text-xl font-montserrat font-normal leading-7.5'>
                    <p className=' w-[250px]'> {item.tittle} </p>
                    <span className=' font-bold px-[63px]'> {item.quantity} </span>
                    <div className=' font-poppins font-semibold'> {item.price} </div>
                </div>
            })
            }

            <div className=' flex gap-x-[230px] pt-[18px] mb-12 box-border  text-[#303030] text-xl font-montserrat font-normal leading-7.5'>
                <div className=' flex'>
                    <span>Shipping Fee</span>
                    <CiCircleQuestion className=' w-[18px] h-[18px] text-[#FF624c]' />
                </div>
                <div className=' font-bold'>$10.00</div>
            </div>

            <div  className=' bg-white rounded-[10px] text-center w-full'>
                <div className=' px-6 py-[27px] flex justify-between text-[#303030] text-base font-montserrat font-bold leading-6'>
                    <span>Total</span>
                    <span className=' text-xl leading-7.5'>$4,999.00</span>
                </div>

                <div className=' pb-6'>
                   <Button bg='#FF624C' color='#fff' content={"Order Now"} paddingX='179px' paddingY='24px' radious='10'/> 
                </div>                
            </div>
        </div>
    </div>
  )
}

export default OrderSummary