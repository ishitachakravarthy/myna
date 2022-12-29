import './Home.css';
import React from "react";
import ProductCard from '../ProductCard';

function Home() {
  return (
    <div className="row">
      New Products
      <div class="containerprod">
        <div class="grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
      
  );
}

export default Home;