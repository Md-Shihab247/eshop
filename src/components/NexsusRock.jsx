import React from 'react'
import NexsusLeft from './NexsusLeft'
import NexsusRight from './NexsusRight'

const NexsusRock = () => {
  return (
    <>
        <div className=' flex gap-x-[56px] mt-12'>
            <NexsusLeft/>
            <NexsusRight/>    
        </div>
    </>
  )
}

export default NexsusRock