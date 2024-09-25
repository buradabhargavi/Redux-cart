import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAcions } from "../Store/cart-slice";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const increaseQuantityHandler = (itemId) => {
    dispatch(cartAcions.addItemToCart({ id: itemId, Price: 0 }));
  };

  const decreaseQuantityHandler = (itemId) => {
    dispatch(cartAcions.removeItemFromCart(itemId));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="no-items">No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemId}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.totalPrice.toFixed(2)}</p>

              <button onClick={() => decreaseQuantityHandler(item.itemId)}>
                Decrease
              </button>
              <button onClick={() => increaseQuantityHandler(item.itemId)}>
                Increase
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="toal-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-button" disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
