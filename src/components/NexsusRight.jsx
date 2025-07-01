import {IoMdStar } from "react-icons/io";
import Button from "../components/Button"
const NexsusRight = () => {
  return (
    <div className="w-[46%]">
            <div>
              <div className=" flex items-center">
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <IoMdStar className={`text-yellow-400 h-4 w-4`} />
                <span className=" ml-2  text-[#303030] font-montserrat text-xl font-normal leading-7.5">
                  ( 142 )
                </span>
              </div>

              <p className=" pt-4 pb-6  text-[#303030] font-poppins text-4xl font-semibold leading-[46px]">
                NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM
                Pro
              </p>
              <hr className="border-[#303030] opacity-25 w-[630px]" />
              <div className=" flex items-start gap-x-[18px]">
                <big className=" font-poppins text-[56px] text-[#FF624C] font-bold leading-[68px]">
                  $2,999.99
                </big>
                <small className=" relative top-[27px] font-montserrat text-xl text-[ #303030] font-normal leading-7.5 opacity-50 line-through">
                  $5,499.99
                </small>
              </div>

              <div className=" max-w-[630px] mt-12 flex gap-x-[87px]">
                <ul className="text-[#303030] font-poppins font-semibold leading-7.5 text-xl [&>li]:mb-4">
                    <li>Brand</li>
                    <li>Size</li>
                    <li>Weight</li>
                    <li>Delivery</li>
                    <li>Variant</li>
                </ul>
                <ul className="text-[#303030] font-montserrat font-normal leading-7.5 text-xl [&>li]:mb-4">
                    <li>NexSUS Tech Company</li>
                    <li>15.7 x 11.1 x 1.0 inches (W x D x H)</li>
                    <li>6.28 pounds</li>
                    <li>Worldwide</li>
                <div className=" flex gap-x-1 flex-wrap">
                    <Button isOpacity={true} content={"Off White"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#303030" size="16px"/>
                    <Button isOpacity={true} content={"Space Gray"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#FF624C" size="16px"/>
                    <Button isOpacity={true} content={"Jet Black"} fontName="Montserrat" weight="700" lineHeight="24px" bg="white" paddingX="32px" paddingY="16px" color="#303030" size="16px"/>
                    <button className="text-[#303030] mt-2 font-montserrat font-bold text-base leading-6 opacity-25 px-8 py-4 border border-[#303030] rounded-[5px] bg-white cursor-pointer">Cinnamon Red</button>
                </div>
                </ul>

              </div>
            </div>
          </div>
  )
}

export default NexsusRight