
import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import "../../Styles/Product.css"; 

export const Product = (props) => {
  const { id, productName, price, productImage, size, color } = props.data;
  const [selectSize, setSelectSize] = useState('XS');
  const [selectColor, setSelectColor] = useState('Black');
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];


  return (
      <div className="containter">
        <div className="card">
            <img src={productImage} alt="product"/>
            <p className="price">${price}</p>
            <select name="size" value={selectSize}
            onChange={e =>setSelectSize(e.target.value)}>
              {size.map((sizes) => (
                <option id={sizes} value={sizes}>
                    {sizes}
                </option>
              ))}
               </select>
            <select name="colors" value={selectColor}
            onChange={e =>setSelectColor(e.target.value)}>
              {color.map((colors) => (
                <option id={color} value={colors}>
                    {colors}
                </option>
              ))}
            </select>
            <p>
              <button className="addToCartBttn" onClick={() => addToCart(id, selectSize, selectColor)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
            </p>
        </div>
    </div>
  );
};
