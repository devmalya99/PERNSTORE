import React from "react";
import ProductHeroCards from "../components/ProductHeroCards";
import { FaPlus } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className=" mx-10">

      

      <div className="flex flex-wrap justify-center gap-3 mt-6">

      <ProductHeroCards />
      <ProductHeroCards />
      <ProductHeroCards />
      <ProductHeroCards />
      <ProductHeroCards />
      <ProductHeroCards />
    
      </div>

      
    </div>
  );
};

export default HomePage;
