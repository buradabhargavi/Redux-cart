import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";
import "./MainHeader.css";

function MainHeader() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleCartClick = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <header className="header">
      <h1 className="title">ReduxCart</h1>
      <button onClick={handleCartClick} className="cart-button">
        Cart ({cartItems.length})
      </button>
    </header>
  );
}

export default MainHeader;
