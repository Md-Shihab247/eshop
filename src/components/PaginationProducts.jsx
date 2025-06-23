import React, { useState } from 'react'
import ProductLayout from './layouts/ProductLayout';
import Pagination from './Pagination';

const PaginationProducts = () => {

       let [currentPage,setCurrentPage] = useState(1)
       let itemsParPage = 16
    
    let products = Array.from({length : 200} ,(_,index)=>({
            id: index + 1,
            name : `product ${index + 1}`,
            price : (Math.random() * 1000).toFixed(2)
    }))

  let startIndex = (currentPage - 1 ) * itemsParPage
  let currentProducts = products.slice(startIndex, startIndex + itemsParPage)
    
  return (
      <div>
         <div className='mb-12'>
            <h1 className=' text-[#303030] font-poppins text-4xl font-semibold leading-[46px]'>Products</h1>
            <p className='mt-6 text-[#303030] font-montserrat text-base font-normal leading-6'>Showing {currentProducts[0].id} - {currentProducts[15].id} of {products.length} results.</p>
          </div>
        <div className='w-full flex flex-wrap'>
          {currentProducts.map((item,index)=>{

           return <div key={index} className='max-w-[285px]'>
                   <ProductLayout 
                    catagory={item.name}
                    tittle={"WH-1000XM4 Wireless Headphones High Qu..."}
                    price={"$59.00"}
                    rating={4}
                    oldPrice={"$118.00"}
                    discount={true}
                    bordering={true}
                    stack={false}
                    starckAmount={"50"} />
                 </div>

          })
          
          }
         </div>

              <div className='mx-auto'>
                <Pagination
                totalProducts={products.length}
                parPageProducts={itemsParPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
              </div>
      </div>
  )
}

export default PaginationProducts