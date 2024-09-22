import React from "react";
import "./Products.css";
import { useDispatch } from "react-redux";
import { cartAcions } from "../Store/cart-slice";

const products = [
  {
    id: 1,
    name: "Product 1",
    Price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    Price: 39.99,
  },
];

function Product() {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(cartAcions.addItemToCart(product));
  };
  return (
    <div className="product-container">
      <h2 className="product-title">Buy Your Favorite Product</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.Price.toFixed(2)}</p>
            <button
              className="add-button"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
