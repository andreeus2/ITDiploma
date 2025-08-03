
import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context"
import { PRODUCTS } from "../../Products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "../../Styles/Cart.css"

function Cart(){

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} selectSize={cartItems.selectSize} selectColor={cartItems.selectColor} />;
          }
          return <CartItem />
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h2> Subtotal: ${totalAmount} </h2>
          <button onClick={() => navigate("/Products")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;