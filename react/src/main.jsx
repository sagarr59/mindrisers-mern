import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="title">
      <h1>Products</h1>
    </div>

    <hr />
    <div className="products">
      <div className="product">
        <p className="product-title">Watch</p>
        <p className="product-price"> Price: Rs.1000</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          placeat cum consectetur vitae assumenda repellendus pariatur facere
          atque doloribus voluptates quae enim recusandae, tempore modi nam et
          velit alias ea.
        </p>
      </div>
      <div className="product">
        <p className="product-title">Mobile</p>
        <p className="product-price">Price: Rs.2000</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ratione
          labore voluptate eligendi repellendus ex accusantium quo eveniet culpa
          nihil illum id debitis quia cum dolores tenetur praesentium explicabo
          sit?
        </p>
      </div>
      <div className="product">
        <p className="product-title">Laptop</p>
        <p className="product-price"> Price: Rs.30000</p>
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta
          maxime atque, voluptatem perspiciatis animi corrupti temporibus vitae
          omnis non molestiae exercitationem voluptates quis praesentium hic
          aliquid! Laboriosam, pariatur saepe!
        </p>
      </div>
    </div>
  </React.StrictMode>
);

/* 
Research: component = function that return HTML code
how to make and use component 
how to pass value in component
 */
