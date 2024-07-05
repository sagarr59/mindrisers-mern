import React from "react"
import Product from "./Product"

const products = [
  {
    title: "Mobile",
    price: 10000,
    featured: true,
    discountedPrice: 9000,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "Watch",
    price: 10000,
    featured: false,
    discountedPrice: 9000,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "Keyboard",
    price: 1000,
    featured: true,
    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "Laptop",
    price: 1000,
    featured: false,
    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
  {
    title: "CPU",
    price: 1000,
    featured: true,
    discountedPrice: 900,
    description: "fasdf lroeam .. asdfadsfasdf lroeam .. asdfadsfasdf lroeam .. asdfads",
  },
]

const title = "FEATURED PRODUCTS LIST"
const featuredProducts = products.filter((el) => el.featured)
const normalProducts = products.filter((el) => !el.featured)

function ProductsList() {
  return (
    <>
      <h1>{title}</h1>
      <div className="mainContainer">
        {featuredProducts.map((el, index) => (
          <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
        ))}
      </div>
      <br />
      <br />
      <h1>NORMAL PRODUCTS</h1>
      <div className="mainContainer">
        {normalProducts.map((el, index) => (
          <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
        ))}
      </div>
    </>
  )
}

export default ProductsList
