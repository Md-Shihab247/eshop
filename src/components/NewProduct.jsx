import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button"

const NewProduct = () => { 

      const newProducts = [
        { product: 'All Catagories' },
        { product: 'Beauty' },
        { product: 'Home' },
        { product: 'Electronics'  },
        { product: 'Toys'},
        { product: 'Books' },
    ]

    let [isDropDownOpen,setIsDropDownOpen] = useState(false)
    let [selected,setSelected] = useState(null)
    let dropdownRef = useRef(null)

    useEffect(()=>{

        let handleDropDown = (event)=>{

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownOpen(false)
            }
        }

        document.addEventListener('click',handleDropDown)
        return ()=>{
        document.removeEventListener('click',handleDropDown)
        }

    },[])

    let handleSelect = (item)=>{
      console.log(selected);
      
      setSelected(item)
      setIsDropDownOpen(false)

    }

  return (
    <div className="my-[80px]">
      <Container>
        <div className=" flex justify-between mb-12">
          <h3 className=" font-poppins font-semibold text-[#303030] text-4xl leading-[46px]">New Products</h3>
          <div className=" flex items-center gap-x-4">
            <span className=" text-[#303030] font-montserrat text-base font-normal leading-6">Sort by</span>
            <div 
                onClick={()=> {setIsDropDownOpen(!isDropDownOpen) }}
                ref={dropdownRef}
                className=" relative flex items-center"> 
                  {selected 
                  ?
                  <div  className=" flex items-center cursor-pointer text-[#FF624C] font-montserrat text-base font-bold leading-6"> {selected} <IoIosArrowDown  className={`${isDropDownOpen && `rotate-180`} ml-[100px] text-black h-4 w-4 `}/></div>
                  : 
                  <div  className=" flex items-center cursor-pointer text-[#FF624C] font-montserrat text-base font-bold leading-6"> All Catagories <IoIosArrowDown  className={ `${isDropDownOpen && `rotate-180`} ml-[100px] text-black h-4 w-4`}/></div>
                  }

                {isDropDownOpen && (
                    <ul className="bg-[#fff] rounded-[5px] overflow-hidden right-10 font-montserrat font-semibold absolute box-border top-8  shadow-xl text-sm text-[#303030] w-[180px] z-[999]">
                      {newProducts.map((item,index)=>{

                      return <li onClick={()=> handleSelect(item.product)} className={` py-1.5 px-3 cursor-pointer hover:bg-[#ddd]`} key={index}> {item.product} </li>

                      })}
                    </ul>
                      
                  )}
              </div>
          </div>
        </div>
          <div className=" flex gap-x-6">
          <ProductLayout catagory={"PHONE"} tittle={"JPhone 13 High Quality Value Buy Best Cam..."} price={"$999.00"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"AUDIO"} tittle={"WH-1000XM4 Wireless Headphones High Qu..."} price={"$59.00"} rating={4} oldPrice={"$118.00"} discount={false} bordering={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"LAPTOP"} tittle={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."} price={"$1,199.00"} rating={3} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"CAMERA"} tittle={"Mini Polaroid Camera for Girls with Flash Li..."} price={"$79.00"} rating={5} bordering={true} discount={true} stack={false} starckAmount={"50"} />
          <ProductLayout catagory={"TELEVISION"} tittle={"AG OLED65CXPUA 4K Smart OLED TV New ..."} price={"$2,799.00"} rating={2} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" mt-16 flex justify-center">
              <Button content={"Load More"} bg="transparent" color="#FF624C" border="1px solid #FF624C" />
          </div>
      </Container>
    </div>
  );
};

export default NewProduct;
