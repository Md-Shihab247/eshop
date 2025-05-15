import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'

const FooterBottom = () => {
  return (
    <div className=' mt-[100px]'>
      <Container>
          <div className=' flex items-start pb-[80px] border-b border-[#CBCBCB]'>
              <div className=' font-montserrat text-base font-normal leading-6 text-[#303030] mr-[167px]'>
                <img src="./images/logo.png" alt="logo" className='mb-[158px]'/>
                <ul className=' flex flex-col gap-y-3'>
                  <li>
                    <span className=" flex items-center gap-x-3">
                    <IoCall className=' h-5 w-5'  />
                    <Link to="tel: +1 (555) 123-4567">+1 (555) 123-4567</Link>
                    </span>
                  </li>
                  <li>
                    <span className="flex items-center gap-x-3">
                     <IoIosMail className=' h-5 w-5'/>
                     <Link to="mailto:information@eshop.com">information@eshop.com</Link>
                    </span>
                  </li>
                  <li>
                    <span className="flex items-center gap-x-3">
                      <IoLocationSharp className=' h-5 w-5'/>
                      <Link to="https://maps.app.goo.gl/n58JNE5g419y34Uc8" target="_blank">
                        123 Main Street, Suite 105, Anytown USA
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div className=' mr-[96px]'>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Links</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li>Products List</li>
                  <li>Order Tracking</li>
                  <li>Products Guide</li>
                  <li>Shopping Cart</li>
                  <li>Tech Blog</li>
                </ul>
              </div>
              
              <div className=' mr-[96px]'>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Supports</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Return Policy</li>
                  <li>Help Centre</li>
                  <li>Store Locations</li>
                  <li>Careers</li>
                </ul>
              </div>
              
              <div className=' mr-[80px]'>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Categories</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li>Computers & Tablets</li>
                  <li>Mobile Phones & Accessories</li>
                  <li>TV & Home Theater</li>
                  <li>Audio & Headphones</li>
                  <li>Cameras & Camcorders</li>
                  <li>Gaming Equipment</li>
                  <li>Home Appliances</li>
                </ul>
              </div>
              
              <div>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-[25px]'>Links</h4>
                <img src="./images/payment.png" alt="logo" className=' mb-[74px]' />
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Follow Us</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </div>
              
          </div>
          <div className=' flex justify-between mt-2 text-sm font-normal font-montserrat text-[#303030] leading-5 mb-[88px]'>
            <Link to='#'>Copyright © 2023 E-Shop. All Rights Reserved.</Link>
            <div className=' flex gap-x-2.5'>
              <Link to="#">Privacy Policy</Link>
             |<Link to="#">Terms & Condition</Link>
             |<Link to="#">Sitemap</Link>
             </div>
          </div>
      </Container>
    </div>
  )
}

export default FooterBottom