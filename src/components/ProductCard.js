import './pages/Home.css';
import React from "react";

function ProductCard() {
  return (
      <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0080/8235/8362/products/Butterscotch-Cake-2_360x.jpg?v=1630922217" alt="" />
                </div>
                <div class="card_body">
                    <h2 class="card_title">Chocolate Cake</h2>
                    <h6 class="designation">200</h6>
                    <div class="call_btn">
                        <a href="#" class="btn_icon">
                            Add to cart
                        </a>
                        <br />
                        <a href="#" class="btn_icon">
                            Delete from cart
                        </a>
                    </div>
                </div>
            </div>
           
  );
}

export default ProductCard;