import React from 'react'
import Container from "../components/layouts/Container"
const ContactPage = () => {
  return (
    <div className=' mt-8'>
      <Container>
      <iframe  className=' rounded-[15px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182248.47927248967!2d90.25487217580321!3d23.781067239709326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1751628841154!5m2!1sen!2sbd" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
    </div>
  )
}

export default ContactPage