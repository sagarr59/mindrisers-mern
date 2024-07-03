import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Product from "./components/Product.jsx";

let title = "PRODUCTS LISTS";
let products = [
  {
    title: "mobile",
    price: 10000,
    discountedPrice: 9000,
    description:
      "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "watch",
    price: 10000,
    discountedPrice: 9000,
    description:
      "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "keyboard",
    price: 1000,
    discountedPrice: 900,
    description:
      "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>{title}</h1>
    <main className="mainContent">
      <div className="mainContainer">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
            description={product.description}
          />
        ))}
      </div>
    </main>
    
  </React.StrictMode>
);
