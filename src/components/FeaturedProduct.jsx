import React from "react";
import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";

const FeaturedProduct = () => {
  return (
    <div className="mb-[80px]">
      <Container>
        <div className=" flex gap-1">
          <ProductLayout
            productName={"PHONE"}
            tittle={"JPhone 13 High Quality Value Buy Best Cam..."}
            price={"$999.00"}
          />
          <ProductLayout
            productName={"AUDIO"}
            tittle={"WH-1000XM4 Wireless Headphones High Qu..."}
            price={"$59.00"}
            oldPrice={"$118.00"}
          />
          <ProductLayout
            productName={"LAPTOP"}
            tittle={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."}
            price={"$1,199.00"}
          />
          <ProductLayout
            productName={"CAMERA"}
            tittle={"Mini Polaroid Camera for Girls with Flash Li..."}
            price={"$79.00"}
          />
          <ProductLayout
            productName={"TELEVISION"}
            tittle={"AG OLED65CXPUA 4K Smart OLED TV New ..."}
            price={"$2,799.00"}
          />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
