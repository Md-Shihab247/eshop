import { Link } from "react-router-dom";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";
import ArrowRight from "./icons/ArrowRight";

const BestSeller = () => {
  return (
     <div className=" my-[30px] sm:my-[80px] px-2 sm:px-0">
      <Container>
        <div className=" flex gap-x-[74px]">
         <div>
           <div className=" sm:flex sm:justify-between mb-6 sm:mb-12 sm:max-w-[902px]">
             <h3 className=" font-poppins font-semibold text-[#303030] text-3xl sm:text-4xl leading-[46px]">Best Seller</h3>
             <Link to='/' className=" flex gap-x-4 items-center text-[#FF624C] font-montserrat text-base font-bold leading-9">View All <ArrowRight/></Link>
          </div>
        <div className=" flex justify-between">
          <div className=" sm:flex  sm:flex-wrap sm:gap-x-[22px] sm:max-w-[902px]">
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"AUDIO"} tittle={"Wireless Bluetooth Speaker Portable Sou..."} price={"$1,199.00"} rating={5} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"TABLET"} tittle={"Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ..."} price={"$129.00"} rating={4} oldPrice={"$167.00"} discount={true} bordering={true} stack={false} starckAmount={"50"} />
          </div>
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"WATCH"} tittle={"Mobile Watch A Series GPS 7/144 45 mm Red.."} price={"$999.00"} rating={3} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"PHONE"} tittle={"LT Phone RAM 16/256 GB Rose Gold Guaran..."} price={"$999.00"} rating={5} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"LAPTOP"} tittle={"Gaming Laptop ZDY 15.6 Inch 512 GB VGA ..."} price={"$1,659.00"} rating={2} bordering={true} discount={false} stack={false} starckAmount={"50"} />
          </div>
          <div className=" max-w-screen sm:max-w-[285px] scale-96 sm:scale-100">
            <ProductLayout catagory={"HOME"} tittle={"Wash Machine 11 KG Front Loading Steam ..."} price={"$5,699.00"} rating={2} oldPrice={"$6,268.00"} bordering={true} discount={true} stack={false} starckAmount={"50"} />
          </div>
          </div>
        </div>
         </div>
         <img src="./images/bestSeller.png" alt="best-seller" className=" hidden sm:flex"/>
        </div>
      </Container>
    </div>
  )
}

export default BestSeller