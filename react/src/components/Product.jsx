import React from "react";

export default function Product({ title, price, discountedPrice, description }) {
  return (
    <div className="product">
      <p className="product-title">{title}</p>
      <p className="product-price">
        Price: <span className="oldPrice">Rs.{price}</span> Rs.{discountedPrice}
      </p>
      <p className="product-description">{description}</p>
    </div>
  );
}
