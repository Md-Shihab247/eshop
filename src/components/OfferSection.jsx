import React from 'react'
import Container from './layouts/Container'

const OfferSection = () => {
  return (
    <div className=' px-2 sm:px-0'> 
      <Container>
        <div className=' sm:flex sm:justify-center sm:gap-x-6 my-6 sm:my-20'>
            <img src="./images/offerImg2.png" alt="offer img2" className=' mb-4 sm:mb-0'/>
            <img src="./images/offerImg1.png" alt="offer img1" />
        </div>
      </Container>
    </div>
  )
}

export default OfferSection