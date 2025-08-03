import React from "react";
import "../../Styles/navBar.css";
import { PRODUCTS } from "../../Products";
import { Product } from "./Product";

function Shop() {
  return (
    <div className="shop">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
    </div>
  );
}

export default Shop;