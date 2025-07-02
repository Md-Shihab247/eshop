import Container from "../components/layouts/Container";
import NewProduct from "../components/NewProduct";
import NexsusRock from "../components/NexsusRock";
import ProductDetailsServices from "../components/ProductDetailsServices";
import ProductSpecifications from "../components/ProductSpecifications";
function ProductDetailPage() {
  
  
  


  return (
    <div className=" mt-16">
      <Container>
        <div className=" flex items-center gap-x-5 text-[#303030] font-montserrat text-base font-normal leading-6">
          <div>Home</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div>Computers & Tablets</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <div>Laptop</div>
          <span className=" h-[15px] w-[1px] bg-[#303030]"></span>
          <span className=" font-bold">
            NexSUS ROCK Strix Scar 17 Gaming Laptop
          </span>
        </div>

        <NexsusRock/>
        <ProductDetailsServices/>
        <ProductSpecifications/>
        <NewProduct heading={"Related Products"} isProductDetailPage={true}/>
        
      </Container>
    </div>
  );
}

export default ProductDetailPage;
