import React, { useState } from 'react'


    let contentOne = [
        {
            Heading: "Brand",
            paragraph: "NexSUS Tech Company"
        },
        {
            Heading: "Display",
            paragraph: "17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare"
        },
        {
            Heading: "Processor",
            paragraph: "10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)"
        },
        {
            Heading: "Graphics",
            paragraph: "NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)"
        },
        {
            Heading: "Memory",
            paragraph: "32GB DDR4-3200 RAM"
        },
        {
            Heading: "Storage",
            paragraph: "1TB PCIe NVMe M.2 SSD"
        }
        
    ]
    let contentTwo = [
        {
            Heading: "Audio",
            paragraph: "2 x 4W speakers with Smart Amp technology"
        },
        {
            Heading: "Connection",
            paragraph: "Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio"
        },
        {
            Heading: "Keyboard",
            paragraph: "Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting, Aura Sync technology"
        },
        {
            Heading: "Battery",
            paragraph: "4-cell 90Wh lithium battery (up to 8 hours battery life)"
        },
        {
            Heading: "Dimensions",
            paragraph: "15.7 x 11.1 x 1.0 inches (W x D x H)"
        },
        {
            Heading: "Weight",
            paragraph: "6.28 pounds"
        }
        
    ]
const ProductSpecifications = () => {
    let [active,setActive] = useState("specific")

  return (
    <div>
        <div className=' gap-x-12 flex font-poppins text-[#303030] text-2xl font-semibold leading-7.5'>
            <div onClick={()=> setActive("description")} className={`${active == "description" && "opacity-100 relative before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0"} opacity-25  cursor-pointer`}>Description</div>
            <div onClick={()=> setActive("specific")} className={`${active == "specific" && "opacity-100 relative before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0"} opacity-25  cursor-pointer`}>Specification</div>
            <div onClick={()=> setActive("return")} className={`${active == "return" && "opacity-100 relative before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0"} opacity-25  cursor-pointer`}>Return</div>
            <div onClick={()=> setActive("reviews")} className={`${active == "reviews" && "opacity-100 relative before:absolute before:h-1 before:w-full before:bg-[#FF624C] before:bottom-[-8px] before:left-0"} opacity-25  cursor-pointer`}>Reviews</div>
        </div>

        {active == "description"
          &&   
         <div className='mt-12 text-center font-poppins text-[#303030] text-xl font-semibold leading-7.5'> Currently there is no Description</div>
        }

        {active == "specific"
          && 
          <div className=' flex gap-x-6 mt-12'>
            <div className='w-[50%]'>
                {contentOne.map((item,index)=>{
                  return <div key={index} className=' flex [&>div]:mb-8'>
                            <div>
                               <div className=' w-[185px] font-poppins text-[#303030] text-xl font-semibold leading-7.5'> {item.Heading} </div>
                            </div>
                            <div className=' max-w-[560px]'>
                                <div className='  px-3 font-montserrat text-[#303030] text-xl font-normal leading-7.5 opacity-75'> {item.paragraph} </div>
                            </div>
                        </div>
                })
                }
            </div>
            <div className='w-[50%]'>
                {contentTwo.map((item,index)=>{
                  return <div key={index} className=' flex [&>div]:mb-8'>
                            <div>
                               <div className=' w-[185px] font-poppins text-[#303030] text-xl font-semibold leading-7.5'> {item.Heading} </div>
                            </div>
                            <div className=' max-w-[560px]'>
                                <div className=' font-montserrat text-[#303030] text-xl font-normal leading-7.5 opacity-75'> {item.paragraph} </div>
                            </div>
                        </div>
                })
                }
            </div>
          </div>
        }

        {active == "return"
          &&   
         <div className='mt-12 text-center font-poppins text-[#303030] text-xl font-semibold leading-7.5'> Currently there is no return information</div>
        }

        {active == "reviews"
          &&   
         <div className='mt-12 text-center font-poppins text-[#303030] text-xl font-semibold leading-7.5'> Currently there is no Reviews</div>
        }

         <hr  className=' border-[#303030] opacity-25 mt-12'/>
    </div>
  )
}

export default ProductSpecifications