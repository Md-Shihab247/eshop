import { Link } from "react-router-dom";
import Container from "../Container";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const BottomLayer = () => {
  let [isDropDownOpen1, setIsDropDownOpen1] = useState(false);
  let [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  let dropDownOneRef = useRef(null);
  let dropDownTwoRef = useRef(null);

  // All Categories Dropdown here 
  useEffect(()=>{
    document.addEventListener('mousedown',(event)=>{
      if (dropDownOneRef.current && !dropDownOneRef.current.contains(event.target)) {
       setIsDropDownOpen1(false) 
      }
    })
  },[])

  // Products Dropdown here 
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if ( dropDownTwoRef.current && !dropDownTwoRef.current.contains(event.target)) {
        setIsDropDownOpen2(false);
      }
    });
  }, []);

  return (
    <div className=" bg-[#FF624C] py-6">
      <Container>
        <div className=" flex justify-between items-center">
          <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
            <li ref={dropDownOneRef}  className=" relative flex items-center justify-center gap-x-4">
              <FaBars className=" h-5 w-5" />
              <button onClick={()=> setIsDropDownOpen1(!isDropDownOpen1)}>All Categories</button>
              {isDropDownOpen1 && (
                <ul className="bg-[#fff] font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px]">
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Electronics
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Fashion
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Home & Kitchen
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Toys & Games
                  </li>
                  <li className=" cursor-pointer px-5 py-3 hover:bg-[#DFE3E7]">
                    Books & Stationery
                  </li>
                </ul>
              )}
            </li>
            <li ref={  dropDownTwoRef} className=" relative">
              <button className=" flex items-center cursor-pointer"  onClick={() => setIsDropDownOpen2(!isDropDownOpen2)}>
                Products
                <MdKeyboardArrowDown className=" ml-2 h-6 w-6" />
              </button>
              {isDropDownOpen2 && (
                <ul className="bg-[#fff] font-montserrat font-semibold absolute box-border top-8 left-[-45px] shadow-xl text-sm text-[#303030] w-[180px]">
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Gaming Consoles
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Microwave Ovens
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Wearable Devices
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Printers
                  </li>
                  <li className=" cursor-pointer border-b border-[#CBCBCB] px-5 py-3 hover:bg-[#DFE3E7]">
                    Smart Watches
                  </li>
                  <li className=" cursor-pointer px-5 py-3 hover:bg-[#DFE3E7]">
                    VR Headsets
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
            <li className=" flex items-center justify-center gap-x-4">
              <Link to={"#"}>LIMITED SALE 👋🏻</Link>
            </li>
            <li>
              <Link to={"#"}>Best Seller</Link>
            </li>
            <li>
              <Link to={"#"}>New Arrival</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default BottomLayer;
