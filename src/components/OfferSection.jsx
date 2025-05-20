import React from 'react'
import Container from './layouts/Container'

const OfferSection = () => {
  return (
    <Container>
        <div className=' flex justify-center gap-x-6'>
            <img src="./images/offerImg1.png" alt="offer img1" />
            <img src="./images/offerImg2.png" alt="offer img2" />
        </div>
    </Container>
  )
}

export default OfferSection