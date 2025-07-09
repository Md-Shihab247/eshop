import React from 'react'
import Container from "../components/layouts/Container"
import InputBox from '../components/InputBox'
import { Link } from 'react-router-dom'
import FooterCallIco from "../components/icons/FooterCallIcon"
import FooterEmailIcon from "../components/icons/FooterEmailIcon"
import FooterLocationIcon from "../components/icons/FooterLocationIcon"
import Button from "../components/Button"
const ContactPage = () => {
  return (
    <div className=' mt-8 mb-20'>
      <Container>
      <iframe  className=' rounded-[15px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182248.47927248967!2d90.25487217580321!3d23.781067239709326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1751628841154!5m2!1sen!2sbd" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className=" mt-16 flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <Link to="/">Home</Link>
            <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <Link to="/contact" className=' font-bold'>Checkout</Link>
      </div>


      <div className=' mt-12 flex gap-x-[56px]'>
        <div className='w-[57%]'>
              <div className=' w-full [&>div]:mb-8'>
                  <h4 className=' text-[#303030] font-poppins text-4xl font-semibold leading-[46px]'>Contact Us</h4>
                  <p className=' mt-3 mb-12 text-[#303030] font-montserrat text-xl font-normal leading-[30px]'>Have any questions for us? Don’t hesitate to contact us.</p>

                <div className='w-[100%]'>
                  <InputBox isStar={true} textArea={false} type={"text"} inputType={"Name"} placeholder={"Amelia Robert Watson"}/>
                </div>     
                <div className='flex gap-x-4'>
                  <div className='w-[40%]'>
                    <InputBox isStar={false} textArea={false} type={"text"} inputType={"Phone Number"} placeholder={"+123 456 7890"}/>
                  </div>
                  <div className='w-[60%]'>
                    <InputBox isStar={true} textArea={false} type={"text"} inputType={"Email Address"} placeholder={"amelia.watson@eshop.com"}/>
                  </div>
                </div>
              
                <div className='w-[100%]'>
                  <InputBox isStar={true} textArea={true} type={"text"} isContact={true} inputType={"Message"} placeholder={"Enter your message ..."}/>
                </div>
                <Button content={"Submit"} bg='#FF624C' color='#fff' paddingX='40px' paddingY='16px' radious='10'/>
              </div>
            </div>
          <div className=' w-[40%] '>
            <div className='bg-[#F4F4F4] rounded-[25px] p-10 box-border'>
               <h5 className=' text-[#303030] font-poppins text-2xl font-semibold leading-7.5'>Let’s Keep in Touch!</h5>
               <p className=' mt-4 text-[#303030] font-montserrat text-xl font-normal opacity-75 leading-7.5'>We would love to hear from you. Contact us for any inquiries you might have for us.</p>


               <ul className=' mt-10 flex flex-col gap-y-3 text-[#303030] font-montserrat text-base font-bold leading-6'>
                  <li>
                    <span className=" cursor-pointer flex items-center gap-x-6">
                    <FooterCallIco/>
                    <Link to="tel: +1 (555) 123-4567">+1 (555) 123-4567</Link>
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer flex items-center gap-x-6">
                     <FooterEmailIcon/>
                     <Link to="mailto:information@eshop.com">information@eshop.com</Link>
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer flex items-center gap-x-6">
                      <FooterLocationIcon/>
                      <Link to="https://maps.app.goo.gl/n58JNE5g419y34Uc8" target="_blank">
                        123 Main Street, Suite 105, Anytown USA
                      </Link>
                    </span>
                  </li>
              </ul>

              <div className='mt-[56px]'>
                 <h4 className='text-[#303030] font-montserrat text-xl font-bold leading-7.5 inline-block relative before:absolute before:w-full before:h-1 before:bg-[#FF624C] before:bottom-[-4px] before:left-0'>Opening Hours</h4>

                 <div className='mt-6'>  
                    <div className=' flex gap-x-3 text-[#303030] font-montserrat text-base font-normal leading-6'>
                      <span className=' font-bold'>MON to FRI:</span> 
                      <p>08:00 AM - 04:00 PM</p>
                    </div>
                    <div className=' mt-2 flex gap-x-3 text-[#303030] font-montserrat text-base font-normal leading-6'>
                      <span className=' font-bold'>SAT to SUN:</span> 
                      <p>09:00 AM - 03:00 PM</p>
                    </div>
                 </div>
              </div>
            </div>

         </div>
  </div>
    </Container>
    </div>
  )
}

export default ContactPage