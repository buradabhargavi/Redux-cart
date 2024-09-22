import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAcions } from "../Store/cart-slice";

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

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemId}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
              <button onClick={() => increaseQuantityHandler(item.itemId)}>
                Increase
              </button>
              <button onClick={() => decreaseQuantityHandler(item.itemId)}>
                Decrease
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
