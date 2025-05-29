import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import FooterCallIcon from '../../icons/FooterCallIcon'
import FooterEmailIcon from '../../icons/FooterEmailIcon'
import FooterLocationIcon from '../../icons/FooterLocationIcon'

const FooterBottom = () => {
  return (
    <div className=' mt-[100px]'>
      <Container>
          <div className=' flex items-start pb-[80px] border-b border-[#CBCBCB]'>
              <div className=' font-montserrat text-base font-normal leading-6 text-[#303030] mr-[167px]'>
                <Link to="/"><img src="./images/logo.png" alt="logo" className='mb-[158px]'/></Link>
                <ul className=' flex flex-col gap-y-3'>
                  <li>
                    <span className=" cursor-pointer flex items-center gap-x-3">
                    <FooterCallIcon/>
                    <Link to="tel: +1 (555) 123-4567">+1 (555) 123-4567</Link>
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer flex items-center gap-x-3">
                     <FooterEmailIcon/>
                     <Link to="mailto:information@eshop.com">information@eshop.com</Link>
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer flex items-center gap-x-3">
                      <FooterLocationIcon/>
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
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Products List </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Order Tracking </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Products Guide </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Shopping Cart </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Tech Blog </Link> </li>
                </ul>
              </div>
              
              <div className=' mr-[96px]'>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Supports</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>About Us</Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Privacy Policy</Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Return Policy</Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Help Centre</Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Store Locations</Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Careers</Link> </li>
                </ul>
              </div>
              
              <div className=' mr-[80px]'>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Categories</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Computers & Tablets </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Mobile Phones & Accessories </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> TV & Home Theater </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Audio & Headphones </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Cameras & Camcorders </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Gaming Equipment </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'> Home Appliances </Link> </li>
                </ul>
              </div>
              
              <div>
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-[25px]'>Payments</h4>
                <img src="./images/payment.png" alt="logo" className=' mb-[74px]' />
                <h4 className=' font-poppins font-semibold text-xl leading-7.5 text-[#303030] mb-6'>Follow Us</h4>
                <ul className=' font-montserrat text-base font-normal leading-6 flex flex-col gap-y-3'>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Twitter </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Instagram </Link> </li>
                  <li> <Link to='/' className=' transition-all hover:text-[#FF624C]'>Facebook </Link> </li>
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