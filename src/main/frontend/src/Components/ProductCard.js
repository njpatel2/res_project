import React from "react";

import "./Css/ProductCard.css";
import Card from "./Card";

function ProductCard(props) {
  return (
    <Card className="product-card">
      <div className="product-image">
        <img
          src={process.env.PUBLIC_URL + "/images/pizza-3.jpg"}
          alt="Product 1"
        />
      </div>
      <div className="product-details">
        <h3>{props.name}</h3>
        <p>{props.details}</p>
        <div className="price-button-container">
          <p className="price">{props.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </Card>
  );
}
export default ProductCard;
