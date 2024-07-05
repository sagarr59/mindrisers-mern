import React from "react";



export default function Product(props) {
  return (
    <div className="mainContainer">
      <div className="product">
        <p className="product-title">{props.title}</p>
        <p className="product-price">
          Price: <span className="oldPrice">Rs.{props.price}</span> Rs.
          {props.discountedPrice}
        </p>
        <p className="product-description">{props.description}</p>
      </div>
    </div>
  );
}
