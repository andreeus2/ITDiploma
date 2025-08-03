
import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import "../../Styles/CartItem.css";

function CartItem(props) {
  console.log(props);
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <div class="card">
      <img src={productImage} alt="prodIma"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <p> Size: {props.selectSize}</p>
        <p> Color: {props.selectColor}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
