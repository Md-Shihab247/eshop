import { Link } from "react-router-dom"
import Container from "../Container"
import { FaBars } from "react-icons/fa"
const BottomLayer = () => {
  return (
    <div className=' bg-[#FF624C] py-6'>
      <Container>
        <div className=" flex justify-between items-center">
          
            <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
              <li className=" flex items-center justify-center gap-x-4">
                <FaBars  className=" h-5 w-5"/>
                <Link to={'/product-list'}>All Categories</Link>
              </li>
              <li>
                <Link to={'/product-list'}>Products</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          
            <ul className=" text-white font-bold font-montserrat text-base leading-6 flex gap-x-[80px]">
              <li className=" flex items-center justify-center gap-x-4">
                <Link to={'#'}>LIMITED SALE 👋🏻</Link>
              </li>
              <li>
                <Link to={'#'}>Best Seller</Link>
              </li>
              <li>
                <Link to={'#'}>New Arrival</Link>
              </li>
              
            </ul>
        </div>
      </Container>
    </div>
  )
}

export default BottomLayer